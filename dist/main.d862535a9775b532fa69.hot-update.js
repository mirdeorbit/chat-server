exports.id = "main";
exports.modules = {

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
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
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const users_providers_1 = __webpack_require__(/*! ./users.providers */ "./src/modules/users/users.providers.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            ...users_providers_1.UsersProviders
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/modules/users/users.providers.ts":
/*!**********************************************!*\
  !*** ./src/modules/users/users.providers.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = __webpack_require__(/*! ./users.schema */ "./src/modules/users/users.schema.ts");
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
/*!*******************************************!*\
  !*** ./src/modules/users/users.schema.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.UsersSchema = new mongoose.Schema({
    email: String,
    password: Number
});


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXNlcnMvdXNlcnMucHJvdmlkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLnNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQXdDO0FBRXhDLG9IQUFxRDtBQUNyRCwyR0FBK0M7QUFDL0MsaUhBQW1EO0FBVW5ELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRztBQUFkLFdBQVc7SUFSdkIsZUFBTSxDQUFDO1FBQ0osV0FBVyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUM5QixTQUFTLEVBQUU7WUFDUCw0QkFBWTtZQUNaLEdBQUcsZ0NBQWM7U0FDcEI7S0FDSixDQUFDO0dBRVcsV0FBVyxDQUFHO0FBQWQsa0NBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ2J4Qix3R0FBNkM7QUFFN0MsMkZBQWtFO0FBRXJELHNCQUFjLEdBQUc7SUFDMUI7UUFDSSxPQUFPLEVBQUUsc0JBQVU7UUFDbkIsVUFBVSxFQUFFLENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsMEJBQVcsQ0FBQztRQUM3RSxNQUFNLEVBQUUsQ0FBQywrQkFBbUIsQ0FBQztLQUNoQztDQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1hGLGlFQUFxQztBQUV4QixtQkFBVyxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxLQUFLLEVBQUUsTUFBTTtJQUNiLFFBQVEsRUFBRSxNQUFNO0NBQ25CLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmQ4NjI1MzVhOTc3NWI1MzJmYTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vdXNlcnMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcnNQcm92aWRlcnMgfSBmcm9tICcuL3VzZXJzLnByb3ZpZGVycyc7XG5cbkBNb2R1bGUoe1xuICAgIGNvbnRyb2xsZXJzOiBbVXNlcnNDb250cm9sbGVyXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXNlcnNTZXJ2aWNlLFxuICAgICAgICAuLi5Vc2Vyc1Byb3ZpZGVyc1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFVzZXJzU2NoZW1hIH0gZnJvbSAnLi91c2Vycy5zY2hlbWEnO1xuXG5pbXBvcnQgeyBVU0VSX01PREVMLCBEQVRBQkFTRV9DT05ORUNUSU9OIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJzUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogVVNFUl9NT0RFTCxcbiAgICAgICAgdXNlRmFjdG9yeTogKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+IGNvbm5lY3Rpb24ubW9kZWwoJ1VzZXInLCBVc2Vyc1NjaGVtYSksXG4gICAgICAgIGluamVjdDogW0RBVEFCQVNFX0NPTk5FQ1RJT05dLFxuICAgIH1cbl07IiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgY29uc3QgVXNlcnNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBlbWFpbDogU3RyaW5nLFxuICAgIHBhc3N3b3JkOiBOdW1iZXJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=