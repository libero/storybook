.DEFAULT_GOAL = help

REAL_ENV = dev
NAME = storybook-${REAL_ENV}
TAG = libero/storybook:${REAL_ENV}
EXISTING_CONTAINERS = $$(docker ps --all --quiet --filter "name=${NAME}")
MOUNT := $$([[ ${REAL_ENV} = "dev" ]] && echo "--mount type=bind,source=$$(pwd)/src/,destination=/app/src" || echo "")

help: ## Display this help text
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies locally
	npm install

build: ## Build the container
	docker build --target ${REAL_ENV} --tag ${TAG} .

start: ## Start the container
	docker run --detach --name ${NAME} --publish 8080:8080 ${MOUNT} ${TAG}

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
