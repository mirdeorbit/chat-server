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
const helpers = __webpack_require__(/*! ../../../utils/helpers */ "./src/utils/helpers/index.js");
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signup(authData) {
        const existingUser = await this.userModel.findOne({ email: authData.email });
        if (existingUser) {
            existingUser.token = helpers.generateToken(existingUser.password);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBaUM7QUFDakMsNkVBQW9EO0FBR3BELDhGQUFnRDtBQUVoRCxrR0FBa0Q7QUFHbEQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUNwQixZQUVZLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFDL0IsQ0FBQztJQUVKLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBZ0I7UUFFekIsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUUzRSxJQUFJLFlBQVksRUFBRTtZQUNkLFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEUsT0FBTyxNQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQzthQUFNO1lBQ0gsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWpELE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUNKO0FBbkJZLFdBQVc7SUFEdkIsbUJBQVUsRUFBRTtJQUdKLDBCQUFNLENBQUMsc0JBQVUsQ0FBQzt5REFDQSxnQkFBSyxvQkFBTCxnQkFBSztHQUhuQixXQUFXLENBbUJ2QjtBQW5CWSxrQ0FBVyIsImZpbGUiOiJtYWluLmFkYjA3ZmEyOGRkY2M4Mzk2Y2Y0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgVVNFUl9NT0RFTCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoVVNFUl9NT0RFTClcbiAgICAgICAgcHJpdmF0ZSB1c2VyTW9kZWw6IE1vZGVsPFVzZXI+LFxuICAgICkge31cblxuICAgIGFzeW5jIHNpZ251cChhdXRoRGF0YTogb2JqZWN0KTogUHJvbWlzZTxVc2VyPiB7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyTW9kZWwuZmluZE9uZSh7ZW1haWw6IGF1dGhEYXRhLmVtYWlsfSk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgZXhpc3RpbmdVc2VyLnRva2VuID0gaGVscGVycy5nZW5lcmF0ZVRva2VuKGV4aXN0aW5nVXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZXhpc3RpbmdVc2VyLnNhdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRVc2VyID0gbmV3IHRoaXMudXNlck1vZGVsKGF1dGhEYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWRVc2VyLnNhdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9