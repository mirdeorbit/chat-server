exports.id = "main";
exports.modules = {

/***/ "./src/config/app/app.config.module.ts":
/*!*********************************************!*\
  !*** ./src/config/app/app.config.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_config_service_1 = __webpack_require__(/*! ./app.config.service */ "./src/config/app/app.config.service.ts");
const app_config_1 = __webpack_require__(/*! ./app.config */ "./src/config/app/app.config.ts");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [app_config_1.default]
            }),
        ],
        providers: [app_config_service_1.AppConfigService],
        exports: [app_config_service_1.AppConfigService],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;


/***/ }),

/***/ "./src/config/app/app.config.service.ts":
/*!**********************************************!*\
  !*** ./src/config/app/app.config.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AppConfigService = class AppConfigService {
    constructor(configService) {
        this.configService = configService;
        this.config = this.configService.get('app');
    }
    get host() {
        return this.config.listen.host;
    }
    get port() {
        return this.config.listen.port;
    }
};
AppConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AppConfigService);
exports.AppConfigService = AppConfigService;


/***/ }),

/***/ "./src/config/app/app.config.ts":
/*!**************************************!*\
  !*** ./src/config/app/app.config.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configs = {
    development: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    },
    production: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    }
};
exports.default = config_1.registerAs('app', () => configs["development" || false]);


/***/ }),

/***/ "./src/config/database/database.config.module.ts":
/*!*******************************************************!*\
  !*** ./src/config/database/database.config.module.ts ***!
  \*******************************************************/
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
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const database_config_service_1 = __webpack_require__(/*! ./database.config.service */ "./src/config/database/database.config.service.ts");
const database_config_1 = __webpack_require__(/*! ./database.config */ "./src/config/database/database.config.ts");
let DatabaseConfigModule = class DatabaseConfigModule {
};
DatabaseConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [database_config_1.default]
            }),
        ],
        providers: [database_config_service_1.DatabaseConfigService],
        exports: [database_config_service_1.DatabaseConfigService]
    })
], DatabaseConfigModule);
exports.DatabaseConfigModule = DatabaseConfigModule;


/***/ }),

/***/ "./src/config/database/database.config.service.ts":
/*!********************************************************!*\
  !*** ./src/config/database/database.config.service.ts ***!
  \********************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let DatabaseConfigService = class DatabaseConfigService {
    constructor(configService) {
        this.configService = configService;
        this.config = this.configService.get('database');
    }
    get url() {
        return this.config.url;
    }
    get options() {
        return this.config.options;
    }
};
DatabaseConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DatabaseConfigService);
exports.DatabaseConfigService = DatabaseConfigService;


/***/ }),

/***/ "./src/config/database/database.config.ts":
/*!************************************************!*\
  !*** ./src/config/database/database.config.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configs = {
    development: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    production: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
exports.default = config_1.registerAs('database', () => configs["development" || false]);


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: DATABASE_CONNECTION, USER_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATABASE_CONNECTION", function() { return DATABASE_CONNECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_MODEL", function() { return USER_MODEL; });
const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
const USER_MODEL = 'USER_MODEL';

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
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./src/database/database.providers.ts");
const database_config_module_1 = __webpack_require__(/*! ../config/database/database.config.module */ "./src/config/database/database.config.module.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [database_config_module_1.DatabaseConfigModule],
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./src/database/database.providers.ts":
/*!********************************************!*\
  !*** ./src/database/database.providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const database_config_service_1 = __webpack_require__(/*! ../config/database/database.config.service */ "./src/config/database/database.config.service.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: (databaseConfigService) => {
            return mongoose.connect(databaseConfigService.url, databaseConfigService.options);
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


/***/ }),

/***/ "./src/modules/api/api.module.ts":
/*!***************************************!*\
  !*** ./src/modules/api/api.module.ts ***!
  \***************************************/
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
const database_module_1 = __webpack_require__(/*! ../../database/database.module */ "./src/database/database.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./src/modules/api/users/users.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/modules/api/auth/auth.module.ts");
const app_config_module_1 = __webpack_require__(/*! ../../config/app/app.config.module */ "./src/config/app/app.config.module.ts");
let ApiModule = class ApiModule {
    configure(consumer) {
        morgan_1.MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(morgan_1.MorganMiddleware).forRoutes('*');
    }
};
ApiModule = __decorate([
    common_1.Module({
        imports: [
            app_config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ]
    })
], ApiModule);
exports.ApiModule = ApiModule;


/***/ }),

/***/ "./src/modules/api/auth/auth.controller.ts":
/*!*************************************************!*\
  !*** ./src/modules/api/auth/auth.controller.ts ***!
  \*************************************************/
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
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/api/auth/auth.service.ts");
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

/***/ "./src/modules/api/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/api/auth/auth.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/api/users/users.module.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/api/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/api/auth/auth.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [users_module_1.UsersModule],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

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
const constants_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
            console.log(createdUser);
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


/***/ }),

/***/ "./src/modules/api/users/users.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/api/users/users.controller.ts ***!
  \***************************************************/
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
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/api/users/users.service.ts");
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
const database_module_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../database/database.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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


