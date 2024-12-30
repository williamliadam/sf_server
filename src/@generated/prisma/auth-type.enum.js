"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthType = void 0;
const graphql_1 = require("@nestjs/graphql");
var AuthType;
(function (AuthType) {
    AuthType["WECHAT"] = "WECHAT";
    AuthType["EMAIL"] = "EMAIL";
    AuthType["PHONE"] = "PHONE";
})(AuthType = exports.AuthType || (exports.AuthType = {}));
(0, graphql_1.registerEnumType)(AuthType, { name: 'AuthType', description: undefined });
//# sourceMappingURL=auth-type.enum.js.map