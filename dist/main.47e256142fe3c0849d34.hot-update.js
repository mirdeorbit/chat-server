exports.id = "main";
exports.modules = {

/***/ "./src/config/app/app.config.module.ts":
/*!*********************************************!*\
  !*** ./src/config/app/app.config.module.ts ***!
  \*********************************************/
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
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_config_service_1 = __webpack_require__(/*! ./app.config.service */ "./src/config/app/app.config.service.ts");
const app_config_1 = __webpack_require__(/*! ./app.config */ "./src/config/app/app.config.ts");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [app_config_1.default]
            }),
        ],
        providers: [app_config_service_1.AppConfigService],
        exports: [app_config_service_1.AppConfigService],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcC9hcHAuY29uZmlnLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMsNkVBQThDO0FBRTlDLHVIQUF3RDtBQUV4RCwrRkFBcUM7QUFZckMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHO0FBQWxCLGVBQWU7SUFWM0IsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFO1lBQ0wscUJBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxDQUFDLG9CQUFTLENBQUM7YUFDcEIsQ0FBQztTQUNMO1FBQ0QsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMscUNBQWdCLENBQUM7S0FDOUIsQ0FBQztHQUVXLGVBQWUsQ0FBRztBQUFsQiwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7O0FDakI1QixpRUFBcUM7QUFDckMsZ0lBQWtFO0FBRXJELHlCQUFpQixHQUFHO0lBQzdCO1FBQ0ksT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixNQUFNLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1FBQ3pCLFVBQVUsRUFBRSxDQUFDLE1BQXVCLEVBQTRCLEVBQUU7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUNKO0NBQ0osQ0FBQyIsImZpbGUiOiJtYWluLjQ3ZTI1NjE0MmZlM2MwODQ5ZDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2FwcC5jb25maWcuc2VydmljZSc7XG5cbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi9hcHAuY29uZmlnJztcblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBsb2FkOiBbYXBwQ29uZmlnXVxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0FwcENvbmZpZ1NlcnZpY2VdLFxuICAgIGV4cG9ydHM6IFtBcHBDb25maWdTZXJ2aWNlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb25maWdNb2R1bGUge30iLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBBcHBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvYXBwL2FwcC5jb25maWcubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlUHJvdmlkZXJzID0gW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLFxuICAgICAgICBpbmplY3Q6IFtBcHBDb25maWdNb2R1bGVdLFxuICAgICAgICB1c2VGYWN0b3J5OiAoY29uZmlnOiBBcHBDb25maWdNb2R1bGUpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmZpZyA+Pj4+ICcsIGNvbmZpZyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L25lc3QnKTtcbiAgICAgICAgfVxuICAgIH1cbl07Il0sInNvdXJjZVJvb3QiOiIifQ==