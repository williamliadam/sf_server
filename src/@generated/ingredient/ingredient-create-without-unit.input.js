"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientCreateWithoutUnitInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const material_create_nested_one_without_ingredients_input_1 = require("../material/material-create-nested-one-without-ingredients.input");
const recipe_create_nested_one_without_ingredients_input_1 = require("../recipe/recipe-create-nested-one-without-ingredients.input");
let IngredientCreateWithoutUnitInput = class IngredientCreateWithoutUnitInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], IngredientCreateWithoutUnitInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientCreateWithoutUnitInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientCreateWithoutUnitInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_nested_one_without_ingredients_input_1.MaterialCreateNestedOneWithoutIngredientsInput, { nullable: false })
], IngredientCreateWithoutUnitInput.prototype, "material", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_nested_one_without_ingredients_input_1.RecipeCreateNestedOneWithoutIngredientsInput, { nullable: true })
], IngredientCreateWithoutUnitInput.prototype, "usedRecipe", void 0);
IngredientCreateWithoutUnitInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientCreateWithoutUnitInput);
exports.IngredientCreateWithoutUnitInput = IngredientCreateWithoutUnitInput;
//# sourceMappingURL=ingredient-create-without-unit.input.js.map