exports.id = "main";
exports.modules = {

/***/ "./src/config/database/database.config.module.ts":
false,

/***/ "./src/config/database/database.config.ts":
false,

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
const database_config_service_1 = __webpack_require__(/*! ../config/database/database.config.service */ "./src/config/database/database.config.service.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [database_config_service_1.DatabaseConfigService],
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMscUhBQTBEO0FBQzFELDRKQUFrRjtBQVFsRixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUc7QUFBakIsY0FBYztJQU4xQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztRQUNoQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLHNDQUFpQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLEdBQUcsc0NBQWlCLENBQUM7S0FDbEMsQ0FBQztHQUVXLGNBQWMsQ0FBRztBQUFqQix3Q0FBYyIsImZpbGUiOiJtYWluLjkxMzM1ODI0OWM4NzExOWQzYzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgIHsgZGF0YWJhc2VQcm92aWRlcnMgfSBmcm9tICcuL2RhdGFiYXNlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuLi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uZmlnLnNlcnZpY2VcIjtcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGFiYXNlQ29uZmlnU2VydmljZV0sXG4gICAgcHJvdmlkZXJzOiBbLi4uZGF0YWJhc2VQcm92aWRlcnNdLFxuICAgIGV4cG9ydHM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1vZHVsZSB7fSJdLCJzb3VyY2VSb290IjoiIn0=