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
const fs_1 = __webpack_require__(/*! fs */ "fs");
console.log(fs_1.readdirSync('dist'));
exports.default = config_1.registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50L2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBQzVDLGlEQUFpQztBQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUdqQyxrQkFBZSxtQkFBVSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLElBQUksRUFBRSxTQUFTO0lBQ2YsR0FBRyxFQUFFLGdDQUFnQztJQUNyQyxnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsbUJBQW1CLEVBQUUsSUFBSTtDQUM1QixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLjU0YTE1Nzk4MDE1ZmYxNWQwN2M1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5cbmNvbnNvbGUubG9nKHJlYWRkaXJTeW5jKCdkaXN0JykpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2RhdGFiYXNlJywgKCkgPT4gKHtcbiAgICB0eXBlOiAnbW9uZ29kYicsXG4gICAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jaGF0JyxcbiAgICBhdXRvTG9hZEVudGl0aWVzOiB0cnVlLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAga2VlcENvbm5lY3Rpb25BbGl2ZTogdHJ1ZVxufSkpOyJdLCJzb3VyY2VSb290IjoiIn0=