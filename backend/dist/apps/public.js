"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const middleware_1 = require("../middleware");
const base_1 = tslib_1.__importDefault(require("./base"));
const router_1 = tslib_1.__importDefault(require("../services/stats/router"));
base_1.default.use('/public/stats', router_1.default);
base_1.default.use(middleware_1.errorHandler);
exports.default = base_1.default;
//# sourceMappingURL=public.js.map