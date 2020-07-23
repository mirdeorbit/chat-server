exports.id = "main";
exports.modules = {

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
        return this.config.host;
    }
    get port() {
        return this.config.port;
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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9hcHAvYXBwLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUE0QztBQUM1Qyw2RUFBK0M7QUFHL0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFHekIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBUyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7SUFDM0IsQ0FBQztDQUNKO0FBZFksZ0JBQWdCO0lBRDVCLG1CQUFVLEVBQUU7eURBSTBCLHNCQUFhLG9CQUFiLHNCQUFhO0dBSHZDLGdCQUFnQixDQWM1QjtBQWRZLDRDQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDSjdCLDZFQUE0QztBQUU1QyxNQUFNLE9BQU8sR0FBRztJQUNaLFdBQVcsRUFBRTtRQUNULE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxJQUFJO1NBQ2I7S0FDSjtJQUNELFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxJQUFJO1NBQ2I7S0FDSjtDQUNKO0FBRUQsa0JBQWUsbUJBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQW9CLElBQUksS0FBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmFhOTA5ODZlMjU2M2IxZDIyNjY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0PG9iamVjdD4oJ2FwcCcpO1xuICAgIH1cblxuICAgIGdldCBob3N0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5ob3N0O1xuICAgIH1cblxuICAgIGdldCBwb3J0KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wb3J0XG4gICAgfVxufSIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgZGV2ZWxvcG1lbnQ6IHtcbiAgICAgICAgbGlzdGVuOiB7XG4gICAgICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgICAgIHBvcnQ6IDMyMDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvZHVjdGlvbjoge1xuICAgICAgICBsaXN0ZW46IHtcbiAgICAgICAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgICAgICAgcG9ydDogMzIwMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdhcHAnLCAoKSA9PiBjb25maWdzW3Byb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCddKTsiXSwic291cmNlUm9vdCI6IiJ9