"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUpdateWithoutMaterialInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const materia_unit_update_one_required_without_ingredients_nested_input_1 = require("../materia-unit/materia-unit-update-one-required-without-ingredients-nested.input");
const recipe_update_one_without_ingredients_nested_input_1 = require("../recipe/recipe-update-one-without-ingredients-nested.input");
let IngredientUpdateWithoutMaterialInput = class IngredientUpdateWithoutMaterialInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], IngredientUpdateWithoutMaterialInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], IngredientUpdateWithoutMaterialInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], IngredientUpdateWithoutMaterialInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_update_one_required_without_ingredients_nested_input_1.MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput, { nullable: true })
], IngredientUpdateWithoutMaterialInput.prototype, "unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_one_without_ingredients_nested_input_1.RecipeUpdateOneWithoutIngredientsNestedInput, { nullable: true })
], IngredientUpdateWithoutMaterialInput.prototype, "usedRecipe", void 0);
IngredientUpdateWithoutMaterialInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientUpdateWithoutMaterialInput);
exports.IngredientUpdateWithoutMaterialInput = IngredientUpdateWithoutMaterialInput;
//# sourceMappingURL=ingredient-update-without-material.input.js.map