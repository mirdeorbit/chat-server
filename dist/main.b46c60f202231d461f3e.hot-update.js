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
console.log(path_1.join(__dirname, './**/*.entity{.ts,.js}'));
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: [path_1.join(__dirname, './**/*.entity{.ts,.js}')],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBQzVDLHVEQUE0QjtBQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0FBRXZELGtCQUFlLG1CQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFLFNBQVM7SUFDZixHQUFHLEVBQUUsZ0NBQWdDO0lBQ3JDLFFBQVEsRUFBRSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUNyRCxXQUFXLEVBQUUsSUFBSTtJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLG1CQUFtQixFQUFFLElBQUk7Q0FDNUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5iNDZjNjBmMjAyMjMxZDQ2MWYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuY29uc29sZS5sb2coam9pbihfX2Rpcm5hbWUsICcuLyoqLyouZW50aXR5ey50cywuanN9JykpO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+ICh7XG4gICAgdHlwZTogJ21vbmdvZGInLFxuICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCcsXG4gICAgZW50aXRpZXM6IFtqb2luKF9fZGlybmFtZSwgJy4vKiovKi5lbnRpdHl7LnRzLC5qc30nKV0sXG4gICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgbG9nZ2luZzogdHJ1ZSxcbiAgICBrZWVwQ29ubmVjdGlvbkFsaXZlOiB0cnVlXG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==