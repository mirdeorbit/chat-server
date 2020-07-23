exports.id = "main";
exports.modules = {

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (25:8)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|     async signup(authData) {\n|         this.userModel.\n>         ;\n|         return new Promise((resolve) => resolve('asdafsdfsdf'));\n|     }");

/***/ }),

/***/ "./src/modules/users/users.service.ts":
/*!********************************************!*\
  !*** ./src/modules/users/users.service.ts ***!
  \********************************************/
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
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getMe(token) {
        return new Promise((resolve) => { resolve('me'); });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_MODEL)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBaUM7QUFDakMsNkVBQW9EO0FBRXBELDJGQUE2QztBQUc3QyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3JCLFlBRVksU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtJQUMvQixDQUFDO0lBRUosS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNKO0FBVFksWUFBWTtJQUR4QixtQkFBVSxFQUFFO0lBR0osMEJBQU0sQ0FBQyxzQkFBVSxDQUFDO3lEQUNBLGdCQUFLLG9CQUFMLGdCQUFLO0dBSG5CLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWSIsImZpbGUiOiJtYWluLjliNzM3ZTBjZjU4YmNmNjBiMTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVTRVJfTU9ERUwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChVU0VSX01PREVMKVxuICAgICAgICBwcml2YXRlIHVzZXJNb2RlbDogTW9kZWw8VXNlcj4sXG4gICAgKSB7fVxuXG4gICAgYXN5bmMgZ2V0TWUodG9rZW46IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtyZXNvbHZlKCdtZScpfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=