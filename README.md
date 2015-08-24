[![NPM Version](http://img.shields.io/npm/v/browser-dectector.svg?style=flat)](https://npmjs.org/package/browser-dectector)
[![Build Status](http://img.shields.io/travis/royriojas/browser-dectector.svg?style=flat)](https://travis-ci.org/royriojas/browser-dectector)

# browser-dectector
A wrapper over [ua-parser-js](https://www.npmjs.com/package/ua-parser-js) that will
also add the detected classes to the html element

## Install

```bash
npm i --save browser-dectector
```

## Usage

```javascript
var env = require('browser-dectector');
// after the module has been required
// the html element will have the classes for the browser, os, device and engine
// this is useful to add certain classes only to a given browser
// mostly because of msie9-msie10 is still out there

// env.browser.name
// env.browser.version
// env.device
// env.engine
// check for https://www.npmjs.com/package/ua-parser-js
```

## License

[MIT](./LICENSE)

## Changelog

[Changelog](./changelog.md)
