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

## Grid system

### Concept
The grid comprises a full-viewport-width grid within which is a central section of 12<sup>*</sup> equal-sized columns. The central 12 columns are collectively known as the `main` part of the grid, which holds the content of the page. The full width of the grid from viewport edge to viewport edge is known as the `full` width grid. The `full` width grid exists in order to allow items of content to give the impression of breaking out of the (`main` part of the) grid. It should also make it easier to implement [subgrids](https://www.w3.org/TR/css-grid-2/#subgrids) when they get browser support.

<sup>*</sup>12 is the default number of columns, but this can be configured. See "Configuring the grid" below. 

### Implementation

All grids are in `src/patterns/grids/`.  

The grid is implemented using CSS grid. Non-supporting browsers will display a single centred column, constrained to the specified max width, with a minimum inline start / end page gutter set the same as the grid column gap. 

Page templates implementing this grid system should use the page grid template. `page-grid.twig` sets up the rows of the top level explicit grid, and handles loading of the lower order grids that directly control content layout with respect to the grid columns (e.g. the content grid `content-grid.twig`).  

In order to preserve the capabilities of seeming to break out of the grid, and of attempting to be future-friendly to sub grids, every lower order grid (i.e. below the level of `page-grid`) must span the `full` width of the grid, and, in addition to anything else the template does, supply css classes to allow its items to span the `full` or `main` width of the grid. For example the `content-grid` provides the css classes `content-grid__item--full` and `content-grid__item--main` respectively.

All nested levels of grid must conform to this `main` / `full` model in order to retain the benefits of this approach.

#### Grid templates

##### `page-grid`
The top level page grid. It sets up the rows of the top level explicit grid as named areas `start`, `main` and `end`. Typically `start` and `end` would be used to hold the site header and site footer respectively, with everything else located in the `main` row. This is the template to include directly in implementations. Lower level grids, into which the page content actually loads, should be included by `page-grid`.

###### grid areas recommended usage
- `start`: put the site header here
- `main`: put everything between the site header and footer here       
- `end`: put the site footer here

##### `content-grid`
The grid for all content pages (i.e. not listing pages). In addition to the capability to specify if content spans the entirety of the `main` or `full` sections, this grid defines areas called `primary`, `secondary`, and `menu`. These names are used for both the CSS grid area names and the twig template section names. This grid lays out content with a very similar layout to that of an eLife article.

###### grid areas recommended usage
- `primary`: the content that makes this page what it is
- `secondary`: supplementary info, typically used for asides       
- `menu`: a menu / navigation appropriate to the content level
   

#### Configuring the grid
The grid may be configured using the following Sass variables defined in `/src/shared-styles/_grid.scss`:

- `$max-inline-size` the max width of the `main` grid section in pixels (default: `1114px`)
- `$main-column-count` the number of columns in the `main` area of the grid (default: `12`).
- `$column-gap` the width between grid columns, also the minimum inline start / end page gutter when CSS grid is not supported by the browser; may be expressed in any css length unit (default: `1.6%`)  
- `$edge-space-medium`: a medium sized inline start / end page gutter (default: `7vw`), usage controlled by a breakpoint
- `$edge-space-large`: a large inline start / end page gutter (default: `14vw`), usage controlled by a breakpoint

## Sass

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
