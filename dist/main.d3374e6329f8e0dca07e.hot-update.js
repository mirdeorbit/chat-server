exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
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
const morgan_1 = __webpack_require__(/*! @nest-middlewares/morgan */ "@nest-middlewares/morgan");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/database/database.module.ts");
const users_module_1 = __webpack_require__(/*! ./modules/users/users.module */ "./src/modules/users/users.module.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
let AppModule = class AppModule {
    configure(consumer) {
        morgan_1.MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(morgan_1.MorganMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/config/config.module.ts":
/*!*************************************!*\
  !*** ./src/config/config.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: ENOENT: no such file or directory, open '/var/www/chat-app/chat-server/app/src/config/config.module.ts'");

/***/ }),

/***/ "./src/config/config.service.ts":
/*!**************************************!*\
  !*** ./src/config/config.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: ENOENT: no such file or directory, open '/var/www/chat-app/chat-server/app/src/config/config.service.ts'");

/***/ }),

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_module_1 = __webpack_require__(/*! ../config/config.module */ "./src/config/config.module.ts");
const config_service_1 = __webpack_require__(/*! ../config/config.service */ "./src/config/config.service.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.AppConfigModule],
                inject: [config_service_1.AppConfigService],
                useFactory: async (config) => config.database
            })]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./src/entities/user.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/user.entity.ts ***!
  \*************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let User = class User {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
User = __decorate([
    typeorm_1.Entity({ name: 'users' })
], User);
exports.User = User;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const appConfig = app.get('AppConfigService');
    await app.listen(appConfig.listen.port);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ }),

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


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ "./src/entities/user.entity.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

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


/***/ }),

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


