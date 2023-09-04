#!/usr/bin/env node

import * as documentation from 'documentation';
import commandLineArgs from 'command-line-args';
import fs from 'fs';
import path from 'path';

const optionDefinitions = [
  { name: 'src', type: String, multiple: true, defaultOption: true },
  { name: 'output', alias: 'o', type: String },
  { name: 'heading-depth', alias: 'd', type: Number },
  { name: 'tag', alias: 't', type: String },
];

const options = Object.assign({
  src: [],
  output: 'README.md',
  'heading-depth': 3,
  tag: 'api',
}, commandLineArgs(optionDefinitions));

if (options.src.length === 0) {
  console.log('[jsdoc-to-readme] no source provided')
}

const build = await documentation.build(options.src, {
  markdownToc: true,
  markdownTocMaxDepth: options['heading-depth'],
})

const md = await documentation.formats.md(build);
const output = fs.readFileSync(options.output).toString();

const tag = options.tag;
const hasTagEnd = output.search(new RegExp(`<!--[ \t]*${tag}stop[ \t]-->`, 'm')) !== -1;

let find;
if (hasTagEnd) {
  find = new RegExp(`<!--[ \t]*${tag}[ \t]-->.*<!--[ \t]*${tag}stop[ \t]-->`, 'ms');
} else {
  find = new RegExp(`<!--[ \t]*${tag}[ \t]-->`, 'm');
}

const templateDataFormatted = `<!-- ${tag} -->
${md}
<!-- ${tag}stop -->`;

const readmeWithAPI = output.replace(find, templateDataFormatted);

fs.writeFileSync(options.output, readmeWithAPI);
