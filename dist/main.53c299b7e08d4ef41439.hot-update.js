exports.id = "main";
exports.modules = {

/***/ "./src/config/development/database.config.ts":
/*!***************************************************!*\
  !*** ./src/config/development/database.config.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const fs_1 = __webpack_require__(/*! fs */ "fs");
console.log(fs_1.lstatSync('dist'));
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBNEM7QUFDNUMsaURBQStCO0FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFHL0Isa0JBQWUsbUJBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUUsU0FBUztJQUNmLEdBQUcsRUFBRSxnQ0FBZ0M7SUFDckMsUUFBUSxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFDakMsV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLElBQUk7SUFDYixtQkFBbUIsRUFBRSxJQUFJO0NBQzVCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNiSiwrQiIsImZpbGUiOiJtYWluLjUzYzI5OWI3ZTA4ZDRlZjQxNDM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgbHN0YXRTeW5jIH0gZnJvbSAnZnMnO1xuXG5jb25zb2xlLmxvZyhsc3RhdFN5bmMoJ2Rpc3QnKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcygnZGF0YWJhc2UnLCAoKSA9PiAoe1xuICAgIHR5cGU6ICdtb25nb2RiJyxcbiAgICB1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NoYXQnLFxuICAgIGVudGl0aWVzOiBbJ2Rpc3QvKiovKi5lbnRpdHkuanMnXSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGtlZXBDb25uZWN0aW9uQWxpdmU6IHRydWVcbn0pKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9