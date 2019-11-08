.DEFAULT_GOAL = help
.PHONY: help install build start restart wait-healthy sh logs watch-logs stop dev prod lint test test-watch fix

SHELL = /usr/bin/env bash
REAL_ENV = $$(if [[ $${ENV} = "prod" ]]; then echo "prod"; else echo "dev"; fi)
NAME = storybook-${REAL_ENV}
TAG = libero/storybook:${REAL_ENV}
EXISTING_CONTAINERS = $$(docker ps --all --quiet --filter "name=${NAME}")
MOUNT := $$(if [[ ${REAL_ENV} = "dev" ]]; then echo "--mount type=bind,source=$$(pwd)/gulpfile.babel.js,destination=/app/gulpfile.babel.js,readonly --mount type=bind,source=$$(pwd)/test/,destination=/app/test,readonly --mount type=bind,source=$$(pwd)/src/,destination=/app/src,readonly --mount type=bind,source=$$(pwd)/.storybook/,destination=/app/.storybook,readonly"; fi)
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

watch-logs: ## Follow the container's log
	docker logs --follow ${NAME}

stop: ## Stop the container
	@if [ -n "${EXISTING_CONTAINERS}" ]; then\
		docker rm --force ${EXISTING_CONTAINERS};\
	fi

dev: ## Build and runs the container for development
	ENV=dev make --jobs=2 stop build
	ENV=dev make start watch-logs

prod: ## Builds and runs the container for production
	ENV=prod make --jobs=2 stop build
	ENV=prod make start watch-logs

lint: ## Lint the code
	@if [ ${REAL_ENV} != "dev" ]; then\
		echo "Requires dev environment";\
		exit 1;\
	fi
	docker run --rm ${MOUNT} ${TAG} npx eslint .

test: ## Run code tests
	@if [ ${REAL_ENV} != "dev" ]; then\
		echo "Requires dev environment";\
		exit 1;\
	fi
	docker run --rm ${MOUNT} ${TAG} npx gulp validateSass

test-watch: ## Rerun code tests on code / test changes
	@if [ ${REAL_ENV} != "dev" ]; then\
		echo "Requires dev environment";\
		exit 1;\
	fi
    # Execute npx in a shell so that Ctrl+C/SIGTERM is handled (I am not sure by whom, but probably the shell
    # even on PID 1), however, pipe to tee so that with two subprocesses are there and busybox, the shell used in the
    # node image, cannot inline (as in with exec) the npx process as PID 1
	docker run -it --rm ${MOUNT} ${TAG} sh -c 'npx gulp watchSass | tee'

fix: ## Fix linting issues in the code
	@if [ ${REAL_ENV} != "dev" ]; then\
		echo "Requires dev environment";\
		exit 1;\
	fi
	docker run --rm ${MOUNT_WRITE} ${TAG} npx eslint --fix .
