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
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./src/database/schemas/users.schema.ts":
/*!**********************************************!*\
  !*** ./src/database/schemas/users.schema.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.UsersSchema = new mongoose.Schema({
    email: String,
    password: String
});


/***/ }),

/***/ "./src/modules/users/users.providers.ts":
/*!**********************************************!*\
  !*** ./src/modules/users/users.providers.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = __webpack_require__(/*! ../../database/schemas/users.schema */ "./src/database/schemas/users.schema.ts");
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
exports.UsersProviders = [
    {
        provide: constants_1.USER_MODEL,
        useFactory: (connection) => connection.model('User', users_schema_1.UsersSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];


/***/ }),

/***/ "./src/modules/users/users.schema.ts":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9zY2hlbWFzL3VzZXJzLnNjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF3QztBQUN4QyxxSEFBMEQ7QUFDMUQseUpBQWlGO0FBU2pGLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRztBQUFqQixjQUFjO0lBTjFCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDLDZDQUFvQixDQUFDO1FBQy9CLFNBQVMsRUFBRSxDQUFDLEdBQUcsc0NBQWlCLENBQUM7S0FFcEMsQ0FBQztHQUVXLGNBQWMsQ0FBRztBQUFqQix3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDWDNCLGlFQUFxQztBQUV4QixtQkFBVyxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxLQUFLLEVBQUUsTUFBTTtJQUNiLFFBQVEsRUFBRSxNQUFNO0NBQ25CLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSkgsZ0lBQWtFO0FBRWxFLDJGQUFrRTtBQUVyRCxzQkFBYyxHQUFHO0lBQzFCO1FBQ0ksT0FBTyxFQUFFLHNCQUFVO1FBQ25CLFVBQVUsRUFBRSxDQUFDLFVBQXNCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDBCQUFXLENBQUM7UUFDN0UsTUFBTSxFQUFFLENBQUMsK0JBQW1CLENBQUM7S0FDaEM7Q0FDSixDQUFDIiwiZmlsZSI6Im1haW4uNzJjYTcyMjIxMzJjNDNiMWZlNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAgeyBkYXRhYmFzZVByb3ZpZGVycyB9IGZyb20gJy4vZGF0YWJhc2UucHJvdmlkZXJzJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnTW9kdWxlIH0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlXCI7XG5pbXBvcnQge0RhdGFiYXNlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZVwiO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VDb25maWdNb2R1bGVdLFxuICAgIHByb3ZpZGVyczogWy4uLmRhdGFiYXNlUHJvdmlkZXJzXSxcbiAgICAvLyBleHBvcnRzOiBbLi4uZGF0YWJhc2VQcm92aWRlcnNdXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VNb2R1bGUge30iLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBjb25zdCBVc2Vyc1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGVtYWlsOiBTdHJpbmcsXG4gICAgcGFzc3dvcmQ6IFN0cmluZ1xufSk7IiwiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFVzZXJzU2NoZW1hIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2Uvc2NoZW1hcy91c2Vycy5zY2hlbWEnO1xuXG5pbXBvcnQgeyBVU0VSX01PREVMLCBEQVRBQkFTRV9DT05ORUNUSU9OIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJzUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogVVNFUl9NT0RFTCxcbiAgICAgICAgdXNlRmFjdG9yeTogKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+IGNvbm5lY3Rpb24ubW9kZWwoJ1VzZXInLCBVc2Vyc1NjaGVtYSksXG4gICAgICAgIGluamVjdDogW0RBVEFCQVNFX0NPTk5FQ1RJT05dLFxuICAgIH1cbl07Il0sInNvdXJjZVJvb3QiOiIifQ==