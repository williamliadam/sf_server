"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const ingredient_where_input_1 = require("./ingredient-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const material_relation_filter_input_1 = require("../material/material-relation-filter.input");
const materia_unit_relation_filter_input_1 = require("../materia-unit/materia-unit-relation-filter.input");
const recipe_nullable_relation_filter_input_1 = require("../recipe/recipe-nullable-relation-filter.input");
let IngredientWhereUniqueInput = class IngredientWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_input_1.IngredientWhereInput], { nullable: true })
], IngredientWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_input_1.IngredientWhereInput], { nullable: true })
], IngredientWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_input_1.IngredientWhereInput], { nullable: true })
], IngredientWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "materiaUnitId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_relation_filter_input_1.MaterialRelationFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "material", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_relation_filter_input_1.MateriaUnitRelationFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_nullable_relation_filter_input_1.RecipeNullableRelationFilter, { nullable: true })
], IngredientWhereUniqueInput.prototype, "usedRecipe", void 0);
IngredientWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientWhereUniqueInput);
exports.IngredientWhereUniqueInput = IngredientWhereUniqueInput;
//# sourceMappingURL=ingredient-where-unique.input.js.map