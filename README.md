# has-ext [![Build Status](https://travis-ci.org/torrottum/has-ext.svg?branch=master)](https://travis-ci.org/torrottum/has-ext)
> Check if a filepath has extension(s)

## Install
`$ npm install --save has-ext`

## Usage
```js
var hasExt = require('has-ext');

hasExt('file.txt', 'txt');
//=> true

hasExt('file.TXT', 'txt');
//=> true

hasExt('file.png', 'txt')
//=> false

hasExt('file.jpg', ['png', 'jpg'])
//=> true

hasExt('file.txt', ['png', 'jpg'])
//=> false
```
