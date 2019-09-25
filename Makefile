.DEFAULT_GOAL = help

DEV = docker-compose --file docker-compose.dev.yml

help: ## Display this help text
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies locally
	npm install

build-dev: ## Build development environment
	${DEV} build --pull

start-dev: build-dev ## Start development environment
	${DEV} up --detach

execute-dev: ## Execute a command on the development environment
	${DEV} exec app $(cmd)

log-dev: ## Log development environment
	${DEV} logs --follow

stop-dev: ## Stop development environment
	${DEV} down --volumes --remove-orphans
