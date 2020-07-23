exports.id = "main";
exports.modules = {

/***/ "./src/config/development/database.config.ts":
/*!***************************************************!*\
  !*** ./src/config/development/database.config.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const path_1 = __webpack_require__(/*! path */ "path");
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: [path_1.join(__dirname, './**/*.entity{.ts,.js}')],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUE0QztBQUM1Qyx1REFBNEI7QUFFNUIsa0JBQWUsbUJBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUUsU0FBUztJQUNmLEdBQUcsRUFBRSxnQ0FBZ0M7SUFDckMsUUFBUSxFQUFFLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JELFdBQVcsRUFBRSxJQUFJO0lBQ2pCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsbUJBQW1CLEVBQUUsSUFBSTtDQUM1QixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1ZKLGlDIiwiZmlsZSI6Im1haW4uZTBmMGJjYTM4YjU5YjcxMTMwZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2RhdGFiYXNlJywgKCkgPT4gKHtcbiAgICB0eXBlOiAnbW9uZ29kYicsXG4gICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0JyxcbiAgICBlbnRpdGllczogW2pvaW4oX19kaXJuYW1lLCAnLi8qKi8qLmVudGl0eXsudHMsLmpzfScpXSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGtlZXBDb25uZWN0aW9uQWxpdmU6IHRydWVcbn0pKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=