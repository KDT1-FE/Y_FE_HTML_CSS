/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/destinationImageSlider.js":
/*!***************************************!*\
  !*** ./src/destinationImageSlider.js ***!
  \***************************************/
/***/ (() => {

eval("const sliderItems = document.querySelectorAll(\".block-slider-item\");\nconst sliderImages = document.querySelectorAll(\".block-slider-image\");\n\nsliderItems.forEach((item, itemIndex) => {\n  item.addEventListener(\"mouseover\", () => {\n    sliderImages.forEach((image, imageIndex) => {\n      if (itemIndex === imageIndex) {\n        image.classList.add(\"currentImage\");\n      } else {\n        image.classList.remove(\"currentImage\");\n      }\n    });\n  });\n});\n\n\n//# sourceURL=webpack://website-clone/./src/destinationImageSlider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuToggle.js */ \"./src/menuToggle.js\");\n/* harmony import */ var _menuToggle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menuToggle_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _destinationImageSlider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destinationImageSlider.js */ \"./src/destinationImageSlider.js\");\n/* harmony import */ var _destinationImageSlider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_destinationImageSlider_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _insideImageSlider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insideImageSlider.js */ \"./src/insideImageSlider.js\");\n/* harmony import */ var _insideImageSlider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_insideImageSlider_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack://website-clone/./src/index.js?");

/***/ }),

/***/ "./src/insideImageSlider.js":
/*!**********************************!*\
  !*** ./src/insideImageSlider.js ***!
  \**********************************/
/***/ (() => {

eval("const photos = document.querySelectorAll(\".airplane-photo\");\nconst leftBtn = document.querySelector(\".left-btn\");\nconst rightBtn = document.querySelector(\".right-btn\");\nconst photoIndex = document.getElementById(\"photo-index\");\n\nlet currentImageIndex = 0;\nleftBtn.addEventListener(\"click\", () => {\n  if (currentImageIndex !== 0) currentImageIndex--;\n  photoIndex.innerText = `${currentImageIndex + 1}/6`;\n\n  photos.forEach((photo, index) => {\n    if (index === currentImageIndex) {\n      photo.classList.add(\"show\");\n    } else {\n      photo.classList.remove(\"show\");\n    }\n  });\n});\n\nrightBtn.addEventListener(\"click\", () => {\n  if (currentImageIndex !== photos.length - 1) currentImageIndex++;\n  photoIndex.innerText = `${currentImageIndex + 1}/6`;\n  photos.forEach((photo, index) => {\n    if (index === currentImageIndex) {\n      photo.classList.add(\"show\");\n    } else {\n      photo.classList.remove(\"show\");\n    }\n  });\n});\n\n\n//# sourceURL=webpack://website-clone/./src/insideImageSlider.js?");

/***/ }),

/***/ "./src/menuToggle.js":
/*!***************************!*\
  !*** ./src/menuToggle.js ***!
  \***************************/
/***/ (() => {

eval("const menuBtn = document.querySelector(\".menu-btn\");\nconst closeBtn = document.querySelector(\".close-btn\");\nconst menu = document.querySelector(\".menu\");\nconst overlay = document.querySelector(\".overlay\");\n\nmenuBtn.addEventListener(\"click\", () => {\n  menu.classList.add(\"open\");\n  overlay.style.display = \"block\";\n});\n\ncloseBtn.addEventListener(\"click\", () => {\n  menu.classList.remove(\"open\");\n  overlay.style.display = \"none\";\n});\n\n\n//# sourceURL=webpack://website-clone/./src/menuToggle.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;