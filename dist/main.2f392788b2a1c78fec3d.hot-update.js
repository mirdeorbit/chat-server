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
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signup(authData) {
        const existingUser = await this.userModel.findOne({ email: authData.email });
        if (existingUser) {
            return existingUser;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBaUM7QUFDakMsNkVBQW9EO0FBR3BELDhGQUFnRDtBQUdoRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3BCLFlBRVksU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtJQUMvQixDQUFDO0lBRUosS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFnQjtRQUV6QixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRTNFLElBQUksWUFBWSxFQUFFO1lBQ2QsT0FBTyxZQUFZO1NBQ3RCO2FBQU07WUFDSCxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFakQsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0NBQ0o7QUFsQlksV0FBVztJQUR2QixtQkFBVSxFQUFFO0lBR0osMEJBQU0sQ0FBQyxzQkFBVSxDQUFDO3lEQUNBLGdCQUFLLG9CQUFMLGdCQUFLO0dBSG5CLFdBQVcsQ0FrQnZCO0FBbEJZLGtDQUFXIiwiZmlsZSI6Im1haW4uMmYzOTI3ODhiMmExYzc4ZmVjM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBVU0VSX01PREVMIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChVU0VSX01PREVMKVxuICAgICAgICBwcml2YXRlIHVzZXJNb2RlbDogTW9kZWw8VXNlcj4sXG4gICAgKSB7fVxuXG4gICAgYXN5bmMgc2lnbnVwKGF1dGhEYXRhOiBvYmplY3QpOiBQcm9taXNlPFVzZXI+IHtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJNb2RlbC5maW5kT25lKHtlbWFpbDogYXV0aERhdGEuZW1haWx9KTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdVc2VyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkVXNlciA9IG5ldyB0aGlzLnVzZXJNb2RlbChhdXRoRGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkVXNlci5zYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==