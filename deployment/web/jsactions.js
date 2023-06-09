define(["big.js"], (__WEBPACK_EXTERNAL_MODULE_big_js__) => { return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Next_Scroll_Action.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Next_Scroll_Action.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Next_Scroll_Action": () => (/* binding */ Next_Scroll_Action)
/* harmony export */ });
/* harmony import */ var mx_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mx-global */ "?391f");
/* harmony import */ var mx_global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mx_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.



// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */
async function Next_Scroll_Action() {
  // BEGIN USER CODE
  const right = document.querySelector(".lv-homepage");
  right.scrollBy(1150, 0);
  // END USER CODE
}

/***/ }),

/***/ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Previous_Sroll_action.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Previous_Sroll_action.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Previous_Sroll_action": () => (/* binding */ Previous_Sroll_action)
/* harmony export */ });
/* harmony import */ var mx_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mx-global */ "?391f");
/* harmony import */ var mx_global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mx_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.



// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */
async function Previous_Sroll_action() {
  // BEGIN USER CODE
  const left = document.querySelector(".lv-homepage");
  left.scrollBy(-1150, 0);
  // END USER CODE
}

/***/ }),

/***/ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/HideProgress.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/HideProgress.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideProgress": () => (/* binding */ HideProgress)
/* harmony export */ });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.


// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Hides default progress bar
 * @param {Big} identifier - Identifier of ui which should be hidden. This param is required
 * @returns {Promise.<void>}
 */
async function HideProgress(identifier) {
  // BEGIN USER CODE
  if (identifier == null) {
    return Promise.reject(new Error("Input parameter 'Identifier' is required"));
  }
  mx.ui.hideProgress(Number(identifier));
  return Promise.resolve();
  // END USER CODE
}

/***/ }),

/***/ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/ShowProgress.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/ShowProgress.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowProgress": () => (/* binding */ ShowProgress)
/* harmony export */ });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.


// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Shows default progress bar
 * @param {string} message - The text to show while loading.
 * @param {boolean} blocking - Block the user interface immediately.
 * @returns {Promise.<Big>}
 */
async function ShowProgress(message, blocking) {
  // BEGIN USER CODE
  const id = mx.ui.showProgress(message, blocking);
  if (id !== undefined) {
    return Promise.resolve(new big_js__WEBPACK_IMPORTED_MODULE_0__.Big(id));
  }
  return Promise.reject(new Error("Could not open the loading dialog"));
  // END USER CODE
}

/***/ }),

/***/ "big.js":
/*!*************************!*\
  !*** external "big.js" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_big_js__;

/***/ }),

/***/ "?391f":
/*!**********************************!*\
  !*** mx-global (ignored module) ***!
  \**********************************/
