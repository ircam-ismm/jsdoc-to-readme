# My-lib

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

tempor incididunt ut labore et dolore magna aliqua. 

## Table of Contents

<!-- toc -->

- [Install](#install)
- [API](#api)
  * [BaseTest](#basetest)
- [MISC](#misc)

<!-- tocstop -->

## Install

// ...

## API

<!-- api -->

<a name="BaseTest"></a>

### BaseTest
**Kind**: global class  
**Date**: 2022-01-05  

* [BaseTest](#BaseTest)
    * [new BaseTest()](#new_BaseTest_new)
    * [.checkElement(el)](#BaseTest+checkElement) ⇒ <code>any</code>
    * [.hasClass(element, classname)](#BaseTest+hasClass) ⇒ <code>any</code>
    * [.hasId(element, id)](#BaseTest+hasId) ⇒ <code>any</code>
    * [.hasAttr(element, attribute)](#BaseTest+hasAttr) ⇒ <code>any</code>
    * [.hasDataTest(element, key, value)](#BaseTest+hasDataTest) ⇒ <code>any</code>
    * [.hasHTML(element, html)](#BaseTest+hasHTML) ⇒ <code>any</code>
    * [.hasChild(element, child)](#BaseTest+hasChild) ⇒ <code>any</code>
    * [.exists(element)](#BaseTest+exists) ⇒ <code>any</code>
    * [.visible(element)](#BaseTest+visible) ⇒ <code>any</code>
    * [.hasCSS(element, key, value)](#BaseTest+hasCSS) ⇒ <code>any</code>

<a name="new_BaseTest_new"></a>

#### new BaseTest()
let baseTest = new BaseTest()

<a name="BaseTest+checkElement"></a>

#### baseTest.checkElement(el) ⇒ <code>any</code>
ensures that you can pass in jquery or string

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| el | <code>any</code> | 

<a name="BaseTest+hasClass"></a>

#### baseTest.hasClass(element, classname) ⇒ <code>any</code>
hasClass(element, classname)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| classname | <code>any</code> | 

**Example**  
```js
let hasClass = baseTest.hasClass(el, "yonas")
     let hasClassFalse = baseTest.hasClass(el, "no")
```
<a name="BaseTest+hasId"></a>

#### baseTest.hasId(element, id) ⇒ <code>any</code>
hasId(element, id)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| id | <code>any</code> | 

**Example**  
```js
let hasIdTrue = baseTest.hasId(el, "yon")
     console.log('hasIdTrue:', hasIdTrue);
     let hasIdFalse = baseTest.hasId(el, "whatsup")
     console.log('hasIdFalse:', hasIdFalse);
```
<a name="BaseTest+hasAttr"></a>

#### baseTest.hasAttr(element, attribute) ⇒ <code>any</code>
hasAttr(element, attribute)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| attribute | <code>any</code> | 

**Example**  
```js
let hasAttrTrue = baseTest.hasAttr(el, "disabled")
     console.log('hasAttrTrue:', hasAttrTrue);
     let hasAttrFalse = baseTest.hasAttr(el, "no")
     console.log('hasAttrFalse:', hasAttrFalse);
```
<a name="BaseTest+hasDataTest"></a>

#### baseTest.hasDataTest(element, key, value) ⇒ <code>any</code>
hasDataTest(element, key, value = "")

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type | Default |
| --- | --- | --- |
| element | <code>any</code> |  | 
| key | <code>any</code> |  | 
| value | <code>any</code> | <code>&quot;&quot;</code> | 

**Example**  
```js
let hasDataTrue = baseTest.hasDataTest(el, "problem_id")
     console.log('hasDataTrue:', hasDataTrue);
     let hasDataFalse = baseTest.hasDataTest(el, "task_id")
     console.log('hasDataFalse:', hasDataFalse);
         let hasDataTrueTrue = baseTest.hasDataTest(el, "problem_id", 3)
         console.log("🚀 ~ file: baseTest.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
         let hasDataTrueTrue2 = baseTest.hasDataTest(el, "problem_id", "3")
         console.log("🚀 ~ file: baseTest.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
```
<a name="BaseTest+hasHTML"></a>

#### baseTest.hasHTML(element, html) ⇒ <code>any</code>
hasHTML(element, html)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| html | <code>any</code> | 

**Example**  
```js
let htmlTrue = baseTest.hasHTML(el, "<div>baller</div>")
     console.log("🚀 ~ file: baseTest.js ~ line 80 ~ htmlTrue", htmlTrue)
     let htmlFalse = baseTest.hasHTML(el, "whatthef")
     console.log("🚀 ~ file: baseTest.js ~ line 82 ~ htmlFalse", htmlFalse)
     let htmltext = baseTest.hasHTML(el, "ll")
     console.log("🚀 ~ file: baseTest.js ~ line 84 ~ htmltext", htmltext)
```
<a name="BaseTest+hasChild"></a>

#### baseTest.hasChild(element, child) ⇒ <code>any</code>
hasChild(element, child)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| child | <code>any</code> | 

**Example**  
```js
let ChildTrue1 = baseTest.hasChild(el, ".supergrandchild")
     console.log("🚀 ~ file: baseTest.js ~ line 103 ~ ChildTrue1", ChildTrue1)
     let hasChildFalse = baseTest.hasChild(el, ".what")
     console.log("🚀 ~ file: baseTest.js ~ line 105 ~ hasChildFalse", hasChildFalse)
```
<a name="BaseTest+exists"></a>

#### baseTest.exists(element) ⇒ <code>any</code>
exists(element)
     let existTrue = baseTest.exists(el)
     console.log("🚀 ~ file: baseTest.js ~ line 90 ~ existTrue", existTrue)
     let existFalse = baseTest.exists($(".love"))
     console.log("🚀 ~ file: baseTest.js ~ line 92 ~ existFalse", existFalse)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 

<a name="BaseTest+visible"></a>

#### baseTest.visible(element) ⇒ <code>any</code>
visible(element)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 

**Example**  
```js
let visibleTrue = baseTest.visible(el)
     console.log("🚀 ~ file: baseTest.js ~ line 91 ~ visibleTrue", visibleTrue)
     let visibleFalse = baseTest.visible($(".noDisplay"))
     console.log("🚀 ~ file: baseTest.js ~ line 93 ~ visibleFalse", visibleFalse)
```
<a name="BaseTest+hasCSS"></a>

#### baseTest.hasCSS(element, key, value) ⇒ <code>any</code>
hasCSS(element, key, value)
     let hasCSSFalse = baseTest.hasCSS(el, "color", "#6f57e5")
     console.log("🚀 ~ file: baseTest.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
     let hasCSSTrue = baseTest.hasCSS(el, "display", "flex")
     console.log("🚀 ~ file: baseTest.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)

**Kind**: instance method of [<code>BaseTest</code>](#BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| key | <code>any</code> | 
| value | <code>any</code> | 


<!-- apistop -->

## MISC
