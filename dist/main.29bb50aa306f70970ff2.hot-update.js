exports.id = "main";
exports.modules = {

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
const chats_module_1 = __webpack_require__(/*! ./chats/chats.module */ "./src/modules/api/chats/chats.module.ts");
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
            auth_module_1.AuthModule,
            chats_module_1.ChatsModule
        ]
    })
], ApiModule);
exports.ApiModule = ApiModule;


/***/ }),

/***/ "./src/modules/api/chats/chats.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/api/chats/chats.controller.ts ***!
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
const express_1 = __webpack_require__(/*! express */ "express");
let ChatsController = class ChatsController {
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    async getMe(req) {
        return this.chatsService.getMe(req.query.token);
    }
};
__decorate([
    common_1.Get('me'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ChatsController.prototype, "getMe", null);
ChatsController = __decorate([
    common_1.Controller('chats'),
    __metadata("design:paramtypes", [typeof (_c = typeof ChatsService !== "undefined" && ChatsService) === "function" ? _c : Object])
], ChatsController);
exports.ChatsController = ChatsController;


/***/ }),

/***/ "./src/modules/api/chats/chats.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/api/chats/chats.module.ts ***!
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
const database_module_1 = __webpack_require__(/*! ../../../database/database.module */ "./src/database/database.module.ts");
const chats_controller_1 = __webpack_require__(/*! ./chats.controller */ "./src/modules/api/chats/chats.controller.ts");
const chats_service_1 = __webpack_require__(/*! ./chats.service */ "./src/modules/api/chats/chats.service.ts");
let ChatsModule = class ChatsModule {
};
ChatsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [chats_controller_1.ChatsController],
        providers: [chats_service_1.ChatsService]
    })
], ChatsModule);
exports.ChatsModule = ChatsModule;


/***/ }),

