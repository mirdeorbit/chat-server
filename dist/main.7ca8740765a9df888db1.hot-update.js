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
const database_module_1 = __webpack_require__(/*! ../../database/database.module */ "./src/database/database.module.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const users_providers_1 = __webpack_require__(/*! ./users.providers */ "./src/modules/users/users.providers.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            ...users_providers_1.UsersProviders
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF3QztBQUV4Qyx5SEFBZ0U7QUFFaEUsb0hBQXFEO0FBQ3JELDJHQUErQztBQUMvQyxpSEFBbUQ7QUFXbkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQUFHO0FBQWQsV0FBVztJQVR2QixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQ3pCLFdBQVcsRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDOUIsU0FBUyxFQUFFO1lBQ1AsNEJBQVk7WUFDWixHQUFHLGdDQUFjO1NBQ3BCO0tBQ0osQ0FBQztHQUVXLFdBQVcsQ0FBRztBQUFkLGtDQUFXIiwiZmlsZSI6Im1haW4uN2NhODc0MDc2NWE5ZGY4ODhkYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgRGF0YWJhc2VNb2R1bGUgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9kYXRhYmFzZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBVc2Vyc0NvbnRyb2xsZXIgfSBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJzUHJvdmlkZXJzIH0gZnJvbSAnLi91c2Vycy5wcm92aWRlcnMnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VNb2R1bGVdLFxuICAgIGNvbnRyb2xsZXJzOiBbVXNlcnNDb250cm9sbGVyXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXNlcnNTZXJ2aWNlLFxuICAgICAgICAuLi5Vc2Vyc1Byb3ZpZGVyc1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==