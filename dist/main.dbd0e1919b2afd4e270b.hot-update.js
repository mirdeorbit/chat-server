exports.id = "main";
exports.modules = {

/***/ "./src/modules/api/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/api/auth/auth.service.ts ***!
  \**********************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
const helpers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../utils/helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signup(authData) {
        const existingUser = await this.userModel.findOne({ email: authData.email });
        if (existingUser) {
            existingUser.token = helpers.generateToken();
            return await existingUser.save();
        }
        else {
            const createdUser = new this.userModel(authData);
            return createdUser.save();
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_MODEL)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBaUM7QUFDakMsNkVBQW9EO0FBR3BELDhGQUFnRDtBQUVoRCxzTEFBa0Q7QUFHbEQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUNwQixZQUVZLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFDL0IsQ0FBQztJQUVKLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBZ0I7UUFFekIsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUUzRSxJQUFJLFlBQVksRUFBRTtZQUNkLFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzdDLE9BQU8sTUFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEM7YUFBTTtZQUNILE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVqRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7Q0FDSjtBQW5CWSxXQUFXO0lBRHZCLG1CQUFVLEVBQUU7SUFHSiwwQkFBTSxDQUFDLHNCQUFVLENBQUM7eURBQ0EsZ0JBQUssb0JBQUwsZ0JBQUs7R0FIbkIsV0FBVyxDQW1CdkI7QUFuQlksa0NBQVciLCJmaWxlIjoibWFpbi5kYmQwZTE5MTliMmFmZDRlMjcwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IFVTRVJfTU9ERUwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KFVTRVJfTU9ERUwpXG4gICAgICAgIHByaXZhdGUgdXNlck1vZGVsOiBNb2RlbDxVc2VyPixcbiAgICApIHt9XG5cbiAgICBhc3luYyBzaWdudXAoYXV0aERhdGE6IG9iamVjdCk6IFByb21pc2U8VXNlcj4ge1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlck1vZGVsLmZpbmRPbmUoe2VtYWlsOiBhdXRoRGF0YS5lbWFpbH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nVXNlci50b2tlbiA9IGhlbHBlcnMuZ2VuZXJhdGVUb2tlbigpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGV4aXN0aW5nVXNlci5zYXZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkVXNlciA9IG5ldyB0aGlzLnVzZXJNb2RlbChhdXRoRGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkVXNlci5zYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==