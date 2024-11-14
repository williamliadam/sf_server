"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const material_model_1 = require("../material/material.model");
const materia_unit_model_1 = require("../materia-unit/materia-unit.model");
const recipe_model_1 = require("../recipe/recipe.model");
let Ingredient = class Ingredient {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Ingredient.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Ingredient.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Ingredient.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Ingredient.prototype, "materiaUnitId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], Ingredient.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Ingredient.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Ingredient.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_model_1.Material, { nullable: false })
], Ingredient.prototype, "material", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_model_1.MateriaUnit, { nullable: false })
], Ingredient.prototype, "unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_model_1.Recipe, { nullable: true })
], Ingredient.prototype, "usedRecipe", void 0);
Ingredient = __decorate([
    (0, graphql_2.ObjectType)()
], Ingredient);
exports.Ingredient = Ingredient;
//# sourceMappingURL=ingredient.model.js.map