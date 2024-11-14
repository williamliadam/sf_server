"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MealPlanScalarFieldEnum;
(function (MealPlanScalarFieldEnum) {
    MealPlanScalarFieldEnum["id"] = "id";
    MealPlanScalarFieldEnum["planTime"] = "planTime";
    MealPlanScalarFieldEnum["userId"] = "userId";
    MealPlanScalarFieldEnum["createdAt"] = "createdAt";
    MealPlanScalarFieldEnum["updatedAt"] = "updatedAt";
    MealPlanScalarFieldEnum["type"] = "type";
})(MealPlanScalarFieldEnum = exports.MealPlanScalarFieldEnum || (exports.MealPlanScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(MealPlanScalarFieldEnum, { name: 'MealPlanScalarFieldEnum', description: undefined });
//# sourceMappingURL=meal-plan-scalar-field.enum.js.map