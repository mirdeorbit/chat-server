exports.id = "main";
exports.modules = {

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: DATABASE_CONNECTION, USER_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATABASE_CONNECTION", function() { return DATABASE_CONNECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_MODEL", function() { return USER_MODEL; });
const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
const USER_MODEL = 'USER_MODEL';

/***/ }),

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
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: (databaseConfigService) => {
            return mongoose.connect(databaseConfigService.url, databaseConfigService.options);
        },
        inject: [database_config_service_1.DatabaseConfigService]
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhYmFzZS9kYXRhYmFzZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNBLGdDOzs7Ozs7Ozs7Ozs7OztBQ0RQLGlFQUFxQztBQUNyQyw0SkFBbUY7QUFFbkYsd0ZBQW1EO0FBRXRDLHlCQUFpQixHQUFHO0lBQzdCO1FBQ0ksT0FBTyxFQUFFLCtCQUFtQjtRQUM1QixVQUFVLEVBQUUsQ0FBQyxxQkFBNEMsRUFBNEIsRUFBRTtZQUNuRixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RGLENBQUM7UUFDRCxNQUFNLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztLQUNsQztDQUNKLENBQUMiLCJmaWxlIjoibWFpbi45NWY1NDcwZTVmYjkxYjdmNGFiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERBVEFCQVNFX0NPTk5FQ1RJT04gPSAnREFUQUJBU0VfQ09OTkVDVElPTic7XG5leHBvcnQgY29uc3QgVVNFUl9NT0RFTCA9ICdVU0VSX01PREVMJzsiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vY29uZmlnL2RhdGFiYXNlL2RhdGFiYXNlLmNvbmZpZy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IERBVEFCQVNFX0NPTk5FQ1RJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2VQcm92aWRlcnMgPSBbXG4gICAge1xuICAgICAgICBwcm92aWRlOiBEQVRBQkFTRV9DT05ORUNUSU9OLFxuICAgICAgICB1c2VGYWN0b3J5OiAoZGF0YWJhc2VDb25maWdTZXJ2aWNlOiBEYXRhYmFzZUNvbmZpZ1NlcnZpY2UpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QoZGF0YWJhc2VDb25maWdTZXJ2aWNlLnVybCwgZGF0YWJhc2VDb25maWdTZXJ2aWNlLm9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBpbmplY3Q6IFtEYXRhYmFzZUNvbmZpZ1NlcnZpY2VdXG4gICAgfVxuXTsiXSwic291cmNlUm9vdCI6IiJ9