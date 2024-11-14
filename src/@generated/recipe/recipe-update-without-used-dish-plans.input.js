"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateWithoutUsedDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const user_update_one_required_without_my_recipes_nested_input_1 = require("../user/user-update-one-required-without-my-recipes-nested.input");
const ingredient_update_many_without_used_recipe_nested_input_1 = require("../ingredient/ingredient-update-many-without-used-recipe-nested.input");
const method_update_many_without_used_recipe_nested_input_1 = require("../method/method-update-many-without-used-recipe-nested.input");
const dish_template_update_many_without_recipe_nested_input_1 = require("../dish-template/dish-template-update-many-without-recipe-nested.input");
let RecipeUpdateWithoutUsedDishPlansInput = class RecipeUpdateWithoutUsedDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_my_recipes_nested_input_1.UserUpdateOneRequiredWithoutMyRecipesNestedInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_update_many_without_used_recipe_nested_input_1.IngredientUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_update_many_without_used_recipe_nested_input_1.MethodUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_update_many_without_recipe_nested_input_1.DishTemplateUpdateManyWithoutRecipeNestedInput, { nullable: true })
], RecipeUpdateWithoutUsedDishPlansInput.prototype, "usedDishTemplates", void 0);
RecipeUpdateWithoutUsedDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUpdateWithoutUsedDishPlansInput);
exports.RecipeUpdateWithoutUsedDishPlansInput = RecipeUpdateWithoutUsedDishPlansInput;
//# sourceMappingURL=recipe-update-without-used-dish-plans.input.js.map