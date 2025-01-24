"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const tslib_1 = require("tslib");
const serverless_express_1 = tslib_1.__importDefault(require("@vendia/serverless-express"));
const authenticated_1 = tslib_1.__importDefault(require("./apps/authenticated"));
const handler = (event, context, callback) => {
    console.log(event);
    return (0, serverless_express_1.default)({ app: authenticated_1.default })(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=handler.js.map