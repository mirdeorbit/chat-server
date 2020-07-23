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
        exports: [...database_providers_1.databaseProviders],
        inject: []
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMscUhBQTBEO0FBQzFELHlKQUFpRjtBQVNqRixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUc7QUFBakIsY0FBYztJQVAxQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztRQUMvQixTQUFTLEVBQUUsQ0FBQyxHQUFHLHNDQUFpQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLEdBQUcsc0NBQWlCLENBQUM7UUFDL0IsTUFBTSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBRVcsY0FBYyxDQUFHO0FBQWpCLHdDQUFjIiwiZmlsZSI6Im1haW4uZTRiYzA4ZGNmZTkyNzIxNjNlMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAgeyBkYXRhYmFzZVByb3ZpZGVycyB9IGZyb20gJy4vZGF0YWJhc2UucHJvdmlkZXJzJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnTW9kdWxlIH0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlXCI7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtEYXRhYmFzZUNvbmZpZ01vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbLi4uZGF0YWJhc2VQcm92aWRlcnNdLFxuICAgIGV4cG9ydHM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc10sXG4gICAgaW5qZWN0OiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlTW9kdWxlIHt9Il0sInNvdXJjZVJvb3QiOiIifQ==