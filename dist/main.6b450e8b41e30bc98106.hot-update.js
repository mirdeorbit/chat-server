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
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const database_config_service_1 = __webpack_require__(/*! ../config/database/database.config.service */ "./src/config/database/database.config.service.ts");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (databaseConfigService) => {
            console.log('config >>>> ', databaseConfigService.config);
            return mongoose.connect('mongodb://localhost/nest');
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBcUM7QUFDckMsNEpBQW1GO0FBRXRFLHlCQUFpQixHQUFHO0lBQzdCO1FBQ0ksT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixVQUFVLEVBQUUsQ0FBQyxxQkFBNEMsRUFBNEIsRUFBRTtZQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUxRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsTUFBTSxFQUFFLENBQUMsK0NBQXFCLENBQUM7S0FDbEM7Q0FDSixDQUFDIiwiZmlsZSI6Im1haW4uNmI0NTBlOGI0MWUzMGJjOTgxMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IERhdGFiYXNlQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9jb25maWcvZGF0YWJhc2UvZGF0YWJhc2UuY29uZmlnLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLFxuICAgICAgICB1c2VGYWN0b3J5OiAoZGF0YWJhc2VDb25maWdTZXJ2aWNlOiBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmZpZyA+Pj4+ICcsIGRhdGFiYXNlQ29uZmlnU2VydmljZS5jb25maWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9uZXN0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogW0RhdGFiYXNlQ29uZmlnU2VydmljZV1cbiAgICB9XG5dOyJdLCJzb3VyY2VSb290IjoiIn0=