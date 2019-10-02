.DEFAULT_GOAL = help

REAL_ENV = $$(if [[ $${ENV} = "prod" ]]; then echo "prod"; else echo "dev"; fi)
NAME = storybook-${REAL_ENV}
TAG = libero/storybook:${REAL_ENV}
EXISTING_CONTAINERS = $$(docker ps --all --quiet --filter "name=${NAME}")
MOUNT := $$(if [[ ${REAL_ENV} = "dev" ]]; then echo "--mount type=bind,source=$$(pwd)/src/,destination=/app/src,readonly --mount type=bind,source=$$(pwd)/.storybook/,destination=/app/.storybook,readonly"; fi)
MOUNT_WRITE := $$(if [[ ${REAL_ENV} = "dev" ]]; then echo "--mount type=bind,source=$$(pwd)/src/,destination=/app/src --mount type=bind,source=$$(pwd)/.storybook/,destination=/app/.storybook"; fi)

help: ## Display this help text
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies locally
	npm install

build: ## Build the container
	docker build --target ${REAL_ENV} --tag ${TAG} .

start: ## Start the container
	docker run --detach --name ${NAME} --publish 8080:8080 ${MOUNT} ${TAG}

restart: stop start  ## Stop the container if it's running, then start it

wait-healthy: ## Wait for the container to be healthy
	.scripts/docker/wait-healthy.sh ${NAME}

sh: ## Open a shell on the container
	docker exec --interactive --tty ${NAME} sh

logs: ## Show the container's log
	docker logs ${NAME}

watch: ## Follow the container's log
	docker logs --follow ${NAME}

stop: ## Stop the container
	@if [ -n "${EXISTING_CONTAINERS}" ]; then\
		docker rm --force ${EXISTING_CONTAINERS};\
	fi

rebuild: ## Stop, build and restart the container
	make stop build restart

dev: ## Build and runs the container for development
	ENV=dev make --jobs=2 stop build
	ENV=dev make start watch

prod: ## Builds and runs the container for production
	ENV=prod make --jobs=2 stop build
	ENV=prod make start

lint: ## Lint the code
	@if [ ${REAL_ENV} != "dev" ]; then\
		echo "Requires dev environment";\
		exit 1;\
	fi
	docker run --rm ${MOUNT} ${TAG} npx eslint .

fix: ## Fix linting issues in the code
	@if [ ${REAL_ENV} != "dev" ]; then\
		echo "Requires dev environment";\
		exit 1;\
	fi
	docker run --rm ${MOUNT_WRITE} ${TAG} npx eslint --fix .
