exports.id = "main";
exports.modules = {

/***/ "./src/config/development/database.config.ts":
/*!***************************************************!*\
  !*** ./src/config/development/database.config.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));


/***/ }),

/***/ "fs":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBRTVDLGtCQUFlLG1CQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFLFNBQVM7SUFDZixHQUFHLEVBQUUsZ0NBQWdDO0lBQ3JDLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLElBQUk7SUFDYixtQkFBbUIsRUFBRSxJQUFJO0NBQzVCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uYTQ1ZTIxMTdmN2FkZGNiNjdjMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2RhdGFiYXNlJywgKCkgPT4gKHtcbiAgICB0eXBlOiAnbW9uZ29kYicsXG4gICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0JyxcbiAgICBhdXRvTG9hZEVudGl0aWVzOiB0cnVlLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAga2VlcENvbm5lY3Rpb25BbGl2ZTogdHJ1ZVxufSkpOyJdLCJzb3VyY2VSb290IjoiIn0=