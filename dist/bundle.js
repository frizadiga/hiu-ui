/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\nprogress {\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:active,\na:hover {\n  outline-width: 0; }\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\nfigure {\n  margin: 1em 40px; }\n\nimg {\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  margin: 0; }\n\noptgroup {\n  font-weight: bold; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\nlegend {\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal; }\n\ntextarea {\n  overflow: auto; }\n\n[type=checkbox],\n[type=radio] {\n  padding: 0; }\n\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\n/* End extract */\n.i-amber {\n  color: #000 !important;\n  background-color: #ffc107 !important; }\n\n.i-aqua {\n  color: #000 !important;\n  background-color: #00ffff !important; }\n\n.i-blue {\n  color: #fff !important;\n  background-color: #2196f3 !important; }\n\n.i-light-blue {\n  color: #000 !important;\n  background-color: #87ceeb !important; }\n\n.i-brown {\n  color: #fff !important;\n  background-color: #795548 !important; }\n\n.i-cyan {\n  color: #000 !important;\n  background-color: #00bcd4 !important; }\n\n.i-blue-grey {\n  color: #fff !important;\n  background-color: #607d8b !important; }\n\n.i-green {\n  color: #fff !important;\n  background-color: #4caf50 !important; }\n\n.i-light-green {\n  color: #000 !important;\n  background-color: #8bc34a !important; }\n\n.i-indigo {\n  color: #fff !important;\n  background-color: #3f51b5 !important; }\n\n.i-khaki {\n  color: #000 !important;\n  background-color: #f0e68c !important; }\n\n.i-lime {\n  color: #000 !important;\n  background-color: #cddc39 !important; }\n\n.i-orange {\n  color: #000 !important;\n  background-color: #ff9800 !important; }\n\n.i-deep-orange {\n  color: #fff !important;\n  background-color: #ff5722 !important; }\n\n.i-pink {\n  color: #fff !important;\n  background-color: #e91e63 !important; }\n\n.i-purple {\n  color: #fff !important;\n  background-color: #9c27b0 !important; }\n\n.i-deep-purple {\n  color: #fff !important;\n  background-color: #673ab7 !important; }\n\n.i-red {\n  color: #fff !important;\n  background-color: #f44336 !important; }\n\n.i-sand {\n  color: #000 !important;\n  background-color: #fdf5e6 !important; }\n\n.i-teal {\n  color: #fff !important;\n  background-color: #009688 !important; }\n\n.i-yellow {\n  color: #000 !important;\n  background-color: #ffeb3b !important; }\n\n.i-white {\n  color: #000 !important;\n  background-color: #fff !important; }\n\n.i-black {\n  color: #fff !important;\n  background-color: #000 !important; }\n\n.i-grey {\n  color: #000 !important;\n  background-color: #9e9e9e !important; }\n\n.i-light-grey {\n  color: #000 !important;\n  background-color: #f1f1f1 !important; }\n\n.i-dark-grey {\n  color: #fff !important;\n  background-color: #616161 !important; }\n\n.i-pale-red {\n  color: #000 !important;\n  background-color: #ffdddd !important; }\n\n.i-pale-green {\n  color: #000 !important;\n  background-color: #ddffdd !important; }\n\n.i-pale-yellow {\n  color: #000 !important;\n  background-color: #ffffcc !important; }\n\n.i-pale-blue {\n  color: #000 !important;\n  background-color: #ddffff !important; }\n\n.i-text-amber {\n  color: #ffc107 !important; }\n\n.i-text-aqua {\n  color: #00ffff !important; }\n\n.i-text-blue {\n  color: #2196f3 !important; }\n\n.i-text-light-blue {\n  color: #87ceeb !important; }\n\n.i-text-brown {\n  color: #795548 !important; }\n\n.i-text-cyan {\n  color: #00bcd4 !important; }\n\n.i-text-blue-grey {\n  color: #607d8b !important; }\n\n.i-text-green {\n  color: #4caf50 !important; }\n\n.i-text-light-green {\n  color: #8bc34a !important; }\n\n.i-text-indigo {\n  color: #3f51b5 !important; }\n\n.i-text-khaki {\n  color: #b4aa50 !important; }\n\n.i-text-lime {\n  color: #cddc39 !important; }\n\n.i-text-orange {\n  color: #ff9800 !important; }\n\n.i-text-deep-orange {\n  color: #ff5722 !important; }\n\n.i-text-pink {\n  color: #e91e63 !important; }\n\n.i-text-purple {\n  color: #9c27b0 !important; }\n\n.i-text-deep-purple {\n  color: #673ab7 !important; }\n\n.i-text-red {\n  color: #f44336 !important; }\n\n.i-text-sand {\n  color: #fdf5e6 !important; }\n\n.i-text-teal {\n  color: #009688 !important; }\n\n.i-text-yellow {\n  color: #d2be0e !important; }\n\n.i-text-white {\n  color: #fff !important; }\n\n.i-text-black {\n  color: #000 !important; }\n\n.i-text-grey {\n  color: #757575 !important; }\n\n.i-text-light-grey {\n  color: #f1f1f1 !important; }\n\n.i-text-dark-grey {\n  color: #3a3a3a !important; }\n\n.i-border-amber {\n  border-color: #ffc107 !important; }\n\n.i-border-aqua {\n  border-color: #00ffff !important; }\n\n.i-border-blue {\n  border-color: #2196f3 !important; }\n\n.i-border-light-blue {\n  border-color: #87ceeb !important; }\n\n.i-border-brown {\n  border-color: #795548 !important; }\n\n.i-border-cyan {\n  border-color: #00bcd4 !important; }\n\n.i-border-blue-grey {\n  border-color: #607d8b !important; }\n\n.i-border-green {\n  border-color: #4caf50 !important; }\n\n.i-border-light-green {\n  border-color: #8bc34a !important; }\n\n.i-border-indigo {\n  border-color: #3f51b5 !important; }\n\n.i-border-khaki {\n  border-color: #f0e68c !important; }\n\n.i-border-lime {\n  border-color: #cddc39 !important; }\n\n.i-border-orange {\n  border-color: #ff9800 !important; }\n\n.i-border-deep-orange {\n  border-color: #ff5722 !important; }\n\n.i-border-pink {\n  border-color: #e91e63 !important; }\n\n.i-border-purple {\n  border-color: #9c27b0 !important; }\n\n.i-border-deep-purple {\n  border-color: #673ab7 !important; }\n\n.i-border-red {\n  border-color: #f44336 !important; }\n\n.i-border-sand {\n  border-color: #fdf5e6 !important; }\n\n.i-border-teal {\n  border-color: #009688 !important; }\n\n.i-border-yellow {\n  border-color: #ffeb3b !important; }\n\n.i-border-white {\n  border-color: #fff !important; }\n\n.i-border-black {\n  border-color: #000 !important; }\n\n.i-border-grey {\n  border-color: #9e9e9e !important; }\n\n.i-border-light-grey {\n  border-color: #f1f1f1 !important; }\n\n.i-border-dark-grey {\n  border-color: #616161 !important; }\n\n.i-border-pale-red {\n  border-color: #ffe7e7 !important; }\n\n.i-border-pale-green {\n  border-color: #e7ffe7 !important; }\n\n.i-border-pale-yellow {\n  border-color: #ffffcc !important; }\n\n.i-border-pale-blue {\n  border-color: #e7ffff !important; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\n[type=reset]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n[type=button]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n.i-bordered tr {\n  border-bottom: 1px solid #ddd; }\n\n.i-striped tbody tr:nth-child(even) {\n  background-color: #f1f1f1; }\n\n.i-hoverable tbody tr:hover {\n  background-color: #ccc; }\n\n.i-centered tr th {\n  text-align: center; }\n\n.i-centered tr td {\n  text-align: center; }\n\n:disabled * {\n  pointer-events: none; }\n\n.i-hover-shadow:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.i-hover-opacity:hover {\n  opacity: 0.60; }\n\n.i-hover-opacity-off:hover {\n  opacity: 1; }\n\n.i-hover-greyscale:hover {\n  filter: grayscale(100%); }\n\n.i-hover-sepia:hover {\n  filter: sepia(100%); }\n\n.i-hover-none:hover {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n.i-hover-amber:hover {\n  color: #000 !important;\n  background-color: #ffc107 !important; }\n\n.i-hover-aqua:hover {\n  color: #000 !important;\n  background-color: #00ffff !important; }\n\n.i-hover-blue:hover {\n  color: #fff !important;\n  background-color: #2196f3 !important; }\n\n.i-hover-light-blue:hover {\n  color: #000 !important;\n  background-color: #87ceeb !important; }\n\n.i-hover-brown:hover {\n  color: #fff !important;\n  background-color: #795548 !important; }\n\n.i-hover-cyan:hover {\n  color: #000 !important;\n  background-color: #00bcd4 !important; }\n\n.i-hover-blue-grey:hover {\n  color: #fff !important;\n  background-color: #607d8b !important; }\n\n.i-hover-green:hover {\n  color: #fff !important;\n  background-color: #4caf50 !important; }\n\n.i-hover-light-green:hover {\n  color: #000 !important;\n  background-color: #8bc34a !important; }\n\n.i-hover-indigo:hover {\n  color: #fff !important;\n  background-color: #3f51b5 !important; }\n\n.i-hover-khaki:hover {\n  color: #000 !important;\n  background-color: #f0e68c !important; }\n\n.i-hover-lime:hover {\n  color: #000 !important;\n  background-color: #cddc39 !important; }\n\n.i-hover-orange:hover {\n  color: #000 !important;\n  background-color: #ff9800 !important; }\n\n.i-hover-deep-orange:hover {\n  color: #fff !important;\n  background-color: #ff5722 !important; }\n\n.i-hover-pink:hover {\n  color: #fff !important;\n  background-color: #e91e63 !important; }\n\n.i-hover-purple:hover {\n  color: #fff !important;\n  background-color: #9c27b0 !important; }\n\n.i-hover-deep-purple:hover {\n  color: #fff !important;\n  background-color: #673ab7 !important; }\n\n.i-hover-red:hover {\n  color: #fff !important;\n  background-color: #f44336 !important; }\n\n.i-hover-sand:hover {\n  color: #000 !important;\n  background-color: #fdf5e6 !important; }\n\n.i-hover-teal:hover {\n  color: #fff !important;\n  background-color: #009688 !important; }\n\n.i-hover-yellow:hover {\n  color: #000 !important;\n  background-color: #ffeb3b !important; }\n\n.i-hover-white:hover {\n  color: #000 !important;\n  background-color: #fff !important; }\n\n.i-hover-black:hover {\n  color: #fff !important;\n  background-color: #000 !important; }\n\n.i-hover-grey:hover {\n  color: #000 !important;\n  background-color: #9e9e9e !important; }\n\n.i-hover-light-grey:hover {\n  color: #000 !important;\n  background-color: #f1f1f1 !important; }\n\n.i-hover-dark-grey:hover {\n  color: #fff !important;\n  background-color: #616161 !important; }\n\n.i-hover-pale-red:hover {\n  color: #000 !important;\n  background-color: #ffdddd !important; }\n\n.i-hover-pale-green:hover {\n  color: #000 !important;\n  background-color: #ddffdd !important; }\n\n.i-hover-pale-yellow:hover {\n  color: #000 !important;\n  background-color: #ffffcc !important; }\n\n.i-hover-pale-blue:hover {\n  color: #000 !important;\n  background-color: #ddffff !important; }\n\n.i-hover-text-amber:hover {\n  color: #ffc107 !important; }\n\n.i-hover-text-aqua:hover {\n  color: #00ffff !important; }\n\n.i-hover-text-blue:hover {\n  color: #2196f3 !important; }\n\n.i-hover-text-light-blue:hover {\n  color: #87ceeb !important; }\n\n.i-hover-text-brown:hover {\n  color: #795548 !important; }\n\n.i-hover-text-cyan:hover {\n  color: #00bcd4 !important; }\n\n.i-hover-text-blue-grey:hover {\n  color: #607d8b !important; }\n\n.i-hover-text-green:hover {\n  color: #4caf50 !important; }\n\n.i-hover-text-light-green:hover {\n  color: #8bc34a !important; }\n\n.i-hover-text-indigo:hover {\n  color: #3f51b5 !important; }\n\n.i-hover-text-khaki:hover {\n  color: #b4aa50 !important; }\n\n.i-hover-text-lime:hover {\n  color: #cddc39 !important; }\n\n.i-hover-text-orange:hover {\n  color: #ff9800 !important; }\n\n.i-hover-text-deep-orange:hover {\n  color: #ff5722 !important; }\n\n.i-hover-text-pink:hover {\n  color: #e91e63 !important; }\n\n.i-hover-text-purple:hover {\n  color: #9c27b0 !important; }\n\n.i-hover-text-deep-purple:hover {\n  color: #673ab7 !important; }\n\n.i-hover-text-red:hover {\n  color: #f44336 !important; }\n\n.i-hover-text-sand:hover {\n  color: #fdf5e6 !important; }\n\n.i-hover-text-teal:hover {\n  color: #009688 !important; }\n\n.i-hover-text-yellow:hover {\n  color: #d2be0e !important; }\n\n.i-hover-text-white:hover {\n  color: #fff !important; }\n\n.i-hover-text-black:hover {\n  color: #000 !important; }\n\n.i-hover-text-grey:hover {\n  color: #757575 !important; }\n\n.i-hover-text-light-grey:hover {\n  color: #f1f1f1 !important; }\n\n.i-hover-text-dark-grey:hover {\n  color: #3a3a3a !important; }\n\n.i-hover-border-amber:hover {\n  border-color: #ffc107 !important; }\n\n.i-hover-border-aqua:hover {\n  border-color: #00ffff !important; }\n\n.i-hover-border-blue:hover {\n  border-color: #2196f3 !important; }\n\n.i-hover-border-light-blue:hover {\n  border-color: #87ceeb !important; }\n\n.i-hover-border-brown:hover {\n  border-color: #795548 !important; }\n\n.i-hover-border-cyan:hover {\n  border-color: #00bcd4 !important; }\n\n.i-hover-border-blue-grey:hover {\n  border-color: #607d8b !important; }\n\n.i-hover-border-green:hover {\n  border-color: #4caf50 !important; }\n\n.i-hover-border-light-green:hover {\n  border-color: #8bc34a !important; }\n\n.i-hover-border-indigo:hover {\n  border-color: #3f51b5 !important; }\n\n.i-hover-border-khaki:hover {\n  border-color: #f0e68c !important; }\n\n.i-hover-border-lime:hover {\n  border-color: #cddc39 !important; }\n\n.i-hover-border-orange:hover {\n  border-color: #ff9800 !important; }\n\n.i-hover-border-deep-orange:hover {\n  border-color: #ff5722 !important; }\n\n.i-hover-border-pink:hover {\n  border-color: #e91e63 !important; }\n\n.i-hover-border-purple:hover {\n  border-color: #9c27b0 !important; }\n\n.i-hover-border-deep-purple:hover {\n  border-color: #673ab7 !important; }\n\n.i-hover-border-red:hover {\n  border-color: #f44336 !important; }\n\n.i-hover-border-sand:hover {\n  border-color: #fdf5e6 !important; }\n\n.i-hover-border-teal:hover {\n  border-color: #009688 !important; }\n\n.i-hover-border-yellow:hover {\n  border-color: #ffeb3b !important; }\n\n.i-hover-border-white:hover {\n  border-color: #fff !important; }\n\n.i-hover-border-black:hover {\n  border-color: #000 !important; }\n\n.i-hover-border-grey:hover {\n  border-color: #9e9e9e !important; }\n\n.i-hover-border-light-grey:hover {\n  border-color: #f1f1f1 !important; }\n\n.i-hover-border-dark-grey:hover {\n  border-color: #616161 !important; }\n\n.i-hover-border-pale-red:hover {\n  border-color: #ffe7e7 !important; }\n\n.i-hover-border-pale-green:hover {\n  border-color: #e7ffe7 !important; }\n\n.i-hover-border-pale-yellow:hover {\n  border-color: #ffffcc !important; }\n\n.i-hover-border-pale-blue:hover {\n  border-color: #e7ffff !important; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);