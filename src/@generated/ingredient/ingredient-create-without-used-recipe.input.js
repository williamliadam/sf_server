"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientCreateWithoutUsedRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const material_create_nested_one_without_ingredients_input_1 = require("../material/material-create-nested-one-without-ingredients.input");
const materia_unit_create_nested_one_without_ingredients_input_1 = require("../materia-unit/materia-unit-create-nested-one-without-ingredients.input");
let IngredientCreateWithoutUsedRecipeInput = class IngredientCreateWithoutUsedRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], IngredientCreateWithoutUsedRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientCreateWithoutUsedRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientCreateWithoutUsedRecipeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_nested_one_without_ingredients_input_1.MaterialCreateNestedOneWithoutIngredientsInput, { nullable: false })
], IngredientCreateWithoutUsedRecipeInput.prototype, "material", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_create_nested_one_without_ingredients_input_1.MateriaUnitCreateNestedOneWithoutIngredientsInput, { nullable: false })
], IngredientCreateWithoutUsedRecipeInput.prototype, "unit", void 0);
IngredientCreateWithoutUsedRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientCreateWithoutUsedRecipeInput);
exports.IngredientCreateWithoutUsedRecipeInput = IngredientCreateWithoutUsedRecipeInput;
//# sourceMappingURL=ingredient-create-without-used-recipe.input.js.map