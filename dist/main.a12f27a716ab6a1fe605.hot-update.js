exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
false,

/***/ "./src/config/app/app.config.module.ts":
false,

/***/ "./src/config/app/app.config.service.ts":
false,

/***/ "./src/config/app/app.config.ts":
false,

/***/ "./src/config/database/database.config.module.ts":
false,

/***/ "./src/config/database/database.config.service.ts":
false,

/***/ "./src/config/database/database.config.ts":
false,

/***/ "./src/constants/index.js":
false,

/***/ "./src/database/database.module.ts":
false,

/***/ "./src/database/database.providers.ts":
false,

/***/ "./src/database/schemas/users.schema.ts":
false,

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const api_module_1 = __webpack_require__(/*! ./modules/api/api.module */ "./src/modules/api/api.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_module_1.ApiModule, { cors: true });
    const appConfig = app.get('AppConfigService');
    app.setGlobalPrefix('/api/1.0');
    await app.listen(appConfig.port);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ }),

/***/ "./src/modules/api/api.module.ts":
/*!***************************************!*\
  !*** ./src/modules/api/api.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const morgan_1 = __webpack_require__(/*! @nest-middlewares/morgan */ "@nest-middlewares/morgan");
const database_module_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './database/database.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const users_module_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './modules/users/users.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const auth_module_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './modules/auth/auth.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const app_config_module_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './config/app/app.config.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let ApiModule = class ApiModule {
    configure(consumer) {
        morgan_1.MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(morgan_1.MorganMiddleware).forRoutes('*');
    }
};
ApiModule = __decorate([
    common_1.Module({
        imports: [
            app_config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ]
    })
], ApiModule);
exports.ApiModule = ApiModule;


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
false,

/***/ "./src/modules/auth/auth.module.ts":
false,

/***/ "./src/modules/auth/auth.service.ts":
false,

/***/ "./src/modules/users/users.controller.ts":
false,

/***/ "./src/modules/users/users.module.ts":
false,

/***/ "./src/modules/users/users.providers.ts":
false,

/***/ "./src/modules/users/users.service.ts":
false,

/***/ "@nestjs/config":
false,

/***/ "express":
false,

/***/ "mongoose":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQTJDO0FBQzNDLDRHQUFxRDtBQUtyRCxLQUFLLFVBQVUsU0FBUztJQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUFDLHNCQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVoRSxNQUFNLFNBQVMsR0FBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhFLEdBQUcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFaEMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQyxJQUFJLElBQVUsRUFBRTtRQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDdEM7QUFDRixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCWiw2RUFBd0U7QUFDeEUsaUdBQTREO0FBRTVELG9NQUE0RDtBQUU1RCxtTUFBMkQ7QUFDM0QsZ01BQXdEO0FBRXhELDBNQUFpRTtBQVdqRSxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0lBQ2xCLFNBQVMsQ0FBQyxRQUE0QjtRQUNsQyx5QkFBZ0IsQ0FBQyxTQUFTLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUNoRixRQUFRLENBQUMsS0FBSyxDQUFDLHlCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQUxZLFNBQVM7SUFUckIsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wsbUNBQWU7WUFDZixnQ0FBYztZQUNkLDBCQUFXO1lBQ1gsd0JBQVU7U0FDYjtLQUNKLENBQUM7R0FFVyxTQUFTLENBS3JCO0FBTFksOEJBQVMiLCJmaWxlIjoibWFpbi5hMTJmMjdhNzE2YWI2YTFmZTYwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgQXBpTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2FwaS9hcGkubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy5zZXJ2aWNlJztcblxuZGVjbGFyZSBjb25zdCBtb2R1bGU6IGFueTtcblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuXHRjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGUoQXBpTW9kdWxlLCB7IGNvcnM6IHRydWUgfSk7XG5cblx0Y29uc3QgYXBwQ29uZmlnOiBBcHBDb25maWdTZXJ2aWNlID0gYXBwLmdldCgnQXBwQ29uZmlnU2VydmljZScpO1xuXG5cdGFwcC5zZXRHbG9iYWxQcmVmaXgoJy9hcGkvMS4wJyk7XG5cblx0YXdhaXQgYXBwLmxpc3RlbihhcHBDb25maWcucG9ydCk7XG5cblx0aWYgKG1vZHVsZS5ob3QpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdCgpO1xuXHRcdG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiBhcHAuY2xvc2UoKSk7XG5cdH1cbn1cblxuYm9vdHN0cmFwKCk7XG4iLCJpbXBvcnQgeyBNb2R1bGUsIE5lc3RNb2R1bGUsIE1pZGRsZXdhcmVDb25zdW1lciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE1vcmdhbk1pZGRsZXdhcmUgfSBmcm9tICdAbmVzdC1taWRkbGV3YXJlcy9tb3JnYW4nO1xuXG5pbXBvcnQgeyBEYXRhYmFzZU1vZHVsZSB9IGZyb20gJy4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvdXNlcnMvdXNlcnMubW9kdWxlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYXV0aC9hdXRoLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcENvbmZpZ01vZHVsZSB9IGZyb20gJy4vY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwQ29uZmlnTW9kdWxlLFxuICAgICAgICBEYXRhYmFzZU1vZHVsZSxcbiAgICAgICAgVXNlcnNNb2R1bGUsXG4gICAgICAgIEF1dGhNb2R1bGVcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gICAgY29uZmlndXJlKGNvbnN1bWVyOiBNaWRkbGV3YXJlQ29uc3VtZXIpIHtcbiAgICAgICAgTW9yZ2FuTWlkZGxld2FyZS5jb25maWd1cmUoJzpkYXRlIC0gOm1ldGhvZCAtIDp1cmwgLSA6cmVzcG9uc2UtdGltZSAtIDpzdGF0dXMnKTtcbiAgICAgICAgY29uc3VtZXIuYXBwbHkoTW9yZ2FuTWlkZGxld2FyZSkuZm9yUm91dGVzKCcqJyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=