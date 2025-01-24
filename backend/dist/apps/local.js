"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const middleware_1 = require("../middleware");
const base_1 = tslib_1.__importDefault(require("./base"));
const router_1 = tslib_1.__importDefault(require("../services/memo/router"));
const router_2 = tslib_1.__importDefault(require("../services/stats/router"));
base_1.default.use((req, res, next) => {
    console.log(JSON.stringify({ url: req.path, method: req.method, body: req.body }));
    next();
});
base_1.default.use((req, res, next) => {
    res.locals.userId = 'test';
    next();
});
base_1.default.use('/memo', router_1.default);
base_1.default.use('/public/stats', router_2.default);
base_1.default.use(middleware_1.errorHandler);
exports.default = base_1.default;
//# sourceMappingURL=local.js.map