/***/ }),

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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ "./src/entities/user.entity.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;


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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ "./src/entities/user.entity.ts");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getMe(token) {
        return this.usersRepository.findOne({ token: token });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "@nest-middlewares/morgan":
/*!*******************************************!*\
  !*** external "@nest-middlewares/morgan" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nest-middlewares/morgan");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy91c2VyLmVudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdXNlcnMvdXNlcnMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3QtbWlkZGxld2FyZXMvbW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3Rqcy9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmVzdGpzL3R5cGVvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHlwZW9ybVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0U7QUFDeEUsaUdBQTREO0FBRTVELHFIQUE0RDtBQUU1RCxzSEFBMkQ7QUFDM0QsaUhBQXdEO0FBVXhELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFDbEIsU0FBUyxDQUFD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Ozs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6Im1haW4uZDMzNzRlNjMyOWY4ZTBkY2EwN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSwgTmVzdE1vZHVsZSwgTWlkZGxld2FyZUNvbnN1bWVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTW9yZ2FuTWlkZGxld2FyZSB9IGZyb20gJ0BuZXN0LW1pZGRsZXdhcmVzL21vcmdhbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi9kYXRhYmFzZS9kYXRhYmFzZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBVc2Vyc01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy91c2Vycy91c2Vycy5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBEYXRhYmFzZU1vZHVsZSxcbiAgICAgICAgVXNlcnNNb2R1bGUsXG4gICAgICAgIEF1dGhNb2R1bGVcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gICAgY29uZmlndXJlKGNvbnN1bWVyOiBNaWRkbGV3YXJlQ29uc3VtZXIpIHtcbiAgICAgICAgTW9yZ2FuTWlkZGxld2FyZS5jb25maWd1cmUoJzpkYXRlIC0gOm1ldGhvZCAtIDp1cmwgLSA6cmVzcG9uc2UtdGltZSAtIDpzdGF0dXMnKTtcbiAgICAgICAgY29uc3VtZXIuYXBwbHkoTW9yZ2FuTWlkZGxld2FyZSkuZm9yUm91dGVzKCcqJyk7XG4gICAgfVxufSIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgQXBwQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtUeXBlT3JtTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICAgIGltcG9ydHM6IFtBcHBDb25maWdNb2R1bGVdLFxuICAgICAgICBpbmplY3Q6IFtBcHBDb25maWdTZXJ2aWNlXSxcbiAgICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKGNvbmZpZzogQXBwQ29uZmlnU2VydmljZSkgPT4gY29uZmlnLmRhdGFiYXNlXG4gICAgfSldXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VNb2R1bGUge30iLCJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgT2JqZWN0SWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSh7bmFtZTogJ3VzZXJzJ30pXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgQE9iamVjdElkQ29sdW1uKClcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgQENvbHVtbigpXG4gICAgZW1haWw6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKHsgZGVmYXVsdDogdHJ1ZSB9KVxuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICB0b2tlbjogc3RyaW5nO1xufSIsImltcG9ydCB7IE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvYXBwL2FwcC5jb25maWcuc2VydmljZSc7XG5cbmRlY2xhcmUgY29uc3QgbW9kdWxlOiBhbnk7XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcblx0Y29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEFwcE1vZHVsZSwgeyBjb3JzOiB0cnVlIH0pO1xuXG5cdGNvbnN0IGFwcENvbmZpZzogQXBwQ29uZmlnU2VydmljZSA9IGFwcC5nZXQoJ0FwcENvbmZpZ1NlcnZpY2UnKTtcblxuXHRhd2FpdCBhcHAubGlzdGVuKGFwcENvbmZpZy5saXN0ZW4ucG9ydCk7XG5cblx0aWYgKG1vZHVsZS5ob3QpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdCgpO1xuXHRcdG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiBhcHAuY2xvc2UoKSk7XG5cdH1cbn1cblxuYm9vdHN0cmFwKCk7XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBQb3N0LCBSZXF9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5AQ29udHJvbGxlcignYXV0aCcpXG5leHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgQFBvc3QoJ3NpZ25pbicpXG4gICAgYXN5bmMgc2lnbmluKEBSZXEoKSByZXE6IFJlcXVlc3QpOiBQcm9taXNlPFVzZXI+IHtcblxuICAgIH1cblxuICAgIEBQb3N0KCdzaWdudXAnKVxuICAgIGFzeW5jIHNpZ251cChAUmVxKCkgcmVxOiBSZXF1ZXN0KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnNpZ251cChyZXEuYm9keSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gJy4vYXV0aC5jb250cm9sbGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtVc2VyXSldLFxuICAgIGNvbnRyb2xsZXJzOiBbQXV0aENvbnRyb2xsZXJdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdXRoU2VydmljZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0UmVwb3NpdG9yeShVc2VyKVxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJzUmVwb3NpdG9yeTogUmVwb3NpdG9yeTxVc2VyPlxuICAgICkge31cblxuICAgIGFzeW5jIHNpZ251cChhdXRoRGF0YTogb2JqZWN0KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgIHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzUmVwb3NpdG9yeS5maW5kT25lT3JGYWlsKHtlbWFpbDogYXV0aERhdGEuZW1haWx9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyTW9kZWwgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgdXNlck1vZGVsLmVtYWlsID0gYXV0aERhdGEuZW1haWw7XG4gICAgICAgICAgICB1c2VyTW9kZWwucGFzc3dvcmQgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JylcbiAgICAgICAgICAgICAgICAudXBkYXRlKGF1dGhEYXRhLnBhc3N3b3JkKS5kaWdlc3QoJ2hleCcpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzUmVwb3NpdG9yeS5zYXZlKHVzZXJNb2RlbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFJlcSwgUmVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5AQ29udHJvbGxlcigndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXJzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkge31cblxuICAgIEBHZXQoJ21lJylcbiAgICBhc3luYyBnZXRNZShAUmVxKCkgcmVxOiBSZXF1ZXN0KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5nZXRNZShyZXEucXVlcnkudG9rZW4pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFR5cGVPcm1Nb2R1bGUgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5pbXBvcnQgeyBVc2Vyc0NvbnRyb2xsZXIgfSBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yRmVhdHVyZShbVXNlcl0pXSxcbiAgICBjb250cm9sbGVyczogW1VzZXJzQ29udHJvbGxlcl0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJzU2VydmljZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBJbmplY3RSZXBvc2l0b3J5IH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9lbnRpdGllcy91c2VyLmVudGl0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0UmVwb3NpdG9yeShVc2VyKVxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJzUmVwb3NpdG9yeTogUmVwb3NpdG9yeTxVc2VyPixcbiAgICApIHt9XG5cbiAgICBhc3luYyBnZXRNZSh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJzUmVwb3NpdG9yeS5maW5kT25lKHt0b2tlbjogdG9rZW59KTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3QtbWlkZGxld2FyZXMvbW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3R5cGVvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9