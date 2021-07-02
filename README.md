# `jsdoc-to-readme`

> Simple cli tool to inject jsdoc result into README.md files
 
The tools is a simple wrapper around the [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown) package, to inject directly JSDoc markdown output into the a markdown file (generally the `README.md`) on the model proposed by [markdown-toc](https://www.npmjs.com/package/markdown-toc). 

The tools looks for a `<!-- api -->` tag in the README and inject the `jsdoc-to-markdown` result at this location. Usefull for small libraries where creating a full API website is cumbersome.

## Install

```
npm install --save-dev jsdoc-to-readme
```

## CLI

```
Usage: jsdoc-to-readme [options]

    --src:              The source files to parse using `jsdoc-to-mardown`

    --output:           The mardown file in which injecting the documentation 
                        at <!-- api --> (defaults to README.md)

    --heading-depth:    The title level of the generated documentation 
                        (defaults to 3)
```

### License

BSD-3-Clause


