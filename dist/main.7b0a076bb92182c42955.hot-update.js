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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQXdFO0FBQ3hFLGlHQUE0RDtBQUU1RCxxSEFBNEQ7QUFFNUQsc0hBQTJEO0FBQzNELGlIQUF3RDtBQUV4RCwrSEFBaUU7QUFXakUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUNsQixTQUFTLENBQUMsUUFBNEI7UUFDbEMseUJBQWdCLENBQUMsU0FBUyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDaEYsUUFBUSxDQUFDLEtBQUssQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFMWSxTQUFTO0lBVHJCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRTtZQUNMLG1DQUFlO1lBQ2YsZ0NBQWM7WUFDZCwwQkFBVztZQUNYLHdCQUFVO1NBQ2I7S0FDSixDQUFDO0dBRVcsU0FBUyxDQUtyQjtBQUxZLDhCQUFTIiwiZmlsZSI6Im1haW4uN2IwYTA3NmJiOTIxODJjNDI5NTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSwgTmVzdE1vZHVsZSwgTWlkZGxld2FyZUNvbnN1bWVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTW9yZ2FuTWlkZGxld2FyZSB9IGZyb20gJ0BuZXN0LW1pZGRsZXdhcmVzL21vcmdhbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi9kYXRhYmFzZS9kYXRhYmFzZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBVc2Vyc01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy91c2Vycy91c2Vycy5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi9jb25maWcvYXBwL2FwcC5jb25maWcubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBDb25maWdNb2R1bGUsXG4gICAgICAgIERhdGFiYXNlTW9kdWxlLFxuICAgICAgICBVc2Vyc01vZHVsZSxcbiAgICAgICAgQXV0aE1vZHVsZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgaW1wbGVtZW50cyBOZXN0TW9kdWxlIHtcbiAgICBjb25maWd1cmUoY29uc3VtZXI6IE1pZGRsZXdhcmVDb25zdW1lcikge1xuICAgICAgICBNb3JnYW5NaWRkbGV3YXJlLmNvbmZpZ3VyZSgnOmRhdGUgLSA6bWV0aG9kIC0gOnVybCAtIDpyZXNwb25zZS10aW1lIC0gOnN0YXR1cycpO1xuICAgICAgICBjb25zdW1lci5hcHBseShNb3JnYW5NaWRkbGV3YXJlKS5mb3JSb3V0ZXMoJyonKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==