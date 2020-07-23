exports.id = "main";
exports.modules = {

/***/ "./src/database/database.providers.ts":
/*!********************************************!*\
  !*** ./src/database/database.providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const app_config_module_1 = __webpack_require__(/*! ../config/app/app.config.module */ "./src/config/app/app.config.module.ts");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (config) => {
            console.log('config >>>> ', config);
            return mongoose.connect('mongodb://localhost/nest');
        },
        inject: [app_config_module_1.AppConfigModule]
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBcUM7QUFDckMsZ0lBQWtFO0FBRXJELHlCQUFpQixHQUFHO0lBQzdCO1FBQ0ksT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixVQUFVLEVBQUUsQ0FBQyxNQUF1QixFQUE0QixFQUFFO1lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXBDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxNQUFNLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO0tBQzVCO0NBQ0osQ0FBQyIsImZpbGUiOiJtYWluLmIyY2ZmNzMyZmJlOTJmY2E1OWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBBcHBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvYXBwL2FwcC5jb25maWcubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLFxuICAgICAgICB1c2VGYWN0b3J5OiAoY29uZmlnOiBBcHBDb25maWdNb2R1bGUpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmZpZyA+Pj4+ICcsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L25lc3QnKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5qZWN0OiBbQXBwQ29uZmlnTW9kdWxlXVxuICAgIH1cbl07Il0sInNvdXJjZVJvb3QiOiIifQ==