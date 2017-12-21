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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_app_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_app_scss__);
// require('./js/app.js');


(process.env.NODE_ENV !== 'production')?__webpack_require__(3):null;

if (process.env.NODE_ENV !== 'production') {
  console.log('NODE_ENV: Development mode!');
}else{
  console.log('NODE_ENV: Production mode!');
}

console.log(`test Webpack Hot Module Reload`);
const i = __webpack_require__(4);
i('0.0.2');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Examples - ikan</title>\r\n  <link rel=\"stylesheet\" href=\"../../dist/css/ikan.css\">\r\n  <style>\r\n    .sub-title{\r\n      margin: 0;\r\n      padding-left: 16px;\r\n      font-size: 22px;\r\n    }\r\n    #top-bar{\r\n      margin-left: 250px;\r\n    }\r\n    #side-bar{\r\n      width: 250px;\r\n      padding: 8px 0 8px 0;\r\n    }\r\n  </style>\r\n  <link rel=\"icon\" type=\"image/png\" href=\"./assets/favicon-32x32.png\">\r\n</head>\r\n<body>\r\n  <!-- SIDE NAVBAR -->\r\n    <nav class=\"i-sidebar i-card i-bar-block i-collapse i-light-grey\" id=\"side-bar\">\r\n      <a href=\"javascript:void(0)\" onclick=\"close_menu()\" class=\"i-button i-hide-large i-large i-display-topright\" style=\"right:16px;padding:3px 12px;font-weight:bold;\">×</a>\r\n      <h3 class=\"sub-title\">Components</h3>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"default.html\">ikan Home</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"intro.html\">ikan Intro</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color.html\">ikan Colors</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"container.html\">ikan Containers</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"panel.html\">ikan Panels</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"border.html\">ikan Borders</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"card.html\">ikan Cards</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"fonts.html\">ikan Fonts</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"text.html\">ikan Text</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"round.html\">ikan Round</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"padding.html\">ikan Padding</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"margin.html\">ikan Margins</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"display.html\">ikan Display</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"button.html\">ikan Buttons</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"note.html\">ikan Notes</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"quote.html\">ikan Quotes</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"alert.html\">ikan Alerts</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"table.html\">ikan Tables</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"list.html\">ikan Lists</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"images.html\">ikan Images</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"input.html\">ikan Inputs</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"badge.html\">ikan Badges</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"tag.html\">ikan Tags</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"icon.html\">ikan Icons</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"responsive.html\">ikan Responsive</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"layout.html\">ikan Layout</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"animate.html\">ikan Animations</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"effect.html\">ikan Effects</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"bar.html\">ikan Bars</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"dropdown.html\">ikan Dropdowns</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"accordion.html\">ikan Accordions</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"navigation.html\">ikan Navigation</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"sidebar.html\">ikan Sidebar</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"tab.html\">ikan Tabs</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"pagination.html\">ikan Pagination</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"progressbar.html\">ikan Progress Bars</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"slideshow.html\">ikan Slideshow</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"modal.html\">ikan Modal</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"tooltip.html\">ikan Tooltips</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"grid.html\">ikan Grid</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"code.html\">ikan Code</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"filter.html\">ikan Filters</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"trend.html\">ikan Trends</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"case.html\">ikan Case</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"material.html\">ikan Material</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"validation.html\">ikan Validation</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"version.html\">ikan Versions</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"pro.html\">ikan Pro</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"mobile.html\">ikan Mobile</a>\r\n      <br>\r\n      <h3 class=\"sub-title\">ikan Colors</h3>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_classes.html\">ikan Color Classes</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_material.html\">ikan Color Material</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_flat.html\">ikan Color Flat UI</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_metro.html\">ikan Color Metro UI</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_libraries.html\">ikan Color Libraries</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_schemes.html\">ikan Color Schemes</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_themes.html\">ikan Color Themes</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"color_generator.html\">ikan Color Generator</a>\r\n      <br>\r\n      <h3 class=\"sub-title\">Examples</h3>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"examples.html\">ikan Examples</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"demo.html\">ikan Demos</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"templates.html\">ikan Templates</a>\r\n      <br>\r\n      <h3 class=\"sub-title\">References</h3>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"references\" class=\"active\">ikan References</a>\r\n      <a class=\"i-bar-item i-button\" target=\"_top\" href=\"downloads.html\">ikan Downloads</a>\r\n\r\n\r\n      <br><br>\r\n      <br><br>\r\n    </nav>\r\n  \r\n  <!-- TEST LIVE RELOAD -->\r\n  <div class=\"i-center i-padding i-white\" style=\"margin-left: 250px;\">\r\n    <b class=\"i-text-blue-grey\">| test live reload |</b> \r\n  </div>\r\n\r\n  <div id=\"main\">\r\n    <nav class=\"i-card i-center i-container i-padding-16 i-blue-grey\" id=\"top-bar\">\r\n      <b>ikan</b> - Composable & Strong Impression UI framework\r\n    </nav>\r\n</div>\r\n  <script src=\"../../dist/js/ikan.js\"></script>\r\n</body>\r\n</html>";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var ikan = function ikan(v) {
  console.log("ikan Framework v." + v);
};
module.exports = ikan;

/***/ })
/******/ ]);