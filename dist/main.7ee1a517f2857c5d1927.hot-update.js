exports.id = "main";
exports.modules = {

/***/ "./src/config/database/database.config.ts":
/*!************************************************!*\
  !*** ./src/config/database/database.config.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configs = {
    development: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true
        }
    },
    production: {
        url: 'mongodb://localhost:27017/chat'
    }
};
exports.default = config_1.registerAs('database', () => configs["development" || false]);


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRDO0FBRTVDLE1BQU0sT0FBTyxHQUFHO0lBQ1osV0FBVyxFQUFFO1FBQ1QsR0FBRyxFQUFFLGdDQUFnQztRQUNyQyxPQUFPLEVBQUU7WUFDTCxlQUFlLEVBQUUsSUFBSTtTQUN4QjtLQUNKO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLGdDQUFnQztLQUN4QztDQUNKO0FBRUQsa0JBQWUsbUJBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQW9CLElBQUksS0FBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLjdlZTFhNTE3ZjI4NTdjNWQxOTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5jb25zdCBjb25maWdzID0ge1xuICAgIGRldmVsb3BtZW50OiB7XG4gICAgICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9kdWN0aW9uOiB7XG4gICAgICAgIHVybDogJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY2hhdCdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2RhdGFiYXNlJywgKCkgPT4gY29uZmlnc1twcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXSk7Il0sInNvdXJjZVJvb3QiOiIifQ==