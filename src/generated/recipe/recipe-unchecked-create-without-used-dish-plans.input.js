"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUncheckedCreateWithoutUsedDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const ingredient_unchecked_create_nested_many_without_used_recipe_input_1 = require("../ingredient/ingredient-unchecked-create-nested-many-without-used-recipe.input");
const method_unchecked_create_nested_many_without_used_recipe_input_1 = require("../method/method-unchecked-create-nested-many-without-used-recipe.input");
const dish_template_unchecked_create_nested_many_without_recipe_input_1 = require("../dish-template/dish-template-unchecked-create-nested-many-without-recipe.input");
let RecipeUncheckedCreateWithoutUsedDishPlansInput = class RecipeUncheckedCreateWithoutUsedDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_create_nested_many_without_used_recipe_input_1.IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_unchecked_create_nested_many_without_used_recipe_input_1.MethodUncheckedCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_unchecked_create_nested_many_without_recipe_input_1.DishTemplateUncheckedCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutUsedDishPlansInput.prototype, "usedDishTemplates", void 0);
RecipeUncheckedCreateWithoutUsedDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUncheckedCreateWithoutUsedDishPlansInput);
exports.RecipeUncheckedCreateWithoutUsedDishPlansInput = RecipeUncheckedCreateWithoutUsedDishPlansInput;
//# sourceMappingURL=recipe-unchecked-create-without-used-dish-plans.input.js.map