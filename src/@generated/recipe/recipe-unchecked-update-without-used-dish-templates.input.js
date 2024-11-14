"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUncheckedUpdateWithoutUsedDishTemplatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const ingredient_unchecked_update_many_without_used_recipe_nested_input_1 = require("../ingredient/ingredient-unchecked-update-many-without-used-recipe-nested.input");
const method_unchecked_update_many_without_used_recipe_nested_input_1 = require("../method/method-unchecked-update-many-without-used-recipe-nested.input");
const dish_plan_unchecked_update_many_without_recipe_nested_input_1 = require("../dish-plan/dish-plan-unchecked-update-many-without-recipe-nested.input");
let RecipeUncheckedUpdateWithoutUsedDishTemplatesInput = class RecipeUncheckedUpdateWithoutUsedDishTemplatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_update_many_without_used_recipe_nested_input_1.IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_unchecked_update_many_without_used_recipe_nested_input_1.MethodUncheckedUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_update_many_without_recipe_nested_input_1.DishPlanUncheckedUpdateManyWithoutRecipeNestedInput, { nullable: true })
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput.prototype, "usedDishPlans", void 0);
RecipeUncheckedUpdateWithoutUsedDishTemplatesInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUncheckedUpdateWithoutUsedDishTemplatesInput);
exports.RecipeUncheckedUpdateWithoutUsedDishTemplatesInput = RecipeUncheckedUpdateWithoutUsedDishTemplatesInput;
//# sourceMappingURL=recipe-unchecked-update-without-used-dish-templates.input.js.map