/***/ "./src/modules/api/chats/chats.service.ts":
/*!************************************************!*\
  !*** ./src/modules/api/chats/chats.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
let ChatsService = class ChatsService {
    constructor(userModel, chatModel) {
        this.userModel = userModel;
        this.chatModel = chatModel;
    }
    async getMe(token) {
        return this.userModel.findOne({ token: token });
    }
};
ChatsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_MODEL)),
    __param(1, common_1.Inject(constants_1.CHAT_MODEL)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object])
], ChatsService);
exports.ChatsService = ChatsService;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvYXBpLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvY2hhdHMvY2hhdHMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvY2hhdHMvY2hhdHMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwaS9jaGF0cy9jaGF0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0U7QUFDeEUsaUdBQTREO0FBRTVELHlIQUFnRTtBQUVoRSxrSEFBbUQ7QUFDbkQsNkdBQWdEO0FBQ2hELGtIQUFtRDtBQUVuRCxtSUFBcUU7QUFZckUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUNsQixTQUFTLENBQUMsUUFBNEI7UUFDbEMseUJBQWdCLENBQUMsU0FBUyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDaEYsUUFBUSxDQUFDLEtBQUssQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFMWSxTQUFTO0lBVnJCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRTtZQUNMLG1DQUFlO1lBQ2YsZ0NBQWM7WUFDZCwwQkFBVztZQUNYLHdCQUFVO1lBQ1YsMEJBQVc7U0FDZDtLQUNKLENBQUM7R0FFVyxTQUFTLENBS3JCO0FBTFksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnRCLDZFQUEyRDtBQUUzRCxnRUFBNEM7QUFJNUMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUN4QixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFHM0QsS0FBSyxDQUFDLEtBQUssQ0FBUSxHQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFIRztJQURDLFlBQUcsQ0FBQyxJQUFJLENBQUM7SUFDRyx1QkFBRyxFQUFFOzt5REFBTSxpQkFBTyxvQkFBUCxpQkFBTzt3REFBRyxPQUFPLG9CQUFQLE9BQU87NENBRXhDO0FBTlEsZUFBZTtJQUQzQixtQkFBVSxDQUFDLE9BQU8sQ0FBQzt5REFFMkIsWUFBWSxvQkFBWixZQUFZO0dBRDlDLGVBQWUsQ0FPM0I7QUFQWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjVCLDZFQUF3QztBQUV4Qyw0SEFBbUU7QUFFbkUsd0hBQXFEO0FBQ3JELCtHQUErQztBQVEvQyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUc7QUFBZCxXQUFXO0lBTnZCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDekIsV0FBVyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUM5QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzVCLENBQUM7R0FFVyxXQUFXLENBQUc7QUFBZCxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J4QixtRUFBaUM7QUFDakMsNkVBQW9EO0FBR3BELDhGQUE0RDtBQUc1RCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3JCLFlBRVksU0FBc0IsRUFFdEIsU0FBc0I7UUFGdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUV0QixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBQy9CLENBQUM7SUFFSixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDSjtBQVhZLFlBQVk7SUFEeEIsbUJBQVUsRUFBRTtJQUdKLDBCQUFNLENBQUMsc0JBQVUsQ0FBQztJQUVsQiwwQkFBTSxDQUFDLHNCQUFVLENBQUM7eURBREEsZ0JBQUssb0JBQUwsZ0JBQUssb0RBRUwsZ0JBQUssb0JBQUwsZ0JBQUs7R0FMbkIsWUFBWSxDQVd4QjtBQVhZLG9DQUFZIiwiZmlsZSI6Im1haW4uMjliYjUwYWEzMDZmNzA5NzBmZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSwgTmVzdE1vZHVsZSwgTWlkZGxld2FyZUNvbnN1bWVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTW9yZ2FuTWlkZGxld2FyZSB9IGZyb20gJ0BuZXN0LW1pZGRsZXdhcmVzL21vcmdhbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IENoYXRzTW9kdWxlIH0gZnJvbSAnLi9jaGF0cy9jaGF0cy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwL2FwcC5jb25maWcubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBDb25maWdNb2R1bGUsXG4gICAgICAgIERhdGFiYXNlTW9kdWxlLFxuICAgICAgICBVc2Vyc01vZHVsZSxcbiAgICAgICAgQXV0aE1vZHVsZSxcbiAgICAgICAgQ2hhdHNNb2R1bGVcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gICAgY29uZmlndXJlKGNvbnN1bWVyOiBNaWRkbGV3YXJlQ29uc3VtZXIpIHtcbiAgICAgICAgTW9yZ2FuTWlkZGxld2FyZS5jb25maWd1cmUoJzpkYXRlIC0gOm1ldGhvZCAtIDp1cmwgLSA6cmVzcG9uc2UtdGltZSAtIDpzdGF0dXMnKTtcbiAgICAgICAgY29uc3VtZXIuYXBwbHkoTW9yZ2FuTWlkZGxld2FyZSkuZm9yUm91dGVzKCcqJyk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUmVxLCBSZXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9lbnRpdGllcy91c2VyLmVudGl0eSc7XG5cbkBDb250cm9sbGVyKCdjaGF0cycpXG5leHBvcnQgY2xhc3MgQ2hhdHNDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlKSB7fVxuXG4gICAgQEdldCgnbWUnKVxuICAgIGFzeW5jIGdldE1lKEBSZXEoKSByZXE6IFJlcXVlc3QpOiBQcm9taXNlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhdHNTZXJ2aWNlLmdldE1lKHJlcS5xdWVyeS50b2tlbik7XG4gICAgfVxufSIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgRGF0YWJhc2VNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9kYXRhYmFzZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDaGF0c0NvbnRyb2xsZXIgfSBmcm9tICcuL2NoYXRzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0cy5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGFiYXNlTW9kdWxlXSxcbiAgICBjb250cm9sbGVyczogW0NoYXRzQ29udHJvbGxlcl0sXG4gICAgcHJvdmlkZXJzOiBbQ2hhdHNTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXRzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENoYXQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2NoYXQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVTRVJfTU9ERUwsIENIQVRfTU9ERUwgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhdHNTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChVU0VSX01PREVMKVxuICAgICAgICBwcml2YXRlIHVzZXJNb2RlbDogTW9kZWw8VXNlcj4sXG4gICAgICAgIEBJbmplY3QoQ0hBVF9NT0RFTClcbiAgICAgICAgcHJpdmF0ZSBjaGF0TW9kZWw6IE1vZGVsPENoYXQ+LFxuICAgICkge31cblxuICAgIGFzeW5jIGdldE1lKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlck1vZGVsLmZpbmRPbmUoe3Rva2VuOiB0b2tlbn0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9