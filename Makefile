.DEFAULT_GOAL = help

NAME = storybook-dev
EXISTING_CONTAINERS = $$(docker ps --all --quiet --filter "name=${NAME}")

help: ## Display this help text
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies locally
	npm install

build: ## Build the container
	docker build --target dev --tag libero/storybook:latest .

start: ## Start the container
	docker run --detach --name ${NAME} libero/storybook:latest

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
