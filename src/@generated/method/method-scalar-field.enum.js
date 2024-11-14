"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MethodScalarFieldEnum;
(function (MethodScalarFieldEnum) {
    MethodScalarFieldEnum["id"] = "id";
    MethodScalarFieldEnum["code"] = "code";
    MethodScalarFieldEnum["name"] = "name";
    MethodScalarFieldEnum["desc"] = "desc";
    MethodScalarFieldEnum["recipeId"] = "recipeId";
    MethodScalarFieldEnum["createdAt"] = "createdAt";
    MethodScalarFieldEnum["updatedAt"] = "updatedAt";
})(MethodScalarFieldEnum = exports.MethodScalarFieldEnum || (exports.MethodScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(MethodScalarFieldEnum, { name: 'MethodScalarFieldEnum', description: undefined });
//# sourceMappingURL=method-scalar-field.enum.js.map