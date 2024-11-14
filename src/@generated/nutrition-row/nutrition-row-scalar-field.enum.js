"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var NutritionRowScalarFieldEnum;
(function (NutritionRowScalarFieldEnum) {
    NutritionRowScalarFieldEnum["id"] = "id";
    NutritionRowScalarFieldEnum["nutirtionId"] = "nutirtionId";
    NutritionRowScalarFieldEnum["percent"] = "percent";
    NutritionRowScalarFieldEnum["belongToId"] = "belongToId";
    NutritionRowScalarFieldEnum["createdAt"] = "createdAt";
    NutritionRowScalarFieldEnum["updatedAt"] = "updatedAt";
})(NutritionRowScalarFieldEnum = exports.NutritionRowScalarFieldEnum || (exports.NutritionRowScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(NutritionRowScalarFieldEnum, { name: 'NutritionRowScalarFieldEnum', description: undefined });
//# sourceMappingURL=nutrition-row-scalar-field.enum.js.map