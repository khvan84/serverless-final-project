"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = void 0;
const wrap = (handler) => async (req, res, next) => {
    try {
        const response = await handler(req, res);
        res.status(200).send(response);
    }
    catch (e) {
        next(e);
    }
};
exports.wrap = wrap;
//# sourceMappingURL=express.js.map