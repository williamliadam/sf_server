"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const meal_template_order_by_with_relation_input_1 = require("../meal-template/meal-template-order-by-with-relation.input");
const recipe_order_by_with_relation_input_1 = require("../recipe/recipe-order-by-with-relation.input");
let DishTemplateOrderByWithRelationInput = class DishTemplateOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "mealTemplateId", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_order_by_with_relation_input_1.MealTemplateOrderByWithRelationInput, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "usedMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_order_by_with_relation_input_1.RecipeOrderByWithRelationInput, { nullable: true })
], DishTemplateOrderByWithRelationInput.prototype, "recipe", void 0);
DishTemplateOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateOrderByWithRelationInput);
exports.DishTemplateOrderByWithRelationInput = DishTemplateOrderByWithRelationInput;
//# sourceMappingURL=dish-template-order-by-with-relation.input.js.map