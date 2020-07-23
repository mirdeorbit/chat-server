exports.id = "main";
exports.modules = {

/***/ "./src/config/app/app.config.service.ts":
false,

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
        exports: [database_config_service_1.DatabaseConfigService]
    })
], DatabaseConfigModule);
exports.DatabaseConfigModule = DatabaseConfigModule;


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
const database_config_service_1 = __webpack_require__(/*! ../config/database/database.config.service */ "./src/config/database/database.config.service.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [database_config_module_1.DatabaseConfigModule],
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders],
        inject: [database_config_service_1.DatabaseConfigService]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./src/database/database.providers.ts":
/*!********************************************!*\
  !*** ./src/database/database.providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (config) => {
            console.log('config >>>> ', config);
            return mongoose.connect('mongodb://localhost/nest');
        },
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFiYXNlL2RhdGFiYXNlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMsNkVBQThDO0FBRTlDLDJJQUFrRTtBQUVsRSxtSEFBK0M7QUFZL0MsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBRztBQUF2QixvQkFBb0I7SUFWaEMsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxDQUFDLHlCQUFjLENBQUM7YUFDekIsQ0FBQztTQUNMO1FBQ0QsU0FBUyxFQUFFLENBQUMsK0NBQXFCLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUMsK0NBQXFCLENBQUM7S0FDbkMsQ0FBQztHQUVXLG9CQUFvQixDQUFHO0FBQXZCLG9EQUFvQjs7Ozs7Ozs7Ozs7Ozs7O0FDakJqQyw2RUFBNEM7QUFFNUMsTUFBTSxPQUFPLEdBQUc7SUFDWixXQUFXLEVBQUU7UUFDVCxHQUFHLEVBQUUsZ0NBQWdDO0tBQ3hDO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLGdDQUFnQztLQUN4QztDQUNKO0FBRUQsa0JBQWUsbUJBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQW9CLElBQUksS0FBYSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDVGLDZFQUF3QztBQUN4QyxxSEFBMEQ7QUFDMUQseUpBQWlGO0FBQ2pGLDRKQUFpRjtBQVNqRixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUc7QUFBakIsY0FBYztJQVAxQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztRQUMvQixTQUFTLEVBQUUsQ0FBQyxHQUFHLHNDQUFpQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLEdBQUcsc0NBQWlCLENBQUM7UUFDL0IsTUFBTSxFQUFFLENBQUMsK0NBQXFCLENBQUM7S0FDbEMsQ0FBQztHQUVXLGNBQWMsQ0FBRztBQUFqQix3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDWjNCLGlFQUFxQztBQUd4Qix5QkFBaUIsR0FBRztJQUM3QjtRQUNJLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsVUFBVSxFQUFFLENBQUMsTUFBNkIsRUFBNEIsRUFBRTtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUVwQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBRUo7Q0FDSixDQUFDIiwiZmlsZSI6Im1haW4uOTVhNTNkNWUyNDFiY2RkNmYwNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW1wb3J0IHsgRGF0YWJhc2VDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhYmFzZS5jb25maWcuc2VydmljZSc7XG5cbmltcG9ydCBkYXRhYmFzZUNvbmZpZyBmcm9tICcuL2RhdGFiYXNlLmNvbmZpZyc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgbG9hZDogW2RhdGFiYXNlQ29uZmlnXVxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0RhdGFiYXNlQ29uZmlnU2VydmljZV0sXG4gICAgZXhwb3J0czogW0RhdGFiYXNlQ29uZmlnU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZUNvbmZpZ01vZHVsZSB7fSIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgZGV2ZWxvcG1lbnQ6IHtcbiAgICAgICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0J1xuICAgIH0sXG4gICAgcHJvZHVjdGlvbjoge1xuICAgICAgICB1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NoYXQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+IGNvbmZpZ3NbcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J10pOyIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAgeyBkYXRhYmFzZVByb3ZpZGVycyB9IGZyb20gJy4vZGF0YWJhc2UucHJvdmlkZXJzJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnTW9kdWxlIH0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlXCI7XG5pbXBvcnQge0RhdGFiYXNlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZVwiO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VDb25maWdNb2R1bGVdLFxuICAgIHByb3ZpZGVyczogWy4uLmRhdGFiYXNlUHJvdmlkZXJzXSxcbiAgICBleHBvcnRzOiBbLi4uZGF0YWJhc2VQcm92aWRlcnNdLFxuICAgIGluamVjdDogW0RhdGFiYXNlQ29uZmlnU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1vZHVsZSB7fSIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uZmlnLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLFxuICAgICAgICB1c2VGYWN0b3J5OiAoY29uZmlnOiBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmZpZyA+Pj4+ICcsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L25lc3QnKTtcbiAgICAgICAgfSxcblxuICAgIH1cbl07Il0sInNvdXJjZVJvb3QiOiIifQ==