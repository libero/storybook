Libero Storybook
================

[![Build Status](https://travis-ci.com/libero/storybook.svg?branch=master)](https://travis-ci.com/libero/storybook)

Requirements
------------

- [Docker](https://www.docker.com/)
- [GNU Bash](https://www.gnu.org/software/bash/)
- [GNU Make](https://www.gnu.org/software/make/)
- [Node.js](https://nodejs.org/) (for development)

Running
-------

To run Storybook, execute

```shell
make prod
```

then open http://localhost:8080/ in your browser.

Developing
----------

To install dependencies locally (this only needs to be done once), execute:

```shell
make install
```

To build and run the Storybook container, and follow the container's log:

```shell
make dev
```

Then open http://localhost:8080/ in your browser.

To lint the JavaScript (report only), execute:
```shell
make lint
```

To lint the JavaScript (report and fix), execute:
```shell
make fix
```

Getting help
------------

- Report a bug or request a feature on [GitHub](https://github.com/libero/publisher/issues/new/choose).
- Ask a question on the [Libero Community Slack](https://libero.pub/join-slack).
- Read the [code of conduct](https://libero.pub/code-of-conduct).
