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
const app_config_module_1 = __webpack_require__(/*! ./config/app/app.config.module */ "./src/config/app/app.config.module.ts");
let AppModule = class AppModule {
    configure(consumer) {
        morgan_1.MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(morgan_1.MorganMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            app_config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

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
        url: 'mongodb://localhost:27017/chat'
    },
    production: {
        url: 'mongodb://localhost:27017/chat'
    }
};
exports.default = config_1.registerAs('database', () => configs["development" || false]);


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
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (databaseConfigService) => {
            console.log('config >>>> ', databaseConfigService.config);
            return mongoose.connect('mongodb://localhost/nest');
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


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
    console.log(appConfig.listen);
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
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [],
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AuthService = class AuthService {
    constructor() { }
    async signup(authData) {
        return new Promise((resolve) => resolve('asdafsdfsdf'));
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
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
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UsersService = class UsersService {
    constructor() { }
    async getMe(token) {
        return new Promise((resolve) => { resolve('me'); });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
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

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5wcm92aWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91c2Vycy91c2Vycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuZXN0LW1pZGRsZXdhcmVzL21vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5lc3Rqcy9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQXdFO0FBQ3hFLGlHQUE0RDtBQUU1RCxxSEFBNEQ7QUFFNUQsc0hBQTJEO0FBQzNELGlIQUF3RDtBQUV4RCwrSEFBaUU7QUFXakUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUNsQixTQUFTLENBQUMsUUFBNEI7UUFDbEMseUJBQWdCLENBQUMsU0FBUyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDaEYsUUFBUSxDQUFDLEtBQUssQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFMWSxTQUFTO0lBVHJCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRTtZQUNMLG1DQUFlO1lBQ2YsZ0NBQWM7WUFDZCwwQkFBVztZQUNYLHdCQUFVO1NBQ2I7S0FDSixDQUFDO0dBRVcsU0FBUyxDQUtyQjtBQUxZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnRCLDZFQUF3QztBQUN4Qyw2RUFBOEM7QUFFOUMsdUhBQXdEO0FBRXhELCtGQUFxQztBQVlyQyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUc7QUFBbEIsZUFBZTtJQVYzQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUU7WUFDTCxxQkFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsSUFBSSxFQUFFLENBQUMsb0JBQVMsQ0FBQzthQUNwQixDQUFDO1NBQ0w7UUFDRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyxxQ0FBZ0IsQ0FBQztLQUM5QixDQUFDO0dBRVcsZUFBZSxDQUFHO0FBQWxCLDBD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SUFQdkIsZUFBTSxDQUFDO1FBQ0osV0FBVyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUM5QixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO0tBQ0osQ0FBQztHQUVXLFdBQVcsQ0FBRztBQUFkLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeEIsNkVBQW9EO0FBT3BELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDckIsZ0JBQWUsQ0FBQztJQUVoQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWE7UUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUFOWSxZQUFZO0lBRHhCLG1CQUFVLEVBQUU7O0dBQ0EsWUFBWSxDQU14QjtBQU5ZLG9DQUFZOzs7Ozs7Ozs7Ozs7QUNQekIscUQ7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoibWFpbi5lOTZmNGRmYzg5NTJlOGNmZGFlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlLCBOZXN0TW9kdWxlLCBNaWRkbGV3YXJlQ29uc3VtZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNb3JnYW5NaWRkbGV3YXJlIH0gZnJvbSAnQG5lc3QtbWlkZGxld2FyZXMvbW9yZ2FuJztcblxuaW1wb3J0IHsgRGF0YWJhc2VNb2R1bGUgfSBmcm9tICcuL2RhdGFiYXNlL2RhdGFiYXNlLm1vZHVsZSc7XG5cbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2F1dGgvYXV0aC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBDb25maWdNb2R1bGUgfSBmcm9tICcuL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFwcENvbmZpZ01vZHVsZVxuICAgICAgICBEYXRhYmFzZU1vZHVsZSxcbiAgICAgICAgVXNlcnNNb2R1bGUsXG4gICAgICAgIEF1dGhNb2R1bGVcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gICAgY29uZmlndXJlKGNvbnN1bWVyOiBNaWRkbGV3YXJlQ29uc3VtZXIpIHtcbiAgICAgICAgTW9yZ2FuTWlkZGxld2FyZS5jb25maWd1cmUoJzpkYXRlIC0gOm1ldGhvZCAtIDp1cmwgLSA6cmVzcG9uc2UtdGltZSAtIDpzdGF0dXMnKTtcbiAgICAgICAgY29uc3VtZXIuYXBwbHkoTW9yZ2FuTWlkZGxld2FyZSkuZm9yUm91dGVzKCcqJyk7XG4gICAgfVxufSIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4vYXBwLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuL2FwcC5jb25maWcnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGxvYWQ6IFthcHBDb25maWddXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQXBwQ29uZmlnU2VydmljZV0sXG4gICAgZXhwb3J0czogW0FwcENvbmZpZ1NlcnZpY2VdLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ01vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjb25maWc6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnU2VydmljZS5nZXQ8b2JqZWN0PignYXBwJyk7XG4gICAgfVxuXG4gICAgZ2V0IGhvc3QoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmxpc3Rlbi5ob3N0O1xuICAgIH1cblxuICAgIGdldCBwb3J0KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5saXN0ZW4ucG9ydFxuICAgIH1cbn0iLCJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5jb25zdCBjb25maWdzID0ge1xuICAgIGRldmVsb3BtZW50OiB7XG4gICAgICAgIGxpc3Rlbjoge1xuICAgICAgICAgICAgaG9zdDogJzEyNy4wLjAuMScsXG4gICAgICAgICAgICBwb3J0OiAzMjAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb2R1Y3Rpb246IHtcbiAgICAgICAgbGlzdGVuOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IDMyMDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcygnYXBwJywgKCkgPT4gY29uZmlnc1twcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXSk7IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlJztcblxuaW1wb3J0IGRhdGFiYXNlQ29uZmlnIGZyb20gJy4vZGF0YWJhc2UuY29uZmlnJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBsb2FkOiBbZGF0YWJhc2VDb25maWddXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbRGF0YWJhc2VDb25maWdTZXJ2aWNlXSxcbiAgICBleHBvcnRzOiBbRGF0YWJhc2VDb25maWdTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlQ29uZmlnTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0PG9iamVjdD4oJ2RhdGFiYXNlJyk7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudXJsO1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zKCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zXG4gICAgfVxufSIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgZGV2ZWxvcG1lbnQ6IHtcbiAgICAgICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0J1xuICAgIH0sXG4gICAgcHJvZHVjdGlvbjoge1xuICAgICAgICB1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NoYXQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdkYXRhYmFzZScsICgpID0+IGNvbmZpZ3NbcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J10pOyIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAgeyBkYXRhYmFzZVByb3ZpZGVycyB9IGZyb20gJy4vZGF0YWJhc2UucHJvdmlkZXJzJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnTW9kdWxlIH0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcubW9kdWxlXCI7XG5pbXBvcnQge0RhdGFiYXNlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZS9kYXRhYmFzZS5jb25maWcuc2VydmljZVwiO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VDb25maWdNb2R1bGVdLFxuICAgIHByb3ZpZGVyczogWy4uLmRhdGFiYXNlUHJvdmlkZXJzXSxcbiAgICBleHBvcnRzOiBbLi4uZGF0YWJhc2VQcm92aWRlcnNdXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VNb2R1bGUge30iLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBkYXRhYmFzZVByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6ICdEQVRBQkFTRV9DT05ORUNUSU9OJyxcbiAgICAgICAgdXNlRmFjdG9yeTogKGRhdGFiYXNlQ29uZmlnU2VydmljZTogRGF0YWJhc2VDb25maWdTZXJ2aWNlKTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25maWcgPj4+PiAnLCBkYXRhYmFzZUNvbmZpZ1NlcnZpY2UuY29uZmlnKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvbmVzdCcpO1xuICAgICAgICB9LFxuICAgICAgICBpbmplY3Q6IFtEYXRhYmFzZUNvbmZpZ1NlcnZpY2VdXG4gICAgfVxuXTsiLCJpbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UnO1xuXG5kZWNsYXJlIGNvbnN0IG1vZHVsZTogYW55O1xuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG5cdGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUsIHsgY29yczogdHJ1ZSB9KTtcblxuXHRjb25zdCBhcHBDb25maWc6IEFwcENvbmZpZ1NlcnZpY2UgPSBhcHAuZ2V0KCdBcHBDb25maWdTZXJ2aWNlJyk7XG5cblx0Y29uc29sZS5sb2coYXBwQ29uZmlnLmxpc3Rlbik7XG5cblx0YXdhaXQgYXBwLmxpc3RlbihhcHBDb25maWcubGlzdGVuLnBvcnQpO1xuXG5cdGlmIChtb2R1bGUuaG90KSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoKTtcblx0XHRtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4gYXBwLmNsb3NlKCkpO1xuXHR9XG59XG5cbmJvb3RzdHJhcCgpO1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciwgUG9zdCwgUmVxfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlcXVlc3R9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3VzZXIuZW50aXR5JztcblxuQENvbnRyb2xsZXIoJ2F1dGgnKVxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICAgIEBQb3N0KCdzaWduaW4nKVxuICAgIGFzeW5jIHNpZ25pbihAUmVxKCkgcmVxOiBSZXF1ZXN0KTogUHJvbWlzZTxVc2VyPiB7XG5cbiAgICB9XG5cbiAgICBAUG9zdCgnc2lnbnVwJylcbiAgICBhc3luYyBzaWdudXAoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5zaWdudXAocmVxLmJvZHkpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcblxuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgY29udHJvbGxlcnM6IFtBdXRoQ29udHJvbGxlcl0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhTZXJ2aWNlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBhc3luYyBzaWdudXAoYXV0aERhdGE6IG9iamVjdCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgnYXNkYWZzZGZzZGYnKSlcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBSZXEsIFJlcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2VudGl0aWVzL3VzZXIuZW50aXR5JztcblxuQENvbnRyb2xsZXIoJ3VzZXJzJylcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHt9XG5cbiAgICBAR2V0KCdtZScpXG4gICAgYXN5bmMgZ2V0TWUoQFJlcSgpIHJlcTogUmVxdWVzdCk6IFByb21pc2U8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2Vyc1NlcnZpY2UuZ2V0TWUocmVxLnF1ZXJ5LnRva2VuKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBVc2Vyc0NvbnRyb2xsZXIgfSBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gICAgY29udHJvbGxlcnM6IFtVc2Vyc0NvbnRyb2xsZXJdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBVc2Vyc1NlcnZpY2VcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlcnNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcblxuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBhc3luYyBnZXRNZSh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge3Jlc29sdmUoJ21lJyl9KTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3QtbWlkZGxld2FyZXMvbW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=