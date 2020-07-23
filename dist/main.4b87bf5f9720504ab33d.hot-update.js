exports.id = "main";
exports.modules = {

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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UsersService = class UsersService {
    constructor(catModel) {
        this.catModel = catModel;
    }
    async getMe(token) {
        return new Promise((resolve) => { resolve('me'); });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject()),
    __metadata("design:paramtypes", [typeof (_a = typeof Model !== "undefined" && Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQW9EO0FBS3BELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDckIsWUFFWSxRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZO0lBQzdCLENBQUM7SUFFSixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWE7UUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUFUWSxZQUFZO0lBRHhCLG1CQUFVLEVBQUU7SUFHSiwwQkFBTSxFQUFFO3lEQUNTLEtBQUssb0JBQUwsS0FBSztHQUhsQixZQUFZLENBU3hCO0FBVFksb0NBQVkiLCJmaWxlIjoibWFpbi40Yjg3YmY1Zjk3MjA1MDRhYjMzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyAgfVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdCgpXG4gICAgICAgIHByaXZhdGUgY2F0TW9kZWw6IE1vZGVsPENhdD4sXG4gICAgKSB7fVxuXG4gICAgYXN5bmMgZ2V0TWUodG9rZW46IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtyZXNvbHZlKCdtZScpfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=