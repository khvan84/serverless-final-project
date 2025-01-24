"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddb = exports.client = exports.TableName = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
exports.TableName = process.env.TABLE_NAME;
exports.client = new client_dynamodb_1.DynamoDBClient({
    region: process.env.AWS_REGION,
    endpoint: process.env.DYNAMODB_ENDPOINT,
});
exports.ddb = lib_dynamodb_1.DynamoDBDocumentClient.from(exports.client, {
    marshallOptions: {
        convertEmptyValues: false,
        removeUndefinedValues: false,
        convertClassInstanceToMap: false,
    },
    unmarshallOptions: {
        wrapNumbers: false,
    },
});
//# sourceMappingURL=dynamodb.js.map