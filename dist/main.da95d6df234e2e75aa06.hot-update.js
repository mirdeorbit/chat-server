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
console.log(path_1.resolve(__dirname, 'dist'));
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: ['dist/**/*.entity.js'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUE0QztBQUM1Qyx1REFBK0I7QUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFHeEMsa0JBQWUsbUJBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUUsU0FBUztJQUNmLEdBQUcsRUFBRSxnQ0FBZ0M7SUFDckMsUUFBUSxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFDakMsV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLElBQUk7SUFDYixtQkFBbUIsRUFBRSxJQUFJO0NBQzVCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDYkosaUMiLCJmaWxlIjoibWFpbi5kYTk1ZDZkZjIzNGUyZTc1YWEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc29sZS5sb2cocmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0JykpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2RhdGFiYXNlJywgKCkgPT4gKHtcbiAgICB0eXBlOiAnbW9uZ29kYicsXG4gICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0JyxcbiAgICBlbnRpdGllczogWydkaXN0LyoqLyouZW50aXR5LmpzJ10sXG4gICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgbG9nZ2luZzogdHJ1ZSxcbiAgICBrZWVwQ29ubmVjdGlvbkFsaXZlOiB0cnVlXG59KSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9