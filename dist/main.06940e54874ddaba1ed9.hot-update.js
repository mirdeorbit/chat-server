exports.id = "main";
exports.modules = {

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
	const salt = new Buffer(Date.now().toString());

	var hash = crypto__WEBPACK_IMPORTED_MODULE_0__["createHmac"]('sha512', salt);
	hash.update(password);

	return hash.digest('hex');
};

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy9hdXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7O0FBRTFCO0FBQ1A7O0FBRUEsWUFBWSxpREFBaUI7QUFDN0I7O0FBRUE7QUFDQSxFIiwiZmlsZSI6Im1haW4uMDY5NDBlNTQ4NzRkZGFiYTFlZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb2tlbiA9IChwYXNzd29yZCkgPT4ge1xuXHRjb25zdCBzYWx0ID0gbmV3IEJ1ZmZlcihEYXRlLm5vdygpLnRvU3RyaW5nKCkpO1xuXG5cdHZhciBoYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTUxMicsIHNhbHQpO1xuXHRoYXNoLnVwZGF0ZShwYXNzd29yZCk7XG5cblx0cmV0dXJuIGhhc2guZGlnZXN0KCdoZXgnKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==