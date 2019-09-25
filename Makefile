.DEFAULT_GOAL = help

DEV = docker-compose --file docker-compose.dev.yml
PROD = docker-compose --file docker-compose.prod.yml

help: ## Display this help text
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies locally
	npm install

build: ## Build the container
	${DEV} build --pull

start: build ## Start the container
	${DEV} up --detach

exec: ## Execute a command on the container
	${DEV} exec app $(cmd)

sh: ## Open a shell on the container
	${DEV} exec app sh

logs: ## Show the container's log
	${DEV} logs

watch: ## Follow the container's log
	${DEV} logs --follow

stop: ## Stop the container
	${DEV} down --volumes --remove-orphans

compile: ## Build the prod container
	${PROD} build --pull

run: compile ## Run the prod container
	${PROD} up
