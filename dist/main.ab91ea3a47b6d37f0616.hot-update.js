exports.id = "main";
exports.modules = {

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
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    production: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
exports.default = config_1.registerAs('database', () => configs["development" || false]);


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
const database_config_service_1 = __webpack_require__(/*! ../config/database/database.config.service */ "./src/config/database/database.config.service.ts");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (databaseConfigService) => {
            return mongoose.connect(databaseConfigService.url, databaseConfigService.options);
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBNEM7QUFFNUMsTUFBTSxPQUFPLEdBQUc7SUFDWixXQUFXLEVBQUU7UUFDVCxHQUFHLEVBQUUsZ0NBQWdDO1FBQ3JDLE9BQU8sRUFBRTtZQUNMLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLElBQUk7U0FDM0I7S0FDSjtJQUNELFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRSxnQ0FBZ0M7UUFDckMsT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFLElBQUk7WUFDckIsa0JBQWtCLEVBQUUsSUFBSTtTQUMzQjtLQUNKO0NBQ0o7QUFFRCxrQkFBZSxtQkFBVSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBb0IsSUFBSSxLQUFhLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQjVGLGlFQUFxQztBQUNyQyw0SkFBbUY7QUFFdEUseUJBQWlCLEdBQUc7SUFDN0I7UUFDSSxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFVBQVUsRUFBRSxDQUFDLHFCQUE0QyxFQUE0QixFQUFFO1lBQ25GLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUNELE1BQU0sRUFBRSxDQUFDLCtDQUFxQixDQUFDO0tBQ2xDO0NBQ0osQ0FBQyIsImZpbGUiOiJtYWluLmFiOTFlYTNhNDdiNmQzN2YwNjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5jb25zdCBjb25maWdzID0ge1xuICAgIGRldmVsb3BtZW50OiB7XG4gICAgICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9kdWN0aW9uOiB7XG4gICAgICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+IGNvbmZpZ3NbcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J10pOyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uZmlnLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLFxuICAgICAgICB1c2VGYWN0b3J5OiAoZGF0YWJhc2VDb25maWdTZXJ2aWNlOiBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QoZGF0YWJhc2VDb25maWdTZXJ2aWNlLnVybCwgZGF0YWJhc2VDb25maWdTZXJ2aWNlLm9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBpbmplY3Q6IFtEYXRhYmFzZUNvbmZpZ1NlcnZpY2VdXG4gICAgfVxuXTsiXSwic291cmNlUm9vdCI6IiJ9