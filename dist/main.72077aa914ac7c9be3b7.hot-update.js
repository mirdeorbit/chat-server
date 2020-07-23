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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./src/database/database.providers.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRootAsync({
                profiders: [...database_providers_1.databaseProviders],
                exports: [...database_providers_1.databaseProviders]
            })]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMsZ0ZBQWdEO0FBQ2hELHFIQUEwRDtBQVMxRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUc7QUFBakIsY0FBYztJQVAxQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQyx1QkFBYSxDQUFDLFlBQVksQ0FBQztnQkFDakMsU0FBUyxFQUFFLENBQUMsR0FBRyxzQ0FBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsR0FBRyxzQ0FBaUIsQ0FBQzthQUNsQyxDQUFDLENBQUM7S0FDTixDQUFDO0dBRVcsY0FBYyxDQUFHO0FBQWpCLHdDQUFjIiwiZmlsZSI6Im1haW4uNzIwNzdhYTkxNGFjN2M5YmUzYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0ICB7IGRhdGFiYXNlUHJvdmlkZXJzIH0gZnJvbSAnLi9kYXRhYmFzZS5wcm92aWRlcnMnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbVHlwZU9ybU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgICBwcm9maWRlcnM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc10sXG4gICAgICAgIGV4cG9ydHM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc11cbiAgICB9KV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1vZHVsZSB7fSJdLCJzb3VyY2VSb290IjoiIn0=