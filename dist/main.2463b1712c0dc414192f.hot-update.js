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
    entities: ['entities/*.entity.ts'],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBRTVDLGtCQUFlLG1CQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFLFNBQVM7SUFDZixHQUFHLEVBQUUsZ0NBQWdDO0lBQ3JDLFFBQVEsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0lBQ2xDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsbUJBQW1CLEVBQUUsSUFBSTtDQUM1QixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLjI0NjNiMTcxMmMwZGM0MTQxOTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+ICh7XG4gICAgdHlwZTogJ21vbmdvZGInLFxuICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCcsXG4gICAgZW50aXRpZXM6IFsnZW50aXRpZXMvKi5lbnRpdHkudHMnXSxcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGtlZXBDb25uZWN0aW9uQWxpdmU6IHRydWVcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9