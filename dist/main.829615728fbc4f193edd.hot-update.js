exports.id = "main";
exports.modules = {

/***/ "./src/modules/api/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/api/users/users.module.ts ***!
  \***********************************************/
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
const database_module_1 = __webpack_require__(/*! ../../../database/database.module */ "./src/database/database.module.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/api/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/api/users/users.service.ts");
const users_providers_1 = __webpack_require__(/*! ./users.providers */ "./src/modules/api/users/users.providers.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            ...users_providers_1.UsersProviders
        ],
        exports: users_providers_1.UsersProviders
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvdXNlcnMvdXNlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFFeEMsNEhBQW1FO0FBRW5FLHdIQUFxRDtBQUNyRCwrR0FBK0M7QUFDL0MscUhBQW1EO0FBWW5ELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRztBQUFkLFdBQVc7SUFWdkIsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUN6QixXQUFXLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzlCLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1lBQ1osR0FBRyxnQ0FBYztTQUNwQjtRQUNELE9BQU8sRUFBRSxnQ0FBYztLQUMxQixDQUFDO0dBRVcsV0FBVyxDQUFHO0FBQWQsa0NBQVciLCJmaWxlIjoibWFpbi44Mjk2MTU3MjhmYmM0ZjE5M2VkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBEYXRhYmFzZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL2RhdGFiYXNlLm1vZHVsZSc7XG5cbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vdXNlcnMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcnNQcm92aWRlcnMgfSBmcm9tICcuL3VzZXJzLnByb3ZpZGVycyc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtEYXRhYmFzZU1vZHVsZV0sXG4gICAgY29udHJvbGxlcnM6IFtVc2Vyc0NvbnRyb2xsZXJdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBVc2Vyc1NlcnZpY2UsXG4gICAgICAgIC4uLlVzZXJzUHJvdmlkZXJzXG4gICAgXSxcbiAgICBleHBvcnRzOiBVc2Vyc1Byb3ZpZGVyc1xufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJzTW9kdWxlIHt9XG4iXSwic291cmNlUm9vdCI6IiJ9