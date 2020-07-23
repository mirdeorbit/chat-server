exports.id = "main";
exports.modules = {

/***/ "./src/config/app/app.config.module.ts":
false,

/***/ "./src/config/app/app.config.ts":
false,

/***/ "./src/database/database.providers.ts":
/*!********************************************!*\
  !*** ./src/database/database.providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const app_config_service_1 = __webpack_require__(/*! ../config/app/app.config.service */ "./src/config/app/app.config.service.ts");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (config) => {
            console.log('config >>>> ', config);
            return mongoose.connect('mongodb://localhost/nest');
        },
        inject: [app_config_service_1.AppConfigService]
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBcUM7QUFDckMsbUlBQW9FO0FBRXZELHlCQUFpQixHQUFHO0lBQzdCO1FBQ0ksT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixVQUFVLEVBQUUsQ0FBQyxNQUF3QixFQUE0QixFQUFFO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXBDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxNQUFNLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztLQUM3QjtDQUNKLENBQUMiLCJmaWxlIjoibWFpbi5kZDcxNWRmMjE1NjcxOWQyMmY4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLFxuICAgICAgICB1c2VGYWN0b3J5OiAoY29uZmlnOiBBcHBDb25maWdTZXJ2aWNlKTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25maWcgPj4+PiAnLCBjb25maWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9uZXN0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogW0FwcENvbmZpZ1NlcnZpY2VdXG4gICAgfVxuXTsiXSwic291cmNlUm9vdCI6IiJ9