/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _content_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.png */ \"./src/content.png\");\n\r\n\r\nfunction homePage() {\r\n    const $content = document.querySelector(\"#content\");\r\n\r\n    const $info = document.createElement(\"div\");\r\n    $info.setAttribute(\"class\", \"info\");\r\n\r\n    const $h1 = document.createElement(\"h1\");\r\n    $h1.innerText = \"Time to order food\";\r\n    $info.appendChild($h1);\r\n\r\n    const $h2 = document.createElement(\"h2\");\r\n    $h2.innerText = \"Find our restaurant in your area\";\r\n    $info.appendChild($h2);\r\n\r\n    const $form = document.createElement(\"form\");\r\n    $info.appendChild($form);\r\n\r\n    const $label = document.createElement(\"label\");\r\n    $label.innerText = \"Your FOOD Address\";\r\n    $label.setAttribute(\"for\", \"address\");\r\n    $form.appendChild($label);\r\n\r\n    const $input = document.createElement(\"input\");\r\n    $input.setAttribute(\"type\", \"text\");\r\n    $input.setAttribute(\"name\", \"address\");\r\n    $input.setAttribute(\"id\", \"address\");\r\n    $form.appendChild($input);\r\n\r\n    const $rightImg = document.createElement(\"div\");\r\n    $rightImg.setAttribute(\"class\", \"right-img\");\r\n\r\n    const $img = new Image();\r\n    $img.src = _content_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    $rightImg.appendChild($img);\r\n\r\n    $content.appendChild($info);\r\n    $content.appendChild($rightImg);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/food.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _content_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.png */ \"./src/content.png\");\n\r\n\r\nfunction homePage() {\r\n    const $content = document.querySelector(\"#content\");\r\n\r\n    const $info = document.createElement(\"div\");\r\n    $info.setAttribute(\"class\", \"info\");\r\n\r\n    const $h1 = document.createElement(\"h1\");\r\n    $h1.innerText = \"Time to order food\";\r\n    $info.appendChild($h1);\r\n\r\n    const $h2 = document.createElement(\"h2\");\r\n    $h2.innerText = \"Find our restaurant in your area\";\r\n    $info.appendChild($h2);\r\n\r\n    const $form = document.createElement(\"form\");\r\n    $info.appendChild($form);\r\n\r\n    const $label = document.createElement(\"label\");\r\n    $label.innerText = \"Your Address\";\r\n    $label.setAttribute(\"for\", \"address\");\r\n    $form.appendChild($label);\r\n\r\n    const $input = document.createElement(\"input\");\r\n    $input.setAttribute(\"type\", \"text\");\r\n    $input.setAttribute(\"name\", \"address\");\r\n    $input.setAttribute(\"id\", \"address\");\r\n    $form.appendChild($input);\r\n\r\n    const $rightImg = document.createElement(\"div\");\r\n    $rightImg.setAttribute(\"class\", \"right-img\");\r\n\r\n    const $img = new Image();\r\n    $img.src = _content_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    $rightImg.appendChild($img);\r\n\r\n    $content.appendChild($info);\r\n    $content.appendChild($rightImg);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.js */ \"./src/food.js\");\n\r\n\r\n\r\nconst $body = document.querySelector(\"body\");\r\nconst $content = document.querySelector(\"#content\");\r\nconst $header = document.createElement(\"div\");\r\n$header.setAttribute(\"class\", \"header\");\r\n$body.insertBefore($header, $content);\r\nconst $homeBtn = document.createElement(\"button\");\r\n$homeBtn.innerText = \"Home\";\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n$homeBtn.addEventListener(\"click\", (e) => {\r\n    removeContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n$header.appendChild($homeBtn);\r\n\r\nconst $food = document.createElement(\"button\");\r\n$food.innerText = \"Food\";\r\n$food.addEventListener(\"click\", (e) => {\r\n    removeContent();\r\n    (0,_food_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n$header.appendChild($food);\r\n\r\nconst removeContent = () => {\r\n    $content.innerHTML = \"\";\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/content.png":
/*!*************************!*\
  !*** ./src/content.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b18a329ca29c4e83d58.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/content.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;