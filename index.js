#!/usr/bin/env node

// import jsdoc2md from 'jsdoc-to-markdown';
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

// input and output paths
const files = options.src;
const mdFile = options.output;

// get template data

const readme = fs.readFileSync(mdFile).toString();

const tag = options.tag;
const hasTagEnd = readme.search(new RegExp(`<!--[ \t]*${tag}stop[ \t]-->`, 'm')) !== -1;

let find;
if (hasTagEnd) {
  find = new RegExp(`<!--[ \t]*${tag}[ \t]-->.*<!--[ \t]*${tag}stop[ \t]-->`, 'ms');
} else {
  find = new RegExp(`<!--[ \t]*${tag}[ \t]-->`, 'm');
}
// console.log(jsdoc2md);
const build = await documentation.build(files, {
  markdownToc: true,
  markdownTocMaxDepth: options['heading-depth'],
})
const md = await documentation.formats.md(build);

// console.log(md)

// const templateData = jsdoc2md.getTemplateDataSync({ files });
// jsdoc2md.renderSync({
//   data: templateData,
//   template: '{{>main}}',
//   'heading-depth': options['heading-depth'],
//   // partial: 'partials/*.hbs',
//   // helper: 'helper/toLowerCase.cjs',
// })

const templateDataFormatted = `<!-- ${tag} -->
${md}
<!-- ${tag}stop -->`;

const readmeWithAPI = readme.replace(find, templateDataFormatted);

fs.writeFileSync(mdFile, readmeWithAPI);
