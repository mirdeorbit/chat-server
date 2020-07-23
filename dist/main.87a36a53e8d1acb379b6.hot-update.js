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
console.log(fs_1.readdirSync('dist'));
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBQzVDLGlEQUFpQztBQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUdqQyxrQkFBZSxtQkFBVSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLElBQUksRUFBRSxTQUFTO0lBQ2YsR0FBRyxFQUFFLGdDQUFnQztJQUNyQyxRQUFRLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUNqQyxXQUFXLEVBQUUsSUFBSTtJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLG1CQUFtQixFQUFFLElBQUk7Q0FDNUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi44N2EzNmE1M2U4ZDFhY2IzNzliNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuXG5jb25zb2xlLmxvZyhyZWFkZGlyU3luYygnZGlzdCcpKTtcblxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+ICh7XG4gICAgdHlwZTogJ21vbmdvZGInLFxuICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCcsXG4gICAgZW50aXRpZXM6IFsnZGlzdC8qKi8qLmVudGl0eS5qcyddLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAga2VlcENvbm5lY3Rpb25BbGl2ZTogdHJ1ZVxufSkpOyJdLCJzb3VyY2VSb290IjoiIn0=