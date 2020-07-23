exports.id = "main";
exports.modules = {

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
const chats_providers_1 = __webpack_require__(/*! ./chats.providers */ "./src/modules/api/chats/chats.providers.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/api/users/users.module.ts");
let ChatsModule = class ChatsModule {
};
ChatsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, users_module_1.UsersModule],
        controllers: [chats_controller_1.ChatsController],
        providers: [
            chats_service_1.ChatsService,
            ...chats_providers_1.chatProviders
        ]
    })
], ChatsModule);
exports.ChatsModule = ChatsModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvY2hhdHMvY2hhdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFFeEMsNEhBQW1FO0FBRW5FLHdIQUFxRDtBQUNyRCwrR0FBK0M7QUFDL0MscUhBQWtEO0FBQ2xELG1IQUFvRDtBQVdwRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUc7QUFBZCxXQUFXO0lBVHZCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQVcsQ0FBQztRQUN0QyxXQUFXLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzlCLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1lBQ1osR0FBRywrQkFBYTtTQUNuQjtLQUNKLENBQUM7R0FFVyxXQUFXLENBQUc7QUFBZCxrQ0FBVyIsImZpbGUiOiJtYWluLjVmODNlZmJjODNlMzFlMDZiZDk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgQ2hhdHNDb250cm9sbGVyIH0gZnJvbSAnLi9jaGF0cy5jb250cm9sbGVyJztcbmltcG9ydCB7IENoYXRzU2VydmljZSB9IGZyb20gJy4vY2hhdHMuc2VydmljZSc7XG5pbXBvcnQgeyBjaGF0UHJvdmlkZXJzIH0gZnJvbSAnLi9jaGF0cy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VNb2R1bGUsIFVzZXJzTW9kdWxlXSxcbiAgICBjb250cm9sbGVyczogW0NoYXRzQ29udHJvbGxlcl0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENoYXRzU2VydmljZSxcbiAgICAgICAgLi4uY2hhdFByb3ZpZGVyc1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGF0c01vZHVsZSB7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==