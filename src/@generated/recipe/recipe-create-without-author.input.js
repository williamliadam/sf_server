"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const ingredient_create_nested_many_without_used_recipe_input_1 = require("../ingredient/ingredient-create-nested-many-without-used-recipe.input");
const method_create_nested_many_without_used_recipe_input_1 = require("../method/method-create-nested-many-without-used-recipe.input");
const dish_plan_create_nested_many_without_recipe_input_1 = require("../dish-plan/dish-plan-create-nested-many-without-recipe.input");
const dish_template_create_nested_many_without_recipe_input_1 = require("../dish-template/dish-template-create-nested-many-without-recipe.input");
let RecipeCreateWithoutAuthorInput = class RecipeCreateWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], RecipeCreateWithoutAuthorInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeCreateWithoutAuthorInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeCreateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_nested_many_without_used_recipe_input_1.IngredientCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeCreateWithoutAuthorInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_create_nested_many_without_used_recipe_input_1.MethodCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeCreateWithoutAuthorInput.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_nested_many_without_recipe_input_1.DishPlanCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeCreateWithoutAuthorInput.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_create_nested_many_without_recipe_input_1.DishTemplateCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeCreateWithoutAuthorInput.prototype, "usedDishTemplates", void 0);
RecipeCreateWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeCreateWithoutAuthorInput);
exports.RecipeCreateWithoutAuthorInput = RecipeCreateWithoutAuthorInput;
//# sourceMappingURL=recipe-create-without-author.input.js.map