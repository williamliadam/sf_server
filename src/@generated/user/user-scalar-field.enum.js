"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["phone"] = "phone";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["role"] = "role";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
//# sourceMappingURL=user-scalar-field.enum.js.map