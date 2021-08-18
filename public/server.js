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

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nlet express = __webpack_require__(/*! express */ \"express\");\n\nconst app = express(),\n      DIST_DIR = __dirname;\n\nconst cors = __webpack_require__(/*! cors */ \"cors\");\n\nlet clients = [{\n  name: \"Paxton Patterson\",\n  apiToken: \"vCztSQeVwjPshCBYLHyOmJNEoCLNm8RM\",\n  apiUrl: \"https://paxton-patterson-integration.opt7dev.com/api/quote\"\n}, {\n  name: \"Shiffler Equipment\",\n  apiToken: \"ugPDjoQ3ECEZzwgL1jb7e8oRf1ZaY75E\",\n  apiUrl: \"https://paxton-patterson-integration.opt7dev.com/api/quote\"\n}, {\n  name: \"Traditions Jewish Gifts\",\n  apiToken: \"9gnOQM7cuoB8CdIpmkjgF3HUdE7CzZF4\",\n  apiUrl: \"https://traditions-jewish-gifts.opt7dev.com/api/quote\"\n}, {\n  name: \"Procuru Inc.\",\n  apiToken: \"PZggaAwt4IlItegmYFuLgrn2j4rUPolK\",\n  apiUrl: \"https://procuru.opt7dev.com/api/quote\"\n}];\nconst PORT = process.env.PORT || 1010;\napp.use(cors({\n  origin: '*'\n}));\napp.use(express.static(DIST_DIR));\napp.get(\"/client/:apiToken\", (req, res, next) => {\n  const apiToken = req.params.apiToken;\n  let result = clients.filter(item => item.apiToken === apiToken);\n\n  if (result.length > 0) {\n    res.send({\n      success: true,\n      data: result\n    });\n  } else {\n    res.send({\n      success: false,\n      data: null\n    });\n  }\n});\napp.listen(PORT, () => {\n  console.log(`Server listening to ${PORT} ...`);\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack://raq-auth-api/./server.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	
/******/ })()
;