exports.id = "main";
exports.modules = {

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const appConfig = app.get('AppConfigService');
    console.log(appConfig);
    await app.listen(appConfig.listen.port);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQTJDO0FBQzNDLG9GQUF5QztBQUt6QyxLQUFLLFVBQVUsU0FBUztJQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUFDLHNCQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVoRSxNQUFNLFNBQVMsR0FBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFdkIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEMsSUFBSSxJQUFVLEVBQUU7UUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDO0FBQ0YsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uNTliMTgwMWFiN2E2ZTNkNWRmODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvYXBwL2FwcC5jb25maWcuc2VydmljZSc7XG5cbmRlY2xhcmUgY29uc3QgbW9kdWxlOiBhbnk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcblx0Y29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEFwcE1vZHVsZSwgeyBjb3JzOiB0cnVlIH0pO1xuXG5cdGNvbnN0IGFwcENvbmZpZzogQXBwQ29uZmlnU2VydmljZSA9IGFwcC5nZXQoJ0FwcENvbmZpZ1NlcnZpY2UnKTtcblxuXHRjb25zb2xlLmxvZyhhcHBDb25maWcpO1xuXG5cdGF3YWl0IGFwcC5saXN0ZW4oYXBwQ29uZmlnLmxpc3Rlbi5wb3J0KTtcblxuXHRpZiAobW9kdWxlLmhvdCkge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cdFx0bW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IGFwcC5jbG9zZSgpKTtcblx0fVxufVxuXG5ib290c3RyYXAoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=