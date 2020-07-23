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
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: [],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBRzVDLGtCQUFlLG1CQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFLFNBQVM7SUFDZixHQUFHLEVBQUUsZ0NBQWdDO0lBQ3JDLFFBQVEsRUFBRSxFQUFFO0lBQ1osV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLElBQUk7SUFDYixtQkFBbUIsRUFBRSxJQUFJO0NBQzVCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uNWY1MmI3Yzc4ZmI2MDY4OWExNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcygnZGF0YWJhc2UnLCAoKSA9PiAoe1xuICAgIHR5cGU6ICdtb25nb2RiJyxcbiAgICB1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NoYXQnLFxuICAgIGVudGl0aWVzOiBbXSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGtlZXBDb25uZWN0aW9uQWxpdmU6IHRydWVcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9