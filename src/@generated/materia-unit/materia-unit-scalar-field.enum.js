"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MateriaUnitScalarFieldEnum;
(function (MateriaUnitScalarFieldEnum) {
    MateriaUnitScalarFieldEnum["id"] = "id";
    MateriaUnitScalarFieldEnum["code"] = "code";
    MateriaUnitScalarFieldEnum["name"] = "name";
    MateriaUnitScalarFieldEnum["toKilo"] = "toKilo";
    MateriaUnitScalarFieldEnum["createdAt"] = "createdAt";
    MateriaUnitScalarFieldEnum["updatedAt"] = "updatedAt";
})(MateriaUnitScalarFieldEnum = exports.MateriaUnitScalarFieldEnum || (exports.MateriaUnitScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(MateriaUnitScalarFieldEnum, { name: 'MateriaUnitScalarFieldEnum', description: undefined });
//# sourceMappingURL=materia-unit-scalar-field.enum.js.map