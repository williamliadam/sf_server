"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var BodyDetailScalarFieldEnum;
(function (BodyDetailScalarFieldEnum) {
    BodyDetailScalarFieldEnum["id"] = "id";
    BodyDetailScalarFieldEnum["weight"] = "weight";
    BodyDetailScalarFieldEnum["height"] = "height";
    BodyDetailScalarFieldEnum["age"] = "age";
    BodyDetailScalarFieldEnum["bmi"] = "bmi";
    BodyDetailScalarFieldEnum["bmr"] = "bmr";
    BodyDetailScalarFieldEnum["tdee"] = "tdee";
    BodyDetailScalarFieldEnum["userId"] = "userId";
    BodyDetailScalarFieldEnum["createdAt"] = "createdAt";
    BodyDetailScalarFieldEnum["updatedAt"] = "updatedAt";
})(BodyDetailScalarFieldEnum = exports.BodyDetailScalarFieldEnum || (exports.BodyDetailScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(BodyDetailScalarFieldEnum, { name: 'BodyDetailScalarFieldEnum', description: undefined });
//# sourceMappingURL=body-detail-scalar-field.enum.js.map