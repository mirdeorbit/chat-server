exports.id = "main";
exports.modules = {

/***/ "./src/database/schemas/users.schema.ts":
/*!**********************************************!*\
  !*** ./src/database/schemas/users.schema.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.UsersSchema = new mongoose.Schema({
    email: String,
    password: String
});


/***/ }),

/***/ "./src/modules/api/users/users.providers.ts":
/*!**************************************************!*\
  !*** ./src/modules/api/users/users.providers.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = __webpack_require__(/*! ../../../database/schemas/users.schema */ "./src/database/schemas/users.schema.ts");
const constants_1 = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
exports.UsersProviders = [
    {
        provide: constants_1.USER_MODEL,
        useFactory: (connection) => connection.model('User', users_schema_1.UsersSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2Uvc2NoZW1hcy91c2Vycy5zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBpL3VzZXJzL3VzZXJzLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQXFDO0FBRXhCLG1CQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzNDLEtBQUssRUFBRSxNQUFNO0lBQ2IsUUFBUSxFQUFFLE1BQU07Q0FDbkIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKSCxtSUFBcUU7QUFFckUsOEZBQXFFO0FBRXhELHNCQUFjLEdBQUc7SUFDMUI7UUFDSSxPQUFPLEVBQUUsc0JBQVU7UUFDbkIsVUFBVSxFQUFFLENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsMEJBQVcsQ0FBQztRQUM3RSxNQUFNLEVBQUUsQ0FBQywrQkFBbUIsQ0FBQztLQUNoQztDQUNKLENBQUMiLCJmaWxlIjoibWFpbi44MjNmZDFjOWJiOWRhNzcyZjdhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgY29uc3QgVXNlcnNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBlbWFpbDogU3RyaW5nLFxuICAgIHBhc3N3b3JkOiBTdHJpbmdcbn0pOyIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBVc2Vyc1NjaGVtYSB9IGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL3NjaGVtYXMvdXNlcnMuc2NoZW1hJztcblxuaW1wb3J0IHsgVVNFUl9NT0RFTCwgREFUQUJBU0VfQ09OTkVDVElPTiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBVc2Vyc1Byb3ZpZGVycyA9IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IFVTRVJfTU9ERUwsXG4gICAgICAgIHVzZUZhY3Rvcnk6IChjb25uZWN0aW9uOiBDb25uZWN0aW9uKSA9PiBjb25uZWN0aW9uLm1vZGVsKCdVc2VyJywgVXNlcnNTY2hlbWEpLFxuICAgICAgICBpbmplY3Q6IFtEQVRBQkFTRV9DT05ORUNUSU9OXSxcbiAgICB9XG5dOyJdLCJzb3VyY2VSb290IjoiIn0=