"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const ingredient_order_by_relation_aggregate_input_1 = require("../ingredient/ingredient-order-by-relation-aggregate.input");
const method_order_by_relation_aggregate_input_1 = require("../method/method-order-by-relation-aggregate.input");
const dish_plan_order_by_relation_aggregate_input_1 = require("../dish-plan/dish-plan-order-by-relation-aggregate.input");
const dish_template_order_by_relation_aggregate_input_1 = require("../dish-template/dish-template-order-by-relation-aggregate.input");
let RecipeOrderByWithRelationInput = class RecipeOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_order_by_relation_aggregate_input_1.IngredientOrderByRelationAggregateInput, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_order_by_relation_aggregate_input_1.MethodOrderByRelationAggregateInput, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_order_by_relation_aggregate_input_1.DishPlanOrderByRelationAggregateInput, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_order_by_relation_aggregate_input_1.DishTemplateOrderByRelationAggregateInput, { nullable: true })
], RecipeOrderByWithRelationInput.prototype, "usedDishTemplates", void 0);
RecipeOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeOrderByWithRelationInput);
exports.RecipeOrderByWithRelationInput = RecipeOrderByWithRelationInput;
//# sourceMappingURL=recipe-order-by-with-relation.input.js.map