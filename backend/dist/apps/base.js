"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const middleware_1 = require("../middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '6mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(middleware_1.cors);
app.get('/health_check', (req, res) => {
    res.send('ok');
});
exports.default = app;
//# sourceMappingURL=base.js.map