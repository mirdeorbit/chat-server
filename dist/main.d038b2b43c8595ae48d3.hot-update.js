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
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (config) => {
            console.log('config >>>> ', config);
            return mongoose.connect('mongodb://localhost/nest');
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF3QztBQUN4QyxxSEFBMEQ7QUFDMUQseUpBQWlGO0FBU2pGLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRztBQUFqQixjQUFjO0lBTjFCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDLDZDQUFvQixDQUFDO1FBQy9CLFNBQVMsRUFBRSxDQUFDLEdBQUcsc0NBQWlCLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsR0FBRyxzQ0FBaUIsQ0FBQztLQUNsQyxDQUFDO0dBRVcsY0FBYyxDQUFHO0FBQWpCLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNYM0IsaUVBQXFDO0FBQ3JDLDRKQUFtRjtBQUV0RSx5QkFBaUIsR0FBRztJQUM3QjtRQUNJLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsVUFBVSxFQUFFLENBQUMsTUFBNkIsRUFBNEIsRUFBRTtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUVwQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsTUFBTSxFQUFFLENBQUMsK0NBQXFCLENBQUM7S0FDbEM7Q0FDSixDQUFDIiwiZmlsZSI6Im1haW4uZDAzOGIyYjQzYzg1OTVhZTQ4ZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAgeyBkYXRhYmFzZVByb3ZpZGVycyB9IGZyb20gJy4vZGF0YWJhc2UucHJvdmlkZXJzJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnTW9kdWxlIH0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlXCI7XG5pbXBvcnQge0RhdGFiYXNlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZVwiO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VDb25maWdNb2R1bGVdLFxuICAgIHByb3ZpZGVyczogWy4uLmRhdGFiYXNlUHJvdmlkZXJzXSxcbiAgICBleHBvcnRzOiBbLi4uZGF0YWJhc2VQcm92aWRlcnNdXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VNb2R1bGUge30iLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZVByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6ICdEQVRBQkFTRV9DT05ORUNUSU9OJyxcbiAgICAgICAgdXNlRmFjdG9yeTogKGNvbmZpZzogRGF0YWJhc2VDb25maWdTZXJ2aWNlKTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25maWcgPj4+PiAnLCBjb25maWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9uZXN0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogW0RhdGFiYXNlQ29uZmlnU2VydmljZV1cbiAgICB9XG5dOyJdLCJzb3VyY2VSb290IjoiIn0=