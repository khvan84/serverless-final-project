"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.HttpError = exports.errorHandler = exports.cors = void 0;
const tslib_1 = require("tslib");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const allowOrigins = process.env.CORS_ALLOW_ORIGINS ?? '*';
const cors = async (req, res, next) => {
    res.header('Access-Control-Allow-Origin', allowOrigins);
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
};
exports.cors = cors;
const errorHandler = (error, req, res, next) => {
    const message = error.message || 'Something went wrong';
    console.error(error);
    res.status(error.status ?? 500).send({ message });
};
exports.errorHandler = errorHandler;
class HttpError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
    }
}
exports.HttpError = HttpError;
const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token == null) {
        throw new HttpError('Unauthorized', 401);
    }
    const decoded = jwt.decode(token);
    res.locals.userId = decoded.sub;
    next();
};
exports.auth = auth;
//# sourceMappingURL=index.js.map