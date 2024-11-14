"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const recipe_order_by_with_relation_input_1 = require("../recipe/recipe-order-by-with-relation.input");
const meal_plan_order_by_with_relation_input_1 = require("../meal-plan/meal-plan-order-by-with-relation.input");
let DishPlanOrderByWithRelationInput = class DishPlanOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_order_by_with_relation_input_1.RecipeOrderByWithRelationInput, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "recipe", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_order_by_with_relation_input_1.MealPlanOrderByWithRelationInput, { nullable: true })
], DishPlanOrderByWithRelationInput.prototype, "usedMealPlan", void 0);
DishPlanOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanOrderByWithRelationInput);
exports.DishPlanOrderByWithRelationInput = DishPlanOrderByWithRelationInput;
//# sourceMappingURL=dish-plan-order-by-with-relation.input.js.map