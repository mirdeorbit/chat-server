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
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: [__dirname + '**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBRzVDLGtCQUFlLG1CQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFLFNBQVM7SUFDZixHQUFHLEVBQUUsZ0NBQWdDO0lBQ3JDLFFBQVEsRUFBRSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztJQUM5QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLG1CQUFtQixFQUFFLElBQUk7Q0FDNUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5jNTk2Y2VlMzYzZjIwYWMxMjdlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+ICh7XG4gICAgdHlwZTogJ21vbmdvZGInLFxuICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCcsXG4gICAgZW50aXRpZXM6IFtfX2Rpcm5hbWUgKyAnKiovKi5lbnRpdHl7LnRzLC5qc30nXSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGtlZXBDb25uZWN0aW9uQWxpdmU6IHRydWVcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9