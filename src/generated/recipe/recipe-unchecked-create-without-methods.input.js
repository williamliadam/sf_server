"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUncheckedCreateWithoutMethodsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const ingredient_unchecked_create_nested_many_without_used_recipe_input_1 = require("../ingredient/ingredient-unchecked-create-nested-many-without-used-recipe.input");
const dish_plan_unchecked_create_nested_many_without_recipe_input_1 = require("../dish-plan/dish-plan-unchecked-create-nested-many-without-recipe.input");
const dish_template_unchecked_create_nested_many_without_recipe_input_1 = require("../dish-template/dish-template-unchecked-create-nested-many-without-recipe.input");
let RecipeUncheckedCreateWithoutMethodsInput = class RecipeUncheckedCreateWithoutMethodsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_create_nested_many_without_used_recipe_input_1.IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_create_nested_many_without_recipe_input_1.DishPlanUncheckedCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_unchecked_create_nested_many_without_recipe_input_1.DishTemplateUncheckedCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutMethodsInput.prototype, "usedDishTemplates", void 0);
RecipeUncheckedCreateWithoutMethodsInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUncheckedCreateWithoutMethodsInput);
exports.RecipeUncheckedCreateWithoutMethodsInput = RecipeUncheckedCreateWithoutMethodsInput;
//# sourceMappingURL=recipe-unchecked-create-without-methods.input.js.map