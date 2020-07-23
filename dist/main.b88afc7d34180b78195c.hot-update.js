exports.id = "main";
exports.modules = {

/***/ "./src/database/schemas/chats.schema.ts":
/*!**********************************************!*\
  !*** ./src/database/schemas/chats.schema.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.ChatsSchema = new mongoose.Schema({
    title: String,
    participantIds: [Number],
});


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
const chats_providers_1 = __webpack_require__(/*! ./chats.providers */ "./src/modules/api/chats/chats.providers.ts");
let ChatsModule = class ChatsModule {
};
ChatsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [chats_controller_1.ChatsController],
        providers: [
            chats_service_1.ChatsService,
            ...chats_providers_1.chatProviders
        ]
    })
], ChatsModule);
exports.ChatsModule = ChatsModule;


/***/ }),

/***/ "./src/modules/api/chats/chats.providers.ts":
/*!**************************************************!*\
  !*** ./src/modules/api/chats/chats.providers.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const chats_schema_1 = __webpack_require__(/*! ../../../database/schemas/chats.schema */ "./src/database/schemas/chats.schema.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
exports.chatProviders = [
    {
        provide: constants_1.CHAT_MODEL,
        useFactory: (connection) => connection.model('Chat', chats_schema_1.ChatsSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    },
    {
        provide: constants_1.USER_MODEL,
        useFactory: (connection) => connection.model('User', chats_schema_1.ChatsSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    },
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2Uvc2NoZW1hcy9jaGF0cy5zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL2NoYXRzL2NoYXRzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvY2hhdHMvY2hhdHMucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBcUM7QUFFeEIsbUJBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDM0MsS0FBSyxFQUFFLE1BQU07SUFDYixjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUM7Q0FDM0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMSCw2RUFBd0M7QUFFeEMsNEhBQW1FO0FBRW5FLHdIQUFxRDtBQUNyRCwrR0FBK0M7QUFDL0MscUhBQWtEO0FBV2xELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRztBQUFkLFdBQVc7SUFUdkIsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUN6QixXQUFXLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzlCLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1lBQ1osR0FBRywrQkFBYTtTQUNuQjtLQUNKLENBQUM7R0FFVyxXQUFXLENBQUc7QUFBZCxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ4QixtSUFBcUU7QUFFckUsOEZBQWlGO0FBRXBFLHFCQUFhLEdBQUc7SUFDekI7UUFDSSxPQUFPLEVBQUUsc0JBQVU7UUFDbkIsVUFBVSxFQUFFLENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsMEJBQVcsQ0FBQztRQUM3RSxNQUFNLEVBQUUsQ0FBQywrQkFBbUIsQ0FBQztLQUNoQztJQUNEO1FBQ0ksT0FBTyxFQUFFLHNCQUFVO1FBQ25CLFVBQVUsRUFBRSxDQUFDLFVBQXNCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDBCQUFXLENBQUM7UUFDN0UsTUFBTSxFQUFFLENBQUMsK0JBQW1CLENBQUM7S0FDaEM7Q0FDSixDQUFDIiwiZmlsZSI6Im1haW4uYjg4YWZjN2QzNDE4MGI3ODE5NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGNvbnN0IENoYXRzU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBwYXJ0aWNpcGFudElkczogW051bWJlcl0sXG59KTsiLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IERhdGFiYXNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlJztcblxuaW1wb3J0IHsgQ2hhdHNDb250cm9sbGVyIH0gZnJvbSAnLi9jaGF0cy5jb250cm9sbGVyJztcbmltcG9ydCB7IENoYXRzU2VydmljZSB9IGZyb20gJy4vY2hhdHMuc2VydmljZSc7XG5pbXBvcnQgeyBjaGF0UHJvdmlkZXJzIH0gZnJvbSAnLi9jaGF0cy5wcm92aWRlcnMnO1xuXG5ATW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRGF0YWJhc2VNb2R1bGVdLFxuICAgIGNvbnRyb2xsZXJzOiBbQ2hhdHNDb250cm9sbGVyXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2hhdHNTZXJ2aWNlLFxuICAgICAgICAuLi5jaGF0UHJvdmlkZXJzXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXRzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgQ2hhdHNTY2hlbWEgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9zY2hlbWFzL2NoYXRzLnNjaGVtYSc7XG5cbmltcG9ydCB7IENIQVRfTU9ERUwsIFVTRVJfTU9ERUwsIERBVEFCQVNFX0NPTk5FQ1RJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgY2hhdFByb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IENIQVRfTU9ERUwsXG4gICAgICAgIHVzZUZhY3Rvcnk6IChjb25uZWN0aW9uOiBDb25uZWN0aW9uKSA9PiBjb25uZWN0aW9uLm1vZGVsKCdDaGF0JywgQ2hhdHNTY2hlbWEpLFxuICAgICAgICBpbmplY3Q6IFtEQVRBQkFTRV9DT05ORUNUSU9OXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcHJvdmlkZTogVVNFUl9NT0RFTCxcbiAgICAgICAgdXNlRmFjdG9yeTogKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+IGNvbm5lY3Rpb24ubW9kZWwoJ1VzZXInLCBDaGF0c1NjaGVtYSksXG4gICAgICAgIGluamVjdDogW0RBVEFCQVNFX0NPTk5FQ1RJT05dLFxuICAgIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=