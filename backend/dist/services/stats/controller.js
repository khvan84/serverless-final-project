"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const dynamodb_1 = require("../../common/dynamodb");
const getStats = async (req, res) => {
    const memoCount = await dynamodb_1.client.send(new client_dynamodb_1.ScanCommand({
        TableName: dynamodb_1.TableName,
        Select: 'COUNT',
        FilterExpression: 'begins_with(PK, :prefix)',
        ExpressionAttributeValues: {
            ':prefix': { S: 'MEMO' },
        },
    }));
    return { memoCount: memoCount.Count };
};
exports.getStats = getStats;
//# sourceMappingURL=controller.js.map