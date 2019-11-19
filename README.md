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

## Sass

`padding` and `margin` mixins convert px to rem by default, to get the specified px values into the compiled CSS without conversion, pass `$to-rem: false` as the last argument to these mixins. 

### A note on logical property fallbacks
Fallbacks for [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) are implemented for horizontal writing directions (see [`_logical.scss`](https://github.com/libero/storybook/blob/master/src/shared-styles/_logical.scss)). At the moment they require the following treatment of HTML `dir` attributes:
  - document level: always specified, via the `<HTML>` element
  - block level: specified on every element within a block describing a direction switch.

 For example:
 ```html
 <html lang="..." dir="ltr">
 ...
 <div>
   Doesn't need a dir attribute. Most cases will be like this.
 </div>

<div class="test" dir="rtl">

  This block changes the text direction. Every descendant element must have its own dir attribute....

  <div class="test" dir="rtl">... even if the direction doesn't change.</div>

  <div class="test" dir="ltr">But obviously also when it does.</div>

</div>

```
Getting help
------------

- Report a bug or request a feature on [GitHub](https://github.com/libero/publisher/issues/new/choose).
- Ask a question on the [Libero Community Slack](https://libero.pub/join-slack).
- Read the [code of conduct](https://libero.pub/code-of-conduct).
