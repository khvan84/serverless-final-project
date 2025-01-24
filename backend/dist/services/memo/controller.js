"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMemo = exports.getMemos = exports.createMemo = void 0;
const dynamodb_1 = require("../../common/dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const createMemo = async (req, res) => {
    const request = req.body;
    const userId = res.locals.userId;
    const now = Date.now();
    const item = {
        PK: pk(userId),
        SK: now.toString(),
        title: request.title,
        content: request.content,
        createdAt: now,
    };
    const response = await dynamodb_1.ddb.send(new lib_dynamodb_1.PutCommand({
        TableName: dynamodb_1.TableName,
        Item: item,
    }));
    return item;
};
exports.createMemo = createMemo;
const getMemos = async (req, res) => {
    const userId = res.locals.userId;
    const memos = await dynamodb_1.ddb.send(new lib_dynamodb_1.QueryCommand({
        TableName: dynamodb_1.TableName,
        KeyConditionExpression: 'PK = :pk',
        ExpressionAttributeValues: {
            ':pk': pk(userId),
        },
        ScanIndexForward: false,
    }));
    return { memos: memos.Items ?? [] };
};
exports.getMemos = getMemos;
const deleteMemo = async (req, res) => {
    const userId = res.locals.userId;
    const request = req.body;
    await dynamodb_1.ddb.send(new lib_dynamodb_1.DeleteCommand({
        TableName: dynamodb_1.TableName,
        Key: {
            PK: pk(userId),
            SK: request.sk,
        },
    }));
    return {};
};
exports.deleteMemo = deleteMemo;
const pk = (userId) => `MEMO#${userId};`;
//# sourceMappingURL=controller.js.map