exports.id = "main";
exports.modules = {

/***/ "./src/config/config.module.ts":
/*!*************************************!*\
  !*** ./src/config/config.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const config_service_1 = __webpack_require__(/*! ./config.service */ "./src/config/config.service.ts");
const database_config_1 = __webpack_require__(/*! ./development/database.config */ "./src/config/development/database.config.ts");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [database_config_1.default]
            })
        ],
        providers: [config_service_1.AppConfigService],
        exports: [config_service_1.AppConfigService]
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;


/***/ }),

/***/ "./src/config/development/database.config.ts":
/*!***************************************************!*\
  !*** ./src/config/development/database.config.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: ENOENT: no such file or directory, open '/var/www/chat-app/chat-server/app/src/config/development/database.config.ts'");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2NvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF3QztBQUN4Qyw2RUFBNkQ7QUFFN0QsdUdBQW9EO0FBRXBELGtJQUEyRDtBQVkzRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUc7QUFBbEIsZUFBZTtJQVYzQixlQUFNLENBQUM7UUFDSixPQUFPLEVBQUU7WUFDTCxxQkFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsSUFBSSxFQUFFLENBQUMseUJBQWMsQ0FBQzthQUN6QixDQUFDO1NBQ0w7UUFDRCxTQUFTLEVBQUUsQ0FBQyxpQ0FBZ0IsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyxpQ0FBZ0IsQ0FBQztLQUM5QixDQUFDO0dBRVcsZUFBZSxDQUFHO0FBQWxCLDBDQUFlIiwiZmlsZSI6Im1haW4uYTZiMjdiZDIwOTU1YzdhZTQxNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuaW1wb3J0IHsgQXBwQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuXG5pbXBvcnQgZGF0YWJhc2VDb25maWcgZnJvbSAnLi9kZXZlbG9wbWVudC9kYXRhYmFzZS5jb25maWcnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGxvYWQ6IFtkYXRhYmFzZUNvbmZpZ11cbiAgICAgICAgfSlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0FwcENvbmZpZ1NlcnZpY2VdLFxuICAgIGV4cG9ydHM6IFtBcHBDb25maWdTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ01vZHVsZSB7fSJdLCJzb3VyY2VSb290IjoiIn0=