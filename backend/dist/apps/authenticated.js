"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const middleware_1 = require("../middleware");
const base_1 = tslib_1.__importDefault(require("./base"));
const router_1 = tslib_1.__importDefault(require("../services/memo/router"));
base_1.default.use(middleware_1.auth);
base_1.default.use('/memo', router_1.default);
base_1.default.use(middleware_1.errorHandler);
exports.default = base_1.default;
//# sourceMappingURL=authenticated.js.map