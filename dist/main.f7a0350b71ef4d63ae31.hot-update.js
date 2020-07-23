exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
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
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/database/database.module.ts");
const users_module_1 = __webpack_require__(/*! ./modules/users/users.module */ "./src/modules/users/users.module.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const app_config_module_1 = __webpack_require__(/*! ./config/app/app.config.module */ "./src/config/app/app.config.module.ts");
let AppModule = class AppModule {
    configure(consumer) {
        morgan_1.MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(morgan_1.MorganMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            app_config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/config/app/app.config.module.ts":
/*!*********************************************!*\
  !*** ./src/config/app/app.config.module.ts ***!
  \*********************************************/
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
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_config_service_1 = __webpack_require__(/*! ./app.config.service */ "./src/config/app/app.config.service.ts");
const app_config_1 = __webpack_require__(/*! ./app.config */ "./src/config/app/app.config.ts");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [app_config_1.default]
            }),
        ],
        providers: [app_config_service_1.AppConfigService],
        exports: [app_config_service_1.AppConfigService],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;


/***/ }),

/***/ "./src/config/app/app.config.service.ts":
/*!**********************************************!*\
  !*** ./src/config/app/app.config.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AppConfigService = class AppConfigService {
    constructor(configService) {
        this.configService = configService;
        this.config = this.configService.get('database');
    }
    get host() {
        return this.config.host;
    }
    get port() {
        return this.config.port;
    }
};
AppConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AppConfigService);
exports.AppConfigService = AppConfigService;


/***/ }),

/***/ "./src/config/app/app.config.ts":
/*!**************************************!*\
  !*** ./src/config/app/app.config.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configs = {
    development: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    },
    production: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    }
};
exports.default = config_1.registerAs('database_development', () => configs["development" || false]);


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQXdFO0FBQ3hFLGlHQUE0RDtBQUU1RCxxSEFBNEQ7QUFFNUQsc0hBQTJEO0FBQzNELGlIQUF3RDtBQUV4RCwrSEFBaUU7QUFXakUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUNsQixTQUFTLENBQUMsUUFBNEI7UUFDbEMseUJBQWdCLENBQUMsU0FBUyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDaEYsUUFBUSxDQUFDLEtBQUssQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFMWSxTQUFTO0lBVHJCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRTtZQUNMLG1DQUFlO1lBQ2YsZ0NBQWM7WUFDZCwwQkFBVztZQUNYLHdCQUFVO1NBQ2I7S0FDSixDQUFDO0dBRVcsU0FBUyxDQUtyQjtBQUxZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnRCLDZFQUF3QztBQUN4Qyw2RUFBOEM7QUFFOUMsdUhBQXdEO0FBRXhELCtGQUFxQztBQVlyQyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUc7QUFBbEIsZUFBZTtJQVYzQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUU7WUFDTCxxQkFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsSUFBSSxFQUFFLENBQUMsb0JBQVMsQ0FBQzthQUNwQixDQUFDO1NBQ0w7UUFDRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztLQUM5QixDQUFDO0dBRVcsZUFBZSxDQUFHO0FBQWxCLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakI1Qiw2RUFBNEM7QUFDNUMsNkVBQStDO0FBRy9DLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBR3pCLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQVMsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO0lBQzNCLENBQUM7Q0FDSjtBQWRZLGdCQUFnQjtJQUQ1QixtQkFBVSxFQUFFO3lEQUkwQixzQkFBYSxvQkFBYixzQkFBYTtHQUh2QyxnQkFBZ0IsQ0FjNUI7QUFkWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ0o3Qiw2RUFBNEM7QUFFNUMsTUFBTSxPQUFPLEdBQUc7SUFDWixXQUFXLEVBQUU7UUFDVCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtTQUNiO0tBQ0o7SUFDRCxVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtTQUNiO0tBQ0o7Q0FDSjtBQUVELGtCQUFlLG1CQUFVLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQW9CLElBQUksS0FBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmY3YTAzNTBiNzFlZjRkNjNhZTMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUsIE5lc3RNb2R1bGUsIE1pZGRsZXdhcmVDb25zdW1lciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE1vcmdhbk1pZGRsZXdhcmUgfSBmcm9tICdAbmVzdC1taWRkbGV3YXJlcy9tb3JnYW4nO1xuXG5pbXBvcnQgeyBEYXRhYmFzZU1vZHVsZSB9IGZyb20gJy4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvdXNlcnMvdXNlcnMubW9kdWxlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYXV0aC9hdXRoLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcENvbmZpZ01vZHVsZSB9IGZyb20gJy4vY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwQ29uZmlnTW9kdWxlXG4gICAgICAgIERhdGFiYXNlTW9kdWxlLFxuICAgICAgICBVc2Vyc01vZHVsZSxcbiAgICAgICAgQXV0aE1vZHVsZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgaW1wbGVtZW50cyBOZXN0TW9kdWxlIHtcbiAgICBjb25maWd1cmUoY29uc3VtZXI6IE1pZGRsZXdhcmVDb25zdW1lcikge1xuICAgICAgICBNb3JnYW5NaWRkbGV3YXJlLmNvbmZpZ3VyZSgnOmRhdGUgLSA6bWV0aG9kIC0gOnVybCAtIDpyZXNwb25zZS10aW1lIC0gOnN0YXR1cycpO1xuICAgICAgICBjb25zdW1lci5hcHBseShNb3JnYW5NaWRkbGV3YXJlKS5mb3JSb3V0ZXMoJyonKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBBcHBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuY29uZmlnLnNlcnZpY2UnO1xuXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4vYXBwLmNvbmZpZyc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgbG9hZDogW2FwcENvbmZpZ11cbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcHBDb25maWdTZXJ2aWNlXSxcbiAgICBleHBvcnRzOiBbQXBwQ29uZmlnU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbmZpZzogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldDxvYmplY3Q+KCdkYXRhYmFzZScpO1xuICAgIH1cblxuICAgIGdldCBob3N0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5ob3N0O1xuICAgIH1cblxuICAgIGdldCBwb3J0KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wb3J0XG4gICAgfVxufSIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgZGV2ZWxvcG1lbnQ6IHtcbiAgICAgICAgbGlzdGVuOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IDMyMDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvZHVjdGlvbjoge1xuICAgICAgICBsaXN0ZW46IHtcbiAgICAgICAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgICAgICAgcG9ydDogMzIwMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZV9kZXZlbG9wbWVudCcsICgpID0+IGNvbmZpZ3NbcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J10pOyJdLCJzb3VyY2VSb290IjoiIn0=