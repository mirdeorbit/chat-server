exports.id = "main";
exports.modules = {

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
        const currentUser = this.userModel.findOne({ token: token });
        if (currentUser) {
            return this.chatModel.find({ participantIds: currentUser._id });
        }
        else {
            return [];
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcGkvY2hhdHMvY2hhdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUFpQztBQUNqQyw2RUFBb0Q7QUFHcEQsOEZBQTREO0FBRzVELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDckIsWUFFWSxTQUFzQixFQUV0QixTQUFzQjtRQUZ0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBRXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFDL0IsQ0FBQztJQUVKLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBYTtRQUNyQixNQUFNLFdBQVcsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRTVELElBQUksV0FBVyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7Q0FDSjtBQWpCWSxZQUFZO0lBRHhCLG1CQUFVLEVBQUU7SUFHSiwwQkFBTSxDQUFDLHNCQUFVLENBQUM7SUFFbEIsMEJBQU0sQ0FBQyxzQkFBVSxDQUFDO3lEQURBLGdCQUFLLG9CQUFMLGdCQUFLLG9EQUVMLGdCQUFLLG9CQUFMLGdCQUFLO0dBTG5CLFlBQVksQ0FpQnhCO0FBakJZLG9DQUFZIiwiZmlsZSI6Im1haW4uMDc0YTA3ZmMzZTVmMjgzMDMwNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY2hhdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVVNFUl9NT0RFTCwgQ0hBVF9NT0RFTCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGF0c1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KFVTRVJfTU9ERUwpXG4gICAgICAgIHByaXZhdGUgdXNlck1vZGVsOiBNb2RlbDxVc2VyPixcbiAgICAgICAgQEluamVjdChDSEFUX01PREVMKVxuICAgICAgICBwcml2YXRlIGNoYXRNb2RlbDogTW9kZWw8Q2hhdD4sXG4gICAgKSB7fVxuXG4gICAgYXN5bmMgZ2V0TWUodG9rZW46IHN0cmluZyk6IFByb21pc2U8Q2hhdFtdPiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gIHRoaXMudXNlck1vZGVsLmZpbmRPbmUoe3Rva2VuOiB0b2tlbn0pO1xuXG4gICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhdE1vZGVsLmZpbmQoe3BhcnRpY2lwYW50SWRzOiBjdXJyZW50VXNlci5faWR9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9