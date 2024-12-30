"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserAuthScalarFieldEnum;
(function (UserAuthScalarFieldEnum) {
    UserAuthScalarFieldEnum["id"] = "id";
    UserAuthScalarFieldEnum["userId"] = "userId";
    UserAuthScalarFieldEnum["authType"] = "authType";
    UserAuthScalarFieldEnum["openId"] = "openId";
    UserAuthScalarFieldEnum["accessToken"] = "accessToken";
    UserAuthScalarFieldEnum["createdAt"] = "createdAt";
    UserAuthScalarFieldEnum["updatedAt"] = "updatedAt";
})(UserAuthScalarFieldEnum = exports.UserAuthScalarFieldEnum || (exports.UserAuthScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(UserAuthScalarFieldEnum, { name: 'UserAuthScalarFieldEnum', description: undefined });
//# sourceMappingURL=user-auth-scalar-field.enum.js.map