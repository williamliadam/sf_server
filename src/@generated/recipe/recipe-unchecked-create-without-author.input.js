"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUncheckedCreateWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const ingredient_unchecked_create_nested_many_without_used_recipe_input_1 = require("../ingredient/ingredient-unchecked-create-nested-many-without-used-recipe.input");
const method_unchecked_create_nested_many_without_used_recipe_input_1 = require("../method/method-unchecked-create-nested-many-without-used-recipe.input");
const dish_plan_unchecked_create_nested_many_without_recipe_input_1 = require("../dish-plan/dish-plan-unchecked-create-nested-many-without-recipe.input");
const dish_template_unchecked_create_nested_many_without_recipe_input_1 = require("../dish-template/dish-template-unchecked-create-nested-many-without-recipe.input");
let RecipeUncheckedCreateWithoutAuthorInput = class RecipeUncheckedCreateWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_create_nested_many_without_used_recipe_input_1.IngredientUncheckedCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_unchecked_create_nested_many_without_used_recipe_input_1.MethodUncheckedCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_create_nested_many_without_recipe_input_1.DishPlanUncheckedCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_unchecked_create_nested_many_without_recipe_input_1.DishTemplateUncheckedCreateNestedManyWithoutRecipeInput, { nullable: true })
], RecipeUncheckedCreateWithoutAuthorInput.prototype, "usedDishTemplates", void 0);
RecipeUncheckedCreateWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUncheckedCreateWithoutAuthorInput);
exports.RecipeUncheckedCreateWithoutAuthorInput = RecipeUncheckedCreateWithoutAuthorInput;
//# sourceMappingURL=recipe-unchecked-create-without-author.input.js.map