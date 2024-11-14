"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateWithoutMethodsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_create_nested_one_without_my_recipes_input_1 = require("../user/user-create-nested-one-without-my-recipes.input");
const ingredient_create_nested_many_without_used_recipe_input_1 = require("../ingredient/ingredient-create-nested-many-without-used-recipe.input");
const dish_plan_create_nested_many_without_recipe_input_1 = require("../dish-plan/dish-plan-create-nested-many-without-recipe.input");
const dish_template_create_nested_many_without_recipe_input_1 = require("../dish-template/dish-template-create-nested-many-without-recipe.input");
let RecipeCreateWithoutMethodsInput = class RecipeCreateWithoutMethodsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], RecipeCreateWithoutMethodsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeCreateWithoutMethodsInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeCreateWithoutMethodsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeCreateWithoutMethodsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_my_recipes_input_1.UserCreateNestedOneWithoutMyRecipesInput, { nullable: false })
], RecipeCreateWithoutMethodsInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_nested_many_without_used_recipe_input_1.IngredientCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeCreateWithoutMethodsInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_nested_many_without_recipe_input_1.DishPlanCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeCreateWithoutMethodsInput.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_create_nested_many_without_recipe_input_1.DishTemplateCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeCreateWithoutMethodsInput.prototype, "usedDishTemplates", void 0);
RecipeCreateWithoutMethodsInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeCreateWithoutMethodsInput);
exports.RecipeCreateWithoutMethodsInput = RecipeCreateWithoutMethodsInput;
//# sourceMappingURL=recipe-create-without-methods.input.js.map