.DEFAULT_GOAL = help

DEV = docker-compose --file docker-compose.dev.yml

help: ## Display this help text
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies locally
	npm install

build: ## Build the containers
	${DEV} build --pull

start: build ## Start the containers
	${DEV} up --detach

exec: ## Execute a command on the app container
	${DEV} exec app $(cmd)

sh: ## Open a shell on the app container
	${DEV} exec app sh

logs: ## Show the containers' logs
	${DEV} logs

watch: ## Follow the containers' logs
	${DEV} logs --follow

stop: ## Stop the containers
	${DEV} down --volumes --remove-orphans
