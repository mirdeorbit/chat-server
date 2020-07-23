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
    console.log(appConfig.host);
    await app.listen(appConfig.listen.port);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQTJDO0FBQzNDLG9GQUF5QztBQUt6QyxLQUFLLFVBQVUsU0FBUztJQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUFDLHNCQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVoRSxNQUFNLFNBQVMsR0FBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTVCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhDLElBQUksSUFBVSxFQUFFO1FBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUN0QztBQUNGLENBQUM7QUFFRCxTQUFTLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmIwNGYxN2IxODFmMjhlZmQxMzVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UnO1xuXG5kZWNsYXJlIGNvbnN0IG1vZHVsZTogYW55O1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG5cdGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUsIHsgY29yczogdHJ1ZSB9KTtcblxuXHRjb25zdCBhcHBDb25maWc6IEFwcENvbmZpZ1NlcnZpY2UgPSBhcHAuZ2V0KCdBcHBDb25maWdTZXJ2aWNlJyk7XG5cblx0Y29uc29sZS5sb2coYXBwQ29uZmlnLmhvc3QpO1xuXG5cdGF3YWl0IGFwcC5saXN0ZW4oYXBwQ29uZmlnLmxpc3Rlbi5wb3J0KTtcblxuXHRpZiAobW9kdWxlLmhvdCkge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cdFx0bW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IGFwcC5jbG9zZSgpKTtcblx0fVxufVxuXG5ib290c3RyYXAoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=