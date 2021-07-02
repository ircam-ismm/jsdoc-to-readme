#!/usr/bin/env node
import jsdoc2md from 'jsdoc-to-markdown';
import commandLineArgs from 'command-line-args';
import fs from 'fs';
import path from 'path';

const optionDefinitions = [
  { name: 'src', type: String, multiple: true, defaultOption: true },
  { name: 'output', alias: 'o', type: String },
  { name: 'heading-depth', alias: 'd', type: Number }
]

const options = Object.assign({
  src: [],
  output: 'README.md',
  'heading-depth': 3,
}, commandLineArgs(optionDefinitions));

if (options.src.length === 0) {
  console.log('[jsdoc-to-readme] no source provided')
}

// input and output paths
const files = options.src;
const mdFile = options.output;

// get template data
const templateData = jsdoc2md.getTemplateDataSync({ files });

const readme = fs.readFileSync(mdFile).toString();

const tag = 'api';
const hasTagEnd = readme.search(new RegExp(`<!--[ \t]*${tag}stop[ \t]-->`, 'm')) !== -1;

let find;
if (hasTagEnd) {
  find = new RegExp(`<!--[ \t]*${tag}[ \t]-->.*<!--[ \t]*${tag}stop[ \t]-->`, 'ms');
} else {
  find = new RegExp(`<!--[ \t]*${tag}[ \t]-->`, 'm');
}

const templateDataFormatted = `<!-- ${tag} -->

${jsdoc2md.renderSync({
  data: templateData,
  template: '{{>main}}',
  'heading-depth': options['heading-depth'],
})}
<!-- ${tag}stop -->`;

const readmeWithAPI = readme.replace(find, templateDataFormatted);

fs.writeFileSync(mdFile, readmeWithAPI);
