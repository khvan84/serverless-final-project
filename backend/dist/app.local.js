"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env.TABLE_NAME = 'serverless-centos-db-MRP24BCENT-12';
process.env.AWS_REGION = 'us-east-1';
process.env.JOB_QUEUE_NAME = 'dummy';
const dynamodb_1 = require("./common/dynamodb");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const local_1 = tslib_1.__importDefault(require("./apps/local"));
const port = 3001;
process.on('SIGTERM', (err) => {
    process.exit(1);
});
const main = async () => {
    try {
        await dynamodb_1.client.send(new client_dynamodb_1.CreateTableCommand({
            TableName: dynamodb_1.TableName,
            AttributeDefinitions: [
                { AttributeName: 'PK', AttributeType: 'S' },
                { AttributeName: 'SK', AttributeType: 'S' },
            ],
            KeySchema: [
                { AttributeName: 'PK', KeyType: 'HASH' },
                { AttributeName: 'SK', KeyType: 'RANGE' },
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 5,
                WriteCapacityUnits: 5,
            },
        }));
        console.log('Successfully created a DynamoDB table.');
    }
    catch (e) {
        if (e instanceof client_dynamodb_1.ResourceInUseException) {
        }
        else {
            console.log(`Failure in creating a DynamoDB table ${e}`);
        }
    }
    local_1.default.listen(port, () => {
        console.log(`listening at http://localhost:${port}`);
    });
};
main();
//# sourceMappingURL=app.local.js.map