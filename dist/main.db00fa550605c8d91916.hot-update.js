exports.id = "main";
exports.modules = {

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
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
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const crypto = __webpack_require__(/*! crypto */ "crypto");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ "./src/entities/user.entity.ts");
let AuthService = class AuthService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async signup(authData) {
        let user;
        try {
            user = await this.usersRepository.findOneOrFail({ email: authData.email });
        }
        catch (err) {
            const userModel = new user_entity_1.User();
            userModel.email = authData.email;
            userModel.password = crypto.createHash('md5')
                .update(authData.password).digest('hex');
            try {
                user = await this.usersRepository.save(userModel);
            }
            catch (err) {
                throw err;
            }
        }
        console.log(user);
        return user;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUFvRDtBQUNwRCxnRUFBcUM7QUFDckMsMkRBQWlDO0FBRWpDLGdGQUFtRDtBQUNuRCw2R0FBa0Q7QUFHbEQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUNwQixZQUVxQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7SUFDbkQsQ0FBQztJQUVKLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBZ0I7UUFDekIsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJO1lBQ0MsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDN0U7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE1BQU0sU0FBUyxHQUFHLElBQUksa0JBQUksRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqQyxTQUFTLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2lCQUN4QyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QyxJQUFJO2dCQUNBLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JEO1lBQUMsT0FBTSxHQUFHLEVBQUU7Z0JBQ1QsTUFBTSxHQUFHLENBQUM7YUFDYjtTQUNKO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUEzQlksV0FBVztJQUR2QixtQkFBVSxFQUFFO0lBR0oscUNBQWdCLENBQUMsa0JBQUksQ0FBQzt5REFDVyxvQkFBVSxvQkFBVixvQkFBVTtHQUh2QyxXQUFXLENBMkJ2QjtBQTNCWSxrQ0FBVyIsImZpbGUiOiJtYWluLmRiMDBmYTU1MDYwNWM4ZDkxOTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0UmVwb3NpdG9yeShVc2VyKVxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJzUmVwb3NpdG9yeTogUmVwb3NpdG9yeTxVc2VyPlxuICAgICkge31cblxuICAgIGFzeW5jIHNpZ251cChhdXRoRGF0YTogb2JqZWN0KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgIHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzUmVwb3NpdG9yeS5maW5kT25lT3JGYWlsKHtlbWFpbDogYXV0aERhdGEuZW1haWx9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyTW9kZWwgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgdXNlck1vZGVsLmVtYWlsID0gYXV0aERhdGEuZW1haWw7XG4gICAgICAgICAgICB1c2VyTW9kZWwucGFzc3dvcmQgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JylcbiAgICAgICAgICAgICAgICAudXBkYXRlKGF1dGhEYXRhLnBhc3N3b3JkKS5kaWdlc3QoJ2hleCcpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzUmVwb3NpdG9yeS5zYXZlKHVzZXJNb2RlbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9