exports.id = "main";
exports.modules = {

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
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvY2hhdHMvY2hhdHMucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxtSUFBcUU7QUFFckUsOEZBQWlGO0FBRXBFLHFCQUFhLEdBQUc7SUFDekI7UUFDSSxPQUFPLEVBQUUsc0JBQVU7UUFDbkIsVUFBVSxFQUFFLENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsMEJBQVcsQ0FBQztRQUM3RSxNQUFNLEVBQUUsQ0FBQywrQkFBbUIsQ0FBQztLQUNoQztDQUNKLENBQUMiLCJmaWxlIjoibWFpbi5mZTFhYWQwNWMwYjMyNDU5YWIyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IENoYXRzU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2Uvc2NoZW1hcy9jaGF0cy5zY2hlbWEnO1xuXG5pbXBvcnQgeyBDSEFUX01PREVMLCBVU0VSX01PREVMLCBEQVRBQkFTRV9DT05ORUNUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGNoYXRQcm92aWRlcnMgPSBbXG4gICAge1xuICAgICAgICBwcm92aWRlOiBDSEFUX01PREVMLFxuICAgICAgICB1c2VGYWN0b3J5OiAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT4gY29ubmVjdGlvbi5tb2RlbCgnQ2hhdCcsIENoYXRzU2NoZW1hKSxcbiAgICAgICAgaW5qZWN0OiBbREFUQUJBU0VfQ09OTkVDVElPTl0sXG4gICAgfVxuXTsiXSwic291cmNlUm9vdCI6IiJ9