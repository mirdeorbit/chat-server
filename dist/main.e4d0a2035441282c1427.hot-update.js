exports.id = "main";
exports.modules = {

/***/ "./src/modules/users/users.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/users/users.controller.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getMe(req) {
        return this.usersService.getMe(req.query.token);
    }
};
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "getMe", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [typeof (_c = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _c : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTJEO0FBQzNELDJHQUErQztBQUMvQyxnRUFBNEM7QUFJNUMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUN4QixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFHM0QsS0FBSyxDQUFDLEtBQUssQ0FBUSxHQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFIRztJQURDLFlBQUcsQ0FBQyxJQUFJLENBQUM7SUFDRyx1QkFBRyxFQUFFOzt5REFBTSxpQkFBTyxvQkFBUCxpQkFBTzt3REFBRyxPQUFPLG9CQUFQLE9BQU87NENBRXhDO0FBTlEsZUFBZTtJQUQzQixtQkFBVSxDQUFDLE9BQU8sQ0FBQzt5REFFMkIsNEJBQVksb0JBQVosNEJBQVk7R0FEOUMsZUFBZSxDQU8zQjtBQVBZLDBDQUFlIiwiZmlsZSI6Im1haW4uZTRkMGEyMDM1NDQxMjgyYzE0MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUmVxLCBSZXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9lbnRpdGllcy91c2VyLmVudGl0eSc7XG5cbkBDb250cm9sbGVyKCd1c2VycycpXG5leHBvcnQgY2xhc3MgVXNlcnNDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fVxuXG4gICAgQEdldCgnbWUnKVxuICAgIGFzeW5jIGdldE1lKEBSZXEoKSByZXE6IFJlcXVlc3QpOiBQcm9taXNlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmdldE1lKHJlcS5xdWVyeS50b2tlbik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=