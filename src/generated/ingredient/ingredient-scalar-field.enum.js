"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var IngredientScalarFieldEnum;
(function (IngredientScalarFieldEnum) {
    IngredientScalarFieldEnum["id"] = "id";
    IngredientScalarFieldEnum["materialId"] = "materialId";
    IngredientScalarFieldEnum["amount"] = "amount";
    IngredientScalarFieldEnum["materiaUnitId"] = "materiaUnitId";
    IngredientScalarFieldEnum["recipeId"] = "recipeId";
    IngredientScalarFieldEnum["createdAt"] = "createdAt";
    IngredientScalarFieldEnum["updatedAt"] = "updatedAt";
})(IngredientScalarFieldEnum = exports.IngredientScalarFieldEnum || (exports.IngredientScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(IngredientScalarFieldEnum, { name: 'IngredientScalarFieldEnum', description: undefined });
//# sourceMappingURL=ingredient-scalar-field.enum.js.map