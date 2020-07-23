exports.id = "main";
exports.modules = {

/***/ "./src/database/database.providers.ts":
/*!********************************************!*\
  !*** ./src/database/database.providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/index.js");
const app_config_module_1 = __webpack_require__(/*! ../config/app/app.config.module */ "./src/config/app/app.config.module.ts");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [app_config_module_1.AppConfigModule],
        useFactory: (config) => {
            console.log('config >>>> ', config);
            return mongoose.connect('mongodb://localhost/nest');
        }
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RkFBcUM7QUFDckMsZ0lBQWtFO0FBRXJELHlCQUFpQixHQUFHO0lBQzdCO1FBQ0ksT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixNQUFNLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1FBQ3pCLFVBQVUsRUFBRSxDQUFDLE1BQXVCLEVBQTRCLEVBQUU7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUNKO0NBQ0osQ0FBQyIsImZpbGUiOiJtYWluLjYyYmFiNDg0ZmMzMDYyMmVkY2UxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBBcHBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvYXBwL2FwcC5jb25maWcubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLFxuICAgICAgICBpbmplY3Q6IFtBcHBDb25maWdNb2R1bGVdXG4gICAgICAgIHVzZUZhY3Rvcnk6IChjb25maWc6IEFwcENvbmZpZ01vZHVsZSk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZmlnID4+Pj4gJywgY29uZmlnKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvbmVzdCcpO1xuICAgICAgICB9XG4gICAgfVxuXTsiXSwic291cmNlUm9vdCI6IiJ9