Libero Storybook
================

[![Build Status](https://travis-ci.com/libero/storybook.svg?branch=master)](https://travis-ci.com/libero/storybook)

Requirements
------------

- [Docker](https://www.docker.com/)
- [GNU Make](https://www.gnu.org/software/make/)
- [Node.js](https://nodejs.org/) (for development)

Running
-------

To run Storybook, execute

```shell
ENV=prod make stop build start watch
```

then open http://localhost:8080/ in your browser.

Developing
----------

To install dependencies locally, execute:

```shell
make install
```

To build the Storybook container:

```shell
make build
```

To run Storybook, execute:

```shell
make start
```

To lint the JavaScript (report only), execute:
```shell
make lint
```

To lint the JavaScript (report and fix), execute:
```shell
make fix
```

Then open http://localhost:8080/ in your browser.

To follow the container's log, execute:

```shell
make watch
```

To stop the container, execute:

```shell
make stop
```

Getting help
------------

- Report a bug or request a feature on [GitHub](https://github.com/libero/publisher/issues/new/choose).
- Ask a question on the [Libero Community Slack](https://libero.pub/join-slack).
- Read the [code of conduct](https://libero.pub/code-of-conduct).
