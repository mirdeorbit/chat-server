exports.id = "main";
exports.modules = {

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
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
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRootAsync({
                imports: [AppConfigModule],
                inject: [AppConfigService],
                useFactory: async (config) => config.database
            })]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBd0M7QUFDeEMsZ0ZBQWdEO0FBV2hELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRztBQUFqQixjQUFjO0lBUjFCLGVBQU0sQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDLHVCQUFhLENBQUMsWUFBWSxDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzFCLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMxQixVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQXdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2FBQ2xFLENBQUMsQ0FBQztLQUNOLENBQUM7R0FFVyxjQUFjLENBQUc7QUFBakIsd0NBQWMiLCJmaWxlIjoibWFpbi5jMzg2ZTU1N2U2ZDg0NDdjNmM3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5cblxuQE1vZHVsZSh7XG4gICAgaW1wb3J0czogW1R5cGVPcm1Nb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgICAgaW1wb3J0czogW0FwcENvbmZpZ01vZHVsZV0sXG4gICAgICAgIGluamVjdDogW0FwcENvbmZpZ1NlcnZpY2VdLFxuICAgICAgICB1c2VGYWN0b3J5OiBhc3luYyAoY29uZmlnOiBBcHBDb25maWdTZXJ2aWNlKSA9PiBjb25maWcuZGF0YWJhc2VcbiAgICB9KV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1vZHVsZSB7fSJdLCJzb3VyY2VSb290IjoiIn0=