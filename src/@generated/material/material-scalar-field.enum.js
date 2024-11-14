"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MaterialScalarFieldEnum;
(function (MaterialScalarFieldEnum) {
    MaterialScalarFieldEnum["id"] = "id";
    MaterialScalarFieldEnum["name"] = "name";
    MaterialScalarFieldEnum["code"] = "code";
    MaterialScalarFieldEnum["nickName"] = "nickName";
    MaterialScalarFieldEnum["materiaCategoryId"] = "materiaCategoryId";
    MaterialScalarFieldEnum["createdAt"] = "createdAt";
    MaterialScalarFieldEnum["updatedAt"] = "updatedAt";
})(MaterialScalarFieldEnum = exports.MaterialScalarFieldEnum || (exports.MaterialScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(MaterialScalarFieldEnum, { name: 'MaterialScalarFieldEnum', description: undefined });
//# sourceMappingURL=material-scalar-field.enum.js.map