/***/ }),

/***/ "./src/modules/api/users/users.providers.ts":
/*!**************************************************!*\
  !*** ./src/modules/api/users/users.providers.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../database/schemas/users.schema'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const constants_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports.UsersProviders = [
    {
        provide: constants_1.USER_MODEL,
        useFactory: (connection) => connection.model('User', users_schema_1.UsersSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];


/***/ }),

/***/ "./src/modules/api/users/users.service.ts":
/*!************************************************!*\
  !*** ./src/modules/api/users/users.service.ts ***!
  \************************************************/
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
const constants_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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


/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFiYXNlL2RhdGFiYXNlLnByb3ZpZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXBpLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL2F1dGgvYXV0aC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS91c2Vycy91c2Vycy5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS91c2Vycy91c2Vycy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL3VzZXJzL3VzZXJzLnByb3ZpZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvdXNlcnMvdXNlcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMsNkVBQThDO0FBRTlDLHVIQUF3RDtBQUV4RCwrRkFBcUM7QUFZckMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHO0FBQWxCLGVBQWU7SUFWM0IsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxDQUFDLG9CQUFTLENBQUM7YUFDcEIsQ0FBQztTQUNMO1FBQ0QsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMscUNBQWdCLENBQUM7S0FDOUIsQ0FBQztHQUVXLGVBQWUsQ0FBRztBQUFsQiwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNUIsNkVBQTRDO0FBQzVDLDZFQUErQztBQUcvQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUd6QixZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFTLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO0lBQ2xDLENBQUM7Q0FDSjtBQWRZLGdCQUFnQjtJQUQ1QixtQkFBVSxFQUFFO3lEQUkwQixzQkFBYSxvQkFBYixzQkFBYTtHQUh2QyxnQkFBZ0Is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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4vYXBwLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuL2FwcC5jb25maWcnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGxvYWQ6IFthcHBDb25maWddXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQXBwQ29uZmlnU2VydmljZV0sXG4gICAgZXhwb3J0czogW0FwcENvbmZpZ1NlcnZpY2VdLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ01vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25maWc6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8b2JqZWN0PignYXBwJyk7XG4gICAgfVxuXG4gICAgZ2V0IGhvc3QoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmxpc3Rlbi5ob3N0O1xuICAgIH1cblxuICAgIGdldCBwb3J0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5saXN0ZW4ucG9ydFxuICAgIH1cbn0iLCJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5jb25zdCBjb25maWdzID0ge1xuICAgIGRldmVsb3BtZW50OiB7XG4gICAgICAgIGxpc3Rlbjoge1xuICAgICAgICAgICAgaG9zdDogJzEyNy4wLjAuMScsXG4gICAgICAgICAgICBwb3J0OiAzMjAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb2R1Y3Rpb246IHtcbiAgICAgICAgbGlzdGVuOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IDMyMDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcygnYXBwJywgKCkgPT4gY29uZmlnc1twcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXSk7IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IGRhdGFiYXNlQ29uZmlnIGZyb20gJy4vZGF0YWJhc2UuY29uZmlnJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBsb2FkOiBbZGF0YWJhc2VDb25maWddXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbRGF0YWJhc2VDb25maWdTZXJ2aWNlXSxcbiAgICBleHBvcnRzOiBbRGF0YWJhc2VDb25maWdTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlQ29uZmlnTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0PG9iamVjdD4oJ2RhdGFiYXNlJyk7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudXJsO1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zKCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zXG4gICAgfVxufSIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgZGV2ZWxvcG1lbnQ6IHtcbiAgICAgICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb2R1Y3Rpb246IHtcbiAgICAgICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2RhdGFiYXNlJywgKCkgPT4gY29uZmlnc1twcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXSk7IiwiZXhwb3J0IGNvbnN0IERBVEFCQVNFX0NPTk5FQ1RJT04gPSAnREFUQUJBU0VfQ09OTkVDVElPTic7XG5leHBvcnQgY29uc3QgVVNFUl9NT0RFTCA9ICdVU0VSX01PREVMJzsiLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgIHsgZGF0YWJhc2VQcm92aWRlcnMgfSBmcm9tICcuL2RhdGFiYXNlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGFiYXNlQ29uZmlnTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFsuLi5kYXRhYmFzZVByb3ZpZGVyc10sXG4gICAgZXhwb3J0czogWy4uLmRhdGFiYXNlUHJvdmlkZXJzXVxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlTW9kdWxlIHt9IiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgRGF0YWJhc2VDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgREFUQUJBU0VfQ09OTkVDVElPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZVByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IERBVEFCQVNFX0NPTk5FQ1RJT04sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChkYXRhYmFzZUNvbmZpZ1NlcnZpY2U6IERhdGFiYXNlQ29uZmlnU2VydmljZSk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChkYXRhYmFzZUNvbmZpZ1NlcnZpY2UudXJsLCBkYXRhYmFzZUNvbmZpZ1NlcnZpY2Uub3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogW0RhdGFiYXNlQ29uZmlnU2VydmljZV1cbiAgICB9XG5dOyIsImltcG9ydCB7IE1vZHVsZSwgTmVzdE1vZHVsZSwgTWlkZGxld2FyZUNvbnN1bWVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTW9yZ2FuTWlkZGxld2FyZSB9IGZyb20gJ0BuZXN0LW1pZGRsZXdhcmVzL21vcmdhbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9hdXRoL2F1dGgubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwQ29uZmlnTW9kdWxlLFxuICAgICAgICBEYXRhYmFzZU1vZHVsZSxcbiAgICAgICAgVXNlcnNNb2R1bGUsXG4gICAgICAgIEF1dGhNb2R1bGVcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gICAgY29uZmlndXJlKGNvbnN1bWVyOiBNaWRkbGV3YXJlQ29uc3VtZXIpIHtcbiAgICAgICAgTW9yZ2FuTWlkZGxld2FyZS5jb25maWd1cmUoJzpkYXRlIC0gOm1ldGhvZCAtIDp1cmwgLSA6cmVzcG9uc2UtdGltZSAtIDpzdGF0dXMnKTtcbiAgICAgICAgY29uc3VtZXIuYXBwbHkoTW9yZ2FuTWlkZGxld2FyZSkuZm9yUm91dGVzKCcqJyk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRyb2xsZXIsIFBvc3QsIFJlcX0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0fSBmcm9tICdleHByZXNzJztcblxuQENvbnRyb2xsZXIoJ2F1dGgnKVxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICAgIEBQb3N0KCdzaWduaW4nKVxuICAgIGFzeW5jIHNpZ25pbihAUmVxKCkgcmVxOiBSZXF1ZXN0KTogUHJvbWlzZTxVc2VyPiB7XG5cbiAgICB9XG5cbiAgICBAUG9zdCgnc2lnbnVwJylcbiAgICBhc3luYyBzaWdudXAoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5zaWdudXAocmVxLmJvZHkpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBVc2Vyc01vZHVsZSB9IGZyb20gJy4uL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5cbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSAnLi9hdXRoLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtVc2Vyc01vZHVsZV0sXG4gICAgY29udHJvbGxlcnM6IFtBdXRoQ29udHJvbGxlcl0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhTZXJ2aWNlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBVU0VSX01PREVMIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChVU0VSX01PREVMKVxuICAgICAgICBwcml2YXRlIHVzZXJNb2RlbDogTW9kZWw8VXNlcj4sXG4gICAgKSB7fVxuXG4gICAgYXN5bmMgc2lnbnVwKGF1dGhEYXRhOiBvYmplY3QpOiBQcm9taXNlPFVzZXI+IHtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJNb2RlbC5maW5kT25lKHtlbWFpbDogYXV0aERhdGEuZW1haWx9KTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdVc2VyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkVXNlciA9IG5ldyB0aGlzLnVzZXJNb2RlbChhdXRoRGF0YSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZWRVc2VyKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWRVc2VyLnNhdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFJlcSwgUmVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5AQ29udHJvbGxlcigndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXJzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkge31cblxuICAgIEBHZXQoJ21lJylcbiAgICBhc3luYyBnZXRNZShAUmVxKCkgcmVxOiBSZXF1ZXN0KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5nZXRNZShyZXEucXVlcnkudG9rZW4pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgVXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2Vyc1Byb3ZpZGVycyB9IGZyb20gJy4vdXNlcnMucHJvdmlkZXJzJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGFiYXNlTW9kdWxlXSxcbiAgICBjb250cm9sbGVyczogW1VzZXJzQ29udHJvbGxlcl0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJzU2VydmljZSxcbiAgICAgICAgLi4uVXNlcnNQcm92aWRlcnNcbiAgICBdLFxuICAgIGV4cG9ydHM6IFVzZXJzUHJvdmlkZXJzXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlcnNNb2R1bGUge31cbiIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBVc2Vyc1NjaGVtYSB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3NjaGVtYXMvdXNlcnMuc2NoZW1hJztcblxuaW1wb3J0IHsgVVNFUl9NT0RFTCwgREFUQUJBU0VfQ09OTkVDVElPTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBVc2Vyc1Byb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IFVTRVJfTU9ERUwsXG4gICAgICAgIHVzZUZhY3Rvcnk6IChjb25uZWN0aW9uOiBDb25uZWN0aW9uKSA9PiBjb25uZWN0aW9uLm1vZGVsKCdVc2VyJywgVXNlcnNTY2hlbWEpLFxuICAgICAgICBpbmplY3Q6IFtEQVRBQkFTRV9DT05ORUNUSU9OXSxcbiAgICB9XG5dOyIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVVNFUl9NT0RFTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KFVTRVJfTU9ERUwpXG4gICAgICAgIHByaXZhdGUgdXNlck1vZGVsOiBNb2RlbDxVc2VyPixcbiAgICApIHt9XG5cbiAgICBhc3luYyBnZXRNZSh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge3Jlc29sdmUoJ21lJyl9KTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9