/***/ (() => {

/* empty */

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************************************************************************!*\
  !*** ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/deployment/tmp/jsactions.js ***!
  \*******************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cinema$Next_Scroll_Action": () => (/* binding */ Cinema$Next_Scroll_Action),
/* harmony export */   "Cinema$Previous_Sroll_action": () => (/* binding */ Cinema$Previous_Sroll_action),
/* harmony export */   "NanoflowCommons$HideProgress": () => (/* binding */ NanoflowCommons$HideProgress),
/* harmony export */   "NanoflowCommons$ShowProgress": () => (/* binding */ NanoflowCommons$ShowProgress)
/* harmony export */ });
const NanoflowCommons$ShowProgress = async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/ShowProgress */ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/ShowProgress.js"))).ShowProgress;
const NanoflowCommons$HideProgress = async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/HideProgress */ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/nanoflowcommons/actions/HideProgress.js"))).HideProgress;
const Cinema$Previous_Sroll_action = async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Previous_Sroll_action */ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Previous_Sroll_action.js"))).Previous_Sroll_action;
const Cinema$Next_Scroll_Action = async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Next_Scroll_Action */ "../../../../../../Users/Fajar/Documents/talian/Mendix Project/Cinema Web/Development Branch/javascriptsource/cinema/actions/Next_Scroll_Action.js"))).Next_Scroll_Action;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M04sTUFBTXFCLHlCQUF5QixHQUFHLFlBQVksQ0FBQyxNQUFNLCtYQUF5SSxFQUFFMUIsa0JBQWtCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvRmFqYXIvRG9jdW1lbnRzL3RhbGlhbi9NZW5kaXggUHJvamVjdC9DaW5lbWEgV2ViL0RldmVsb3BtZW50IEJyYW5jaC9qYXZhc2NyaXB0c291cmNlL2NpbmVtYS9hY3Rpb25zL05leHRfU2Nyb2xsX0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvRmFqYXIvRG9jdW1lbnRzL3RhbGlhbi9NZW5kaXggUHJvamVjdC9DaW5lbWEgV2ViL0RldmVsb3BtZW50IEJyYW5jaC9qYXZhc2NyaXB0c291cmNlL2NpbmVtYS9hY3Rpb25zL1ByZXZpb3VzX1Nyb2xsX2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvRmFqYXIvRG9jdW1lbnRzL3RhbGlhbi9NZW5kaXggUHJvamVjdC9DaW5lbWEgV2ViL0RldmVsb3BtZW50IEJyYW5jaC9qYXZhc2NyaXB0c291cmNlL25hbm9mbG93Y29tbW9ucy9hY3Rpb25zL0hpZGVQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvRmFqYXIvRG9jdW1lbnRzL3RhbGlhbi9NZW5kaXggUHJvamVjdC9DaW5lbWEgV2ViL0RldmVsb3BtZW50IEJyYW5jaC9qYXZhc2NyaXB0c291cmNlL25hbm9mbG93Y29tbW9ucy9hY3Rpb25zL1Nob3dQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgYW1kIFwiYmlnLmpzXCIiLCJ3ZWJwYWNrOi8vL214LWdsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL0ZhamFyL0RvY3VtZW50cy90YWxpYW4vTWVuZGl4IFByb2plY3QvQ2luZW1hIFdlYi9EZXZlbG9wbWVudCBCcmFuY2gvZGVwbG95bWVudC90bXAvanNhY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGJ5IE1lbmRpeCBTdHVkaW8gUHJvLlxyXG4vL1xyXG4vLyBXQVJOSU5HOiBPbmx5IHRoZSBmb2xsb3dpbmcgY29kZSB3aWxsIGJlIHJldGFpbmVkIHdoZW4gYWN0aW9ucyBhcmUgcmVnZW5lcmF0ZWQ6XHJcbi8vIC0gdGhlIGltcG9ydCBsaXN0XHJcbi8vIC0gdGhlIGNvZGUgYmV0d2VlbiBCRUdJTiBVU0VSIENPREUgYW5kIEVORCBVU0VSIENPREVcclxuLy8gLSB0aGUgY29kZSBiZXR3ZWVuIEJFR0lOIEVYVFJBIENPREUgYW5kIEVORCBFWFRSQSBDT0RFXHJcbi8vIE90aGVyIGNvZGUgeW91IHdyaXRlIHdpbGwgYmUgbG9zdCB0aGUgbmV4dCB0aW1lIHlvdSBkZXBsb3kgdGhlIHByb2plY3QuXHJcbmltcG9ydCBcIm14LWdsb2JhbFwiO1xyXG5pbXBvcnQgeyBCaWcgfSBmcm9tIFwiYmlnLmpzXCI7XHJcblxyXG4vLyBCRUdJTiBFWFRSQSBDT0RFXHJcbi8vIEVORCBFWFRSQSBDT0RFXHJcblxyXG4vKipcclxuICogQHJldHVybnMge1Byb21pc2UuPHZvaWQ+fVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIE5leHRfU2Nyb2xsX0FjdGlvbigpIHtcclxuXHQvLyBCRUdJTiBVU0VSIENPREVcclxuXHRjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubHYtaG9tZXBhZ2VcIik7XHJcbiAgICByaWdodC5zY3JvbGxCeSgxMTUwLCAwKTtcclxuXHQvLyBFTkQgVVNFUiBDT0RFXHJcbn1cclxuIiwiLy8gVGhpcyBmaWxlIHdhcyBnZW5lcmF0ZWQgYnkgTWVuZGl4IFN0dWRpbyBQcm8uXHJcbi8vXHJcbi8vIFdBUk5JTkc6IE9ubHkgdGhlIGZvbGxvd2luZyBjb2RlIHdpbGwgYmUgcmV0YWluZWQgd2hlbiBhY3Rpb25zIGFyZSByZWdlbmVyYXRlZDpcclxuLy8gLSB0aGUgaW1wb3J0IGxpc3RcclxuLy8gLSB0aGUgY29kZSBiZXR3ZWVuIEJFR0lOIFVTRVIgQ09ERSBhbmQgRU5EIFVTRVIgQ09ERVxyXG4vLyAtIHRoZSBjb2RlIGJldHdlZW4gQkVHSU4gRVhUUkEgQ09ERSBhbmQgRU5EIEVYVFJBIENPREVcclxuLy8gT3RoZXIgY29kZSB5b3Ugd3JpdGUgd2lsbCBiZSBsb3N0IHRoZSBuZXh0IHRpbWUgeW91IGRlcGxveSB0aGUgcHJvamVjdC5cclxuaW1wb3J0IFwibXgtZ2xvYmFsXCI7XHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbi8vIEJFR0lOIEVYVFJBIENPREVcclxuLy8gRU5EIEVYVFJBIENPREVcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48dm9pZD59XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUHJldmlvdXNfU3JvbGxfYWN0aW9uKCkge1xyXG5cdC8vIEJFR0lOIFVTRVIgQ09ERVxyXG5cdGNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmx2LWhvbWVwYWdlXCIpO1xyXG4gICAgbGVmdC5zY3JvbGxCeSgtMTE1MCwgMCk7XHJcblx0Ly8gRU5EIFVTRVIgQ09ERVxyXG59XHJcbiIsIi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGJ5IE1lbmRpeCBTdHVkaW8gUHJvLlxyXG4vL1xyXG4vLyBXQVJOSU5HOiBPbmx5IHRoZSBmb2xsb3dpbmcgY29kZSB3aWxsIGJlIHJldGFpbmVkIHdoZW4gYWN0aW9ucyBhcmUgcmVnZW5lcmF0ZWQ6XHJcbi8vIC0gdGhlIGltcG9ydCBsaXN0XHJcbi8vIC0gdGhlIGNvZGUgYmV0d2VlbiBCRUdJTiBVU0VSIENPREUgYW5kIEVORCBVU0VSIENPREVcclxuLy8gLSB0aGUgY29kZSBiZXR3ZWVuIEJFR0lOIEVYVFJBIENPREUgYW5kIEVORCBFWFRSQSBDT0RFXHJcbi8vIE90aGVyIGNvZGUgeW91IHdyaXRlIHdpbGwgYmUgbG9zdCB0aGUgbmV4dCB0aW1lIHlvdSBkZXBsb3kgdGhlIHByb2plY3QuXHJcbmltcG9ydCB7IEJpZyB9IGZyb20gXCJiaWcuanNcIjtcclxuXHJcbi8vIEJFR0lOIEVYVFJBIENPREVcclxuLy8gRU5EIEVYVFJBIENPREVcclxuXHJcbi8qKlxyXG4gKiBIaWRlcyBkZWZhdWx0IHByb2dyZXNzIGJhclxyXG4gKiBAcGFyYW0ge0JpZ30gaWRlbnRpZmllciAtIElkZW50aWZpZXIgb2YgdWkgd2hpY2ggc2hvdWxkIGJlIGhpZGRlbi4gVGhpcyBwYXJhbSBpcyByZXF1aXJlZFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48dm9pZD59XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gSGlkZVByb2dyZXNzKGlkZW50aWZpZXIpIHtcclxuXHQvLyBCRUdJTiBVU0VSIENPREVcclxuICAgIGlmIChpZGVudGlmaWVyID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW5wdXQgcGFyYW1ldGVyICdJZGVudGlmaWVyJyBpcyByZXF1aXJlZFwiKSk7XHJcbiAgICB9XHJcbiAgICBteC51aS5oaWRlUHJvZ3Jlc3MoTnVtYmVyKGlkZW50aWZpZXIpKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHQvLyBFTkQgVVNFUiBDT0RFXHJcbn1cclxuIiwiLy8gVGhpcyBmaWxlIHdhcyBnZW5lcmF0ZWQgYnkgTWVuZGl4IFN0dWRpbyBQcm8uXHJcbi8vXHJcbi8vIFdBUk5JTkc6IE9ubHkgdGhlIGZvbGxvd2luZyBjb2RlIHdpbGwgYmUgcmV0YWluZWQgd2hlbiBhY3Rpb25zIGFyZSByZWdlbmVyYXRlZDpcclxuLy8gLSB0aGUgaW1wb3J0IGxpc3RcclxuLy8gLSB0aGUgY29kZSBiZXR3ZWVuIEJFR0lOIFVTRVIgQ09ERSBhbmQgRU5EIFVTRVIgQ09ERVxyXG4vLyAtIHRoZSBjb2RlIGJldHdlZW4gQkVHSU4gRVhUUkEgQ09ERSBhbmQgRU5EIEVYVFJBIENPREVcclxuLy8gT3RoZXIgY29kZSB5b3Ugd3JpdGUgd2lsbCBiZSBsb3N0IHRoZSBuZXh0IHRpbWUgeW91IGRlcGxveSB0aGUgcHJvamVjdC5cclxuaW1wb3J0IHsgQmlnIH0gZnJvbSBcImJpZy5qc1wiO1xyXG5cclxuLy8gQkVHSU4gRVhUUkEgQ09ERVxyXG4vLyBFTkQgRVhUUkEgQ09ERVxyXG5cclxuLyoqXHJcbiAqIFNob3dzIGRlZmF1bHQgcHJvZ3Jlc3MgYmFyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gVGhlIHRleHQgdG8gc2hvdyB3aGlsZSBsb2FkaW5nLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJsb2NraW5nIC0gQmxvY2sgdGhlIHVzZXIgaW50ZXJmYWNlIGltbWVkaWF0ZWx5LlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48QmlnPn1cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBTaG93UHJvZ3Jlc3MobWVzc2FnZSwgYmxvY2tpbmcpIHtcclxuXHQvLyBCRUdJTiBVU0VSIENPREVcclxuICAgIGNvbnN0IGlkID0gbXgudWkuc2hvd1Byb2dyZXNzKG1lc3NhZ2UsIGJsb2NraW5nKTtcclxuICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmlnKGlkKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ291bGQgbm90IG9wZW4gdGhlIGxvYWRpbmcgZGlhbG9nXCIpKTtcclxuXHQvLyBFTkQgVVNFUiBDT0RFXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JpZ19qc19fOyIsIi8qIGVtcHR5ICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBjb25zdCBOYW5vZmxvd0NvbW1vbnMkU2hvd1Byb2dyZXNzID0gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIkM6L1VzZXJzL0ZhamFyL0RvY3VtZW50cy90YWxpYW4vTWVuZGl4IFByb2plY3QvQ2luZW1hIFdlYi9EZXZlbG9wbWVudCBCcmFuY2gvamF2YXNjcmlwdHNvdXJjZS9uYW5vZmxvd2NvbW1vbnMvYWN0aW9ucy9TaG93UHJvZ3Jlc3NcIikpLlNob3dQcm9ncmVzcztcbmV4cG9ydCBjb25zdCBOYW5vZmxvd0NvbW1vbnMkSGlkZVByb2dyZXNzID0gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIkM6L1VzZXJzL0ZhamFyL0RvY3VtZW50cy90YWxpYW4vTWVuZGl4IFByb2plY3QvQ2luZW1hIFdlYi9EZXZlbG9wbWVudCBCcmFuY2gvamF2YXNjcmlwdHNvdXJjZS9uYW5vZmxvd2NvbW1vbnMvYWN0aW9ucy9IaWRlUHJvZ3Jlc3NcIikpLkhpZGVQcm9ncmVzcztcbmV4cG9ydCBjb25zdCBDaW5lbWEkUHJldmlvdXNfU3JvbGxfYWN0aW9uID0gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIkM6L1VzZXJzL0ZhamFyL0RvY3VtZW50cy90YWxpYW4vTWVuZGl4IFByb2plY3QvQ2luZW1hIFdlYi9EZXZlbG9wbWVudCBCcmFuY2gvamF2YXNjcmlwdHNvdXJjZS9jaW5lbWEvYWN0aW9ucy9QcmV2aW91c19Tcm9sbF9hY3Rpb25cIikpLlByZXZpb3VzX1Nyb2xsX2FjdGlvbjtcbmV4cG9ydCBjb25zdCBDaW5lbWEkTmV4dF9TY3JvbGxfQWN0aW9uID0gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIkM6L1VzZXJzL0ZhamFyL0RvY3VtZW50cy90YWxpYW4vTWVuZGl4IFByb2plY3QvQ2luZW1hIFdlYi9EZXZlbG9wbWVudCBCcmFuY2gvamF2YXNjcmlwdHNvdXJjZS9jaW5lbWEvYWN0aW9ucy9OZXh0X1Njcm9sbF9BY3Rpb25cIikpLk5leHRfU2Nyb2xsX0FjdGlvbjtcbiJdLCJuYW1lcyI6WyJCaWciLCJOZXh0X1Njcm9sbF9BY3Rpb24iLCJyaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEJ5IiwiUHJldmlvdXNfU3JvbGxfYWN0aW9uIiwibGVmdCIsIkhpZGVQcm9ncmVzcyIsImlkZW50aWZpZXIiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJteCIsInVpIiwiaGlkZVByb2dyZXNzIiwiTnVtYmVyIiwicmVzb2x2ZSIsIlNob3dQcm9ncmVzcyIsIm1lc3NhZ2UiLCJibG9ja2luZyIsImlkIiwic2hvd1Byb2dyZXNzIiwidW5kZWZpbmVkIiwiTmFub2Zsb3dDb21tb25zJFNob3dQcm9ncmVzcyIsIk5hbm9mbG93Q29tbW9ucyRIaWRlUHJvZ3Jlc3MiLCJDaW5lbWEkUHJldmlvdXNfU3JvbGxfYWN0aW9uIiwiQ2luZW1hJE5leHRfU2Nyb2xsX0FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=