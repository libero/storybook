Libero Storybook
================

[![Build Status](https://travis-ci.com/libero/storybook.svg?branch=master)](https://travis-ci.com/libero/storybook)

Requirements
------------

- [Docker](https://www.docker.com/)
- [GNU Make](https://www.gnu.org/software/make/)
- [Node.js](https://nodejs.org/) (for development)

Developing
----------

To install dependencies locally:

```shell
make install
```

To run the development Storybook:

```shell
make start
```

Then open http://localhost:8080/ in your browser.

To follow the containers' logs, execute:

```shell
make watch
```

To stop the containers, execute:

```shell
make stop
```

Getting help
------------

- Report a bug or request a feature on [GitHub](https://github.com/libero/publisher/issues/new/choose).
- Ask a question on the [Libero Community Slack](https://libero.pub/join-slack).
- Read the [code of conduct](https://libero.pub/code-of-conduct).
