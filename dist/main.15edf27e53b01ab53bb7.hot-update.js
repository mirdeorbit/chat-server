exports.id = "main";
exports.modules = {

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signin(req) {
    }
    async signup(req) {
        return this.authService.signup(req.body);
    }
};
__decorate([
    common_1.Post('signin'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "signin", null);
__decorate([
    common_1.Post('signup'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "signup", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUFzRDtBQUN0RCx1R0FBNkM7QUFDN0MsZ0VBQWlDO0FBR2pDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDdkIsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBR3pELEtBQUssQ0FBQyxNQUFNLENBQVEsR0FBWTtJQUVoQyxDQUFDO0lBR0QsS0FBSyxDQUFDLE1BQU0sQ0FBUSxHQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FFSjtBQVRHO0lBREMsYUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNELHVCQUFHLEVBQUU7O3lEQUFNLGlCQUFPLG9CQUFQLGlCQUFPO3dEQUFHLE9BQU8sb0JBQVAsT0FBTzs0Q0FFekM7QUFHRDtJQURDLGFBQUksQ0FBQyxRQUFRLENBQUM7SUFDRCx1QkFBRyxFQUFFOzt5REFBTSxpQkFBTyxvQkFBUCxpQkFBTzt3REFBRyxPQUFPLG9CQUFQLE9BQU87NENBRXpDO0FBWFEsY0FBYztJQUQxQixtQkFBVSxDQUFDLE1BQU0sQ0FBQzt5REFFMkIsMEJBQVcsb0JBQVgsMEJBQVc7R0FENUMsY0FBYyxDQWExQjtBQWJZLHdDQUFjIiwiZmlsZSI6Im1haW4uMTVlZGYyN2U1M2IwMWFiNTNiYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIFBvc3QsIFJlcX0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0fSBmcm9tICdleHByZXNzJztcblxuQENvbnRyb2xsZXIoJ2F1dGgnKVxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICAgIEBQb3N0KCdzaWduaW4nKVxuICAgIGFzeW5jIHNpZ25pbihAUmVxKCkgcmVxOiBSZXF1ZXN0KTogUHJvbWlzZTxVc2VyPiB7XG5cbiAgICB9XG5cbiAgICBAUG9zdCgnc2lnbnVwJylcbiAgICBhc3luYyBzaWdudXAoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5zaWdudXAocmVxLmJvZHkpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==