exports.id = "main";
exports.modules = {

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


/***/ }),

/***/ "./src/database/database.providers.ts":
/*!********************************************!*\
  !*** ./src/database/database.providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/index.js");
const app_config_module_1 = __webpack_require__(/*! ../config/app/app.config.module */ "./src/config/app/app.config.module.ts");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [app_config_module_1.AppConfigModule],
        useFactory: (config) => mongoose.connect('mongodb://localhost/nest'),
    }
];


/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuZXN0anMvY29uZmlnXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF3QztBQUN4Qyw2RUFBOEM7QUFFOUMsdUhBQXdEO0FBRXhELCtGQUFxQztBQVdyQyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUc7QUFBbEIsZUFBZTtJQVQzQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUU7WUFDTCxxQkFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsSUFBSSxFQUFFLENBQUMsb0JBQVMsQ0FBQzthQUNwQixDQUFDO1NBQ0w7UUFDRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csZUFBZSxDQUFHO0FBQWxCLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI1Qiw2RUFBNEM7QUFDNUMsNkVBQStDO0FBRy9DLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBR3pCLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQVMsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO0lBQzNCLENBQUM7Q0FDSjtBQWRZLGdCQUFnQjtJQUQ1QixtQkFBVSxFQUFFO3lEQUkwQixzQkFBYSxvQkFBYixzQkFBYTtHQUh2QyxnQkFBZ0IsQ0FjNUI7QUFkWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ0o3Qiw2RUFBNEM7QUFFNUMsTUFBTSxPQUFPLEdBQUc7SUFDWixXQUFXLEVBQUU7UUFDVCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtTQUNiO0tBQ0o7SUFDRCxVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtTQUNiO0tBQ0o7Q0FDSjtBQUVELGtCQUFlLG1CQUFVLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQW9CLElBQUksS0FBYSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakJ4Ryx5RkFBcUM7QUFDckMsZ0lBQWtFO0FBRXJELHlCQUFpQixHQUFHO0lBQzdCO1FBQ0ksT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixNQUFNLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1FBQ3pCLFVBQVUsRUFBRSxDQUFDLE1BQXVCLEVBQTRCLEVBQUUsQ0FDOUQsUUFBUSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztLQUNuRDtDQUNKLENBQUM7Ozs7Ozs7Ozs7OztBQ1ZGLDJDIiwiZmlsZSI6Im1haW4uMzc2YzQ2MTFjM2M3NWJhMWM1ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4vYXBwLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuL2FwcC5jb25maWcnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGxvYWQ6IFthcHBDb25maWddXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQXBwQ29uZmlnU2VydmljZV0sXG4gICAgZXhwb3J0czogW0FwcENvbmZpZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdNb2R1bGUge30iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0PG9iamVjdD4oJ2RhdGFiYXNlJyk7XG4gICAgfVxuXG4gICAgZ2V0IGhvc3QoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmhvc3Q7XG4gICAgfVxuXG4gICAgZ2V0IHBvcnQoKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBvcnRcbiAgICB9XG59IiwiaW1wb3J0IHsgcmVnaXN0ZXJBcyB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuY29uc3QgY29uZmlncyA9IHtcbiAgICBkZXZlbG9wbWVudDoge1xuICAgICAgICBsaXN0ZW46IHtcbiAgICAgICAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgICAgICAgcG9ydDogMzIwMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9kdWN0aW9uOiB7XG4gICAgICAgIGxpc3Rlbjoge1xuICAgICAgICAgICAgaG9zdDogJzEyNy4wLjAuMScsXG4gICAgICAgICAgICBwb3J0OiAzMjAwXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2RhdGFiYXNlX2RldmVsb3BtZW50JywgKCkgPT4gY29uZmlnc1twcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXSk7IiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgQXBwQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZVByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6ICdEQVRBQkFTRV9DT05ORUNUSU9OJyxcbiAgICAgICAgaW5qZWN0OiBbQXBwQ29uZmlnTW9kdWxlXVxuICAgICAgICB1c2VGYWN0b3J5OiAoY29uZmlnOiBBcHBDb25maWdNb2R1bGUpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gPT5cbiAgICAgICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvbmVzdCcpLFxuICAgIH1cbl07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb25maWdcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==