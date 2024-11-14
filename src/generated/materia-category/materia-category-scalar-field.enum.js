"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MateriaCategoryScalarFieldEnum;
(function (MateriaCategoryScalarFieldEnum) {
    MateriaCategoryScalarFieldEnum["id"] = "id";
    MateriaCategoryScalarFieldEnum["code"] = "code";
    MateriaCategoryScalarFieldEnum["name"] = "name";
    MateriaCategoryScalarFieldEnum["lastId"] = "lastId";
    MateriaCategoryScalarFieldEnum["createdAt"] = "createdAt";
    MateriaCategoryScalarFieldEnum["updatedAt"] = "updatedAt";
})(MateriaCategoryScalarFieldEnum = exports.MateriaCategoryScalarFieldEnum || (exports.MateriaCategoryScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(MateriaCategoryScalarFieldEnum, { name: 'MateriaCategoryScalarFieldEnum', description: undefined });
//# sourceMappingURL=materia-category-scalar-field.enum.js.map