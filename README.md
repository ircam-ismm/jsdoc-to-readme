# `jsdoc-to-readme`

> Simple cli tool to inject jsdoc result into README.md files
 
The tools is a simple wrapper around the [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown) package, to inject directly JSDoc markdown output into the a markdown file (generally the `README.md`) on the model proposed by [markdown-toc](https://www.npmjs.com/package/markdown-toc). 

The tools looks for a `<!-- api -->` tag in the README and inject the `jsdoc-to-markdown` result at this location. Usefull for small libraries where creating a full API website is cumbersome.

## Install

```sh
npm install --save-dev jsdoc-to-readme
```

## CLI

```txt
Usage: jsdoc-to-readme [options]

    --src:              The source files to parse using `jsdoc-to-mardown`

    --output:           The mardown file in which injecting the documentation 
                        at <!-- api --> (defaults to README.md)

    --heading-depth:    The title level of the generated documentation 
                        (defaults to 3)
```

## Example Use

The tool has been developped to play well with [markdown-toc](https://www.npmjs.com/package/markdown-toc). To simply create README files that contain both a table of content and API documentation. You can see an example of `README.md` created using these tools at [https://github.com/ircam-ismm/sync](https://github.com/ircam-ismm/sync) or [https://github.com/ircam-ismm/node-libpd](https://github.com/ircam-ismm/node-libpd)

#### 1. Install deps

```sh
npm install --save-dev jsdoc-to-readme markdown-toc
```

#### 2. Add the following scripts to your `package.json`

```js
"scripts": {
    "api": "jsdoc-to-readme --src src/index.js",
    "toc": "markdown-toc -i README.md  --maxdepth 3",
    "doc": "npm run api && npm run toc",
    // ...
}
```

_**caveat**_: the `markdown-toc` option `--maxdepth` is set to 3, which is the level at which `jsdoc-to-readme` starts to create titles by default. This is needed to prevent some confusions in the way the toc is being processed and avoid broken links in the toc.

#### 3. Insert the `<!-- toc -->` and `<!-- api -->` tags in your `README` file

```
# My-lib

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. 

## Table of Contents

<!-- toc -->

## Install

// ...

## API

<!-- api -->

## MISC

```

#### 4. Run the script

```sh
npm run doc
```

## License

BSD-3-Clause


