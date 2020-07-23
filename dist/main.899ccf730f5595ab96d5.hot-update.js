exports.id = "main";
exports.modules = {

/***/ "./src/utils/helpers sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./src/utils/helpers sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./src/utils/helpers/index.js",
	"./auth": "./src/utils/helpers/auth.js",
	"./auth.js": "./src/utils/helpers/auth.js",
	"./index": "./src/utils/helpers/index.js",
	"./index.js": "./src/utils/helpers/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/utils/helpers sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/utils/helpers/auth.js":
/*!***********************************!*\
  !*** ./src/utils/helpers/auth.js ***!
  \***********************************/
/*! exports provided: generateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateToken", function() { return generateToken; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


const generateToken = (password) => {
	var hash = crypto__WEBPACK_IMPORTED_MODULE_0__["createHmac"]('sha512', Date.now());
	hash.update(password);
	var value = hash.digest('hex');
	return {
		salt:salt,
		passwordHash:value
	};
};

/***/ }),

/***/ "./src/utils/helpers/index.js":
/*!************************************!*\
  !*** ./src/utils/helpers/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const helpers = ['auth'];

helpers.forEach((helperName) => {
	const helper = __webpack_require__("./src/utils/helpers sync recursive ^\\.\\/.*$")(`./${helperName}`);
	module.exports = {...helper, ...module.exports};
});

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hlbHBlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQWlDOztBQUUxQjtBQUNQLFlBQVksaURBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQSxnQkFBZ0IscUVBQVEsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzFDLG1CQUFtQjtBQUNuQixDQUFDLEU7Ozs7Ozs7Ozs7O0FDTEQsbUMiLCJmaWxlIjoibWFpbi44OTljY2Y3MzBmNTU5NWFiOTZkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL1wiOiBcIi4vc3JjL3V0aWxzL2hlbHBlcnMvaW5kZXguanNcIixcblx0XCIuL2F1dGhcIjogXCIuL3NyYy91dGlscy9oZWxwZXJzL2F1dGguanNcIixcblx0XCIuL2F1dGguanNcIjogXCIuL3NyYy91dGlscy9oZWxwZXJzL2F1dGguanNcIixcblx0XCIuL2luZGV4XCI6IFwiLi9zcmMvdXRpbHMvaGVscGVycy9pbmRleC5qc1wiLFxuXHRcIi4vaW5kZXguanNcIjogXCIuL3NyYy91dGlscy9oZWxwZXJzL2luZGV4LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3V0aWxzL2hlbHBlcnMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9rZW4gPSAocGFzc3dvcmQpID0+IHtcblx0dmFyIGhhc2ggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhNTEyJywgRGF0ZS5ub3coKSk7XG5cdGhhc2gudXBkYXRlKHBhc3N3b3JkKTtcblx0dmFyIHZhbHVlID0gaGFzaC5kaWdlc3QoJ2hleCcpO1xuXHRyZXR1cm4ge1xuXHRcdHNhbHQ6c2FsdCxcblx0XHRwYXNzd29yZEhhc2g6dmFsdWVcblx0fTtcbn07IiwiY29uc3QgaGVscGVycyA9IFsnYXV0aCddO1xuXG5oZWxwZXJzLmZvckVhY2goKGhlbHBlck5hbWUpID0+IHtcblx0Y29uc3QgaGVscGVyID0gcmVxdWlyZShgLi8ke2hlbHBlck5hbWV9YCk7XG5cdG1vZHVsZS5leHBvcnRzID0gey4uLmhlbHBlciwgLi4ubW9kdWxlLmV4cG9ydHN9O1xufSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=