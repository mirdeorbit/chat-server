exports.id = "main";
exports.modules = {

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
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: (databaseConfigService) => {
            return mongoose.connect(databaseConfigService.url, databaseConfigService.options);
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF3QztBQUN4QyxxSEFBMEQ7QUFDMUQseUpBQWlGO0FBUWpGLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRztBQUFqQixjQUFjO0lBTjFCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDLDZDQUFvQixDQUFDO1FBQy9CLFNBQVMsRUFBRSxDQUFDLEdBQUcsc0NBQWlCLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsR0FBRyxzQ0FBaUIsQ0FBQztLQUNsQyxDQUFDO0dBRVcsY0FBYyxDQUFHO0FBQWpCLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNWM0IsaUVBQXFDO0FBQ3JDLDRKQUFtRjtBQUVuRix3RkFBbUQ7QUFFdEMseUJBQWlCLEdBQUc7SUFDN0I7UUFDSSxPQUFPLEVBQUUsK0JBQW1CO1FBQzVCLFVBQVUsRUFBRSxDQUFDLHFCQUE0QyxFQUE0QixFQUFFO1lBQ25GLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUNELE1BQU0sRUFBRSxDQUFDLCtDQUFxQixDQUFDO0tBQ2xDO0NBQ0osQ0FBQyIsImZpbGUiOiJtYWluLmE3ODMxOWZjNGY2ZTgxYWVkMzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgIHsgZGF0YWJhc2VQcm92aWRlcnMgfSBmcm9tICcuL2RhdGFiYXNlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGFiYXNlQ29uZmlnTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc10sXG4gICAgZXhwb3J0czogWy4uLmRhdGFiYXNlUHJvdmlkZXJzXVxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlTW9kdWxlIHt9IiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgRGF0YWJhc2VDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgREFUQUJBU0VfQ09OTkVDVElPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZVByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IERBVEFCQVNFX0NPTk5FQ1RJT04sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChkYXRhYmFzZUNvbmZpZ1NlcnZpY2U6IERhdGFiYXNlQ29uZmlnU2VydmljZSk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChkYXRhYmFzZUNvbmZpZ1NlcnZpY2UudXJsLCBkYXRhYmFzZUNvbmZpZ1NlcnZpY2Uub3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogW0RhdGFiYXNlQ29uZmlnU2VydmljZV1cbiAgICB9XG5dOyJdLCJzb3VyY2VSb290IjoiIn0=