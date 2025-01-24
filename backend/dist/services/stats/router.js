"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const express_2 = require("../../common/express");
const c = tslib_1.__importStar(require("./controller"));
const router = express_1.default.Router();
router.get('/', (0, express_2.wrap)(c.getStats));
exports.default = router;
//# sourceMappingURL=router.js.map