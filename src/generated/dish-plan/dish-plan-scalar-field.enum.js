"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var DishPlanScalarFieldEnum;
(function (DishPlanScalarFieldEnum) {
    DishPlanScalarFieldEnum["id"] = "id";
    DishPlanScalarFieldEnum["recipeId"] = "recipeId";
    DishPlanScalarFieldEnum["amount"] = "amount";
    DishPlanScalarFieldEnum["planCookerId"] = "planCookerId";
    DishPlanScalarFieldEnum["mealPlanId"] = "mealPlanId";
    DishPlanScalarFieldEnum["createdAt"] = "createdAt";
    DishPlanScalarFieldEnum["updatedAt"] = "updatedAt";
})(DishPlanScalarFieldEnum = exports.DishPlanScalarFieldEnum || (exports.DishPlanScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(DishPlanScalarFieldEnum, { name: 'DishPlanScalarFieldEnum', description: undefined });
//# sourceMappingURL=dish-plan-scalar-field.enum.js.map