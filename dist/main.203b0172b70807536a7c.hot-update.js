exports.id = "main";
exports.modules = {

/***/ "./src/config/database/database.config.module.ts":
/*!*******************************************************!*\
  !*** ./src/config/database/database.config.module.ts ***!
  \*******************************************************/
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
const database_config_service_1 = __webpack_require__(/*! ./database.config.service */ "./src/config/database/database.config.service.ts");
const database_config_1 = __webpack_require__(/*! ./database.config */ "./src/config/database/database.config.ts");
let DatabaseConfigModule = class DatabaseConfigModule {
};
DatabaseConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [database_config_1.default]
            }),
        ],
        providers: [database_config_service_1.DatabaseConfigService],
        exports: [database_config_service_1.DatabaseConfigService],
    })
], DatabaseConfigModule);
exports.DatabaseConfigModule = DatabaseConfigModule;


/***/ }),

/***/ "./src/config/database/database.config.service.ts":
/*!********************************************************!*\
  !*** ./src/config/database/database.config.service.ts ***!
  \********************************************************/
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
let DatabaseConfigService = class DatabaseConfigService {
    constructor(configService) {
        this.configService = configService;
        this.config = this.configService.get('database');
    }
    get url() {
        return this.config.url;
    }
    get options() {
        return this.config.options;
    }
};
DatabaseConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DatabaseConfigService);
exports.DatabaseConfigService = DatabaseConfigService;


/***/ }),

/***/ "./src/config/database/database.config.ts":
/*!************************************************!*\
  !*** ./src/config/database/database.config.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configs = {
    development: {
        url: 'mongodb://localhost:27017/chat'
    },
    production: {
        url: 'mongodb://localhost:27017/chat'
    }
};
exports.default = config_1.registerAs('database', () => configs["development" || false]);


/***/ }),

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
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
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./src/database/database.providers.ts");
const database_config_module_1 = __webpack_require__(/*! ../config/database/database.config.module */ "./src/config/database/database.config.module.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [database_config_module_1.DatabaseConfigModule],
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMsNkVBQThDO0FBRTlDLDJJQUFrRTtBQUVsRSxtSEFBK0M7QUFZL0MsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBRztBQUF2QixvQkFBb0I7SUFWaEMsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxDQUFDLHlCQUFjLENBQUM7YUFDekIsQ0FBQztTQUNMO1FBQ0QsU0FBUyxFQUFFLENBQUMsK0NBQXFCLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUMsK0NBQXFCLENBQUM7S0FDbkMsQ0FBQztHQUVXLG9CQUFvQixDQUFHO0FBQXZCLG9EQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCakMsNkVBQTRDO0FBQzVDLDZFQUErQztBQUcvQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUc5QixZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFTLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztJQUM5QixDQUFDO0NBQ0o7QUFkWSxxQkFBcUI7SUFEakMsbUJBQVUsRUFBRTt5REFJMEIsc0JBQWEsb0JBQWIsc0JBQWE7R0FIdkMscUJBQXFCLENBY2pDO0FBZFksc0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUNKbEMsNkVBQTRDO0FBRTVDLE1BQU0sT0FBTyxHQUFHO0lBQ1osV0FBVyxFQUFFO1FBQ1QsR0FBRyxFQUFFLGdDQUFnQztLQUN4QztJQUNELFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRSxnQ0FBZ0M7S0FDeEM7Q0FDSjtBQUVELGtCQUFlLG1CQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFvQixJQUFJLEtBQWEsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g1Riw2RUFBd0M7QUFDeEMscUhBQTBEO0FBQzFELHlKQUFpRjtBQVFqRixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUc7QUFBakIsY0FBYztJQU4xQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztRQUMvQixTQUFTLEVBQUUsQ0FBQyxHQUFHLHNDQUFpQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLEdBQUcsc0NBQWlCLENBQUM7S0FDbEMsQ0FBQztHQUVXLGNBQWMsQ0FBRztBQUFqQix3Q0FBYyIsImZpbGUiOiJtYWluLjIwM2IwMTcyYjcwODA3NTM2YTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnU2VydmljZSB9IGZyb20gJy4vZGF0YWJhc2UuY29uZmlnLnNlcnZpY2UnO1xuXG5pbXBvcnQgZGF0YWJhc2VDb25maWcgZnJvbSAnLi9kYXRhYmFzZS5jb25maWcnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGxvYWQ6IFtkYXRhYmFzZUNvbmZpZ11cbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtEYXRhYmFzZUNvbmZpZ1NlcnZpY2VdLFxuICAgIGV4cG9ydHM6IFtEYXRhYmFzZUNvbmZpZ1NlcnZpY2VdLFxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlQ29uZmlnTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0PG9iamVjdD4oJ2RhdGFiYXNlJyk7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudXJsO1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zKCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zXG4gICAgfVxufSIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgZGV2ZWxvcG1lbnQ6IHtcbiAgICAgICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0J1xuICAgIH0sXG4gICAgcHJvZHVjdGlvbjoge1xuICAgICAgICB1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NoYXQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+IGNvbmZpZ3NbcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J10pOyIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAgeyBkYXRhYmFzZVByb3ZpZGVycyB9IGZyb20gJy4vZGF0YWJhc2UucHJvdmlkZXJzJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnTW9kdWxlIH0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlXCI7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtEYXRhYmFzZUNvbmZpZ01vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbLi4uZGF0YWJhc2VQcm92aWRlcnNdLFxuICAgIGV4cG9ydHM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1vZHVsZSB7fSJdLCJzb3VyY2VSb290IjoiIn0=