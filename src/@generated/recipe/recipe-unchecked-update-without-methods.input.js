"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUncheckedUpdateWithoutMethodsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const ingredient_unchecked_update_many_without_used_recipe_nested_input_1 = require("../ingredient/ingredient-unchecked-update-many-without-used-recipe-nested.input");
const dish_plan_unchecked_update_many_without_recipe_nested_input_1 = require("../dish-plan/dish-plan-unchecked-update-many-without-recipe-nested.input");
const dish_template_unchecked_update_many_without_recipe_nested_input_1 = require("../dish-template/dish-template-unchecked-update-many-without-recipe-nested.input");
let RecipeUncheckedUpdateWithoutMethodsInput = class RecipeUncheckedUpdateWithoutMethodsInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_update_many_without_used_recipe_nested_input_1.IngredientUncheckedUpdateManyWithoutUsedRecipeNestedInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_update_many_without_recipe_nested_input_1.DishPlanUncheckedUpdateManyWithoutRecipeNestedInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_unchecked_update_many_without_recipe_nested_input_1.DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput, { nullable: true })
], RecipeUncheckedUpdateWithoutMethodsInput.prototype, "usedDishTemplates", void 0);
RecipeUncheckedUpdateWithoutMethodsInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUncheckedUpdateWithoutMethodsInput);
exports.RecipeUncheckedUpdateWithoutMethodsInput = RecipeUncheckedUpdateWithoutMethodsInput;
//# sourceMappingURL=recipe-unchecked-update-without-methods.input.js.map