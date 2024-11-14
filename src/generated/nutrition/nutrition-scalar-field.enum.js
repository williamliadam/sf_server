"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NutritionScalarFieldEnum;
(function (NutritionScalarFieldEnum) {
    NutritionScalarFieldEnum["id"] = "id";
    NutritionScalarFieldEnum["code"] = "code";
    NutritionScalarFieldEnum["name"] = "name";
    NutritionScalarFieldEnum["createdAt"] = "createdAt";
    NutritionScalarFieldEnum["updatedAt"] = "updatedAt";
})(NutritionScalarFieldEnum = exports.NutritionScalarFieldEnum || (exports.NutritionScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(NutritionScalarFieldEnum, { name: 'NutritionScalarFieldEnum', description: undefined });
//# sourceMappingURL=nutrition-scalar-field.enum.js.map