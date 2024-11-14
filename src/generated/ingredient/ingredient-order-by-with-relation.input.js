"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const material_order_by_with_relation_input_1 = require("../material/material-order-by-with-relation.input");
const materia_unit_order_by_with_relation_input_1 = require("../materia-unit/materia-unit-order-by-with-relation.input");
const recipe_order_by_with_relation_input_1 = require("../recipe/recipe-order-by-with-relation.input");
let IngredientOrderByWithRelationInput = class IngredientOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "materiaUnitId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_order_by_with_relation_input_1.MaterialOrderByWithRelationInput, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "material", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_order_by_with_relation_input_1.MateriaUnitOrderByWithRelationInput, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "unit", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_order_by_with_relation_input_1.RecipeOrderByWithRelationInput, { nullable: true })
], IngredientOrderByWithRelationInput.prototype, "usedRecipe", void 0);
IngredientOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientOrderByWithRelationInput);
exports.IngredientOrderByWithRelationInput = IngredientOrderByWithRelationInput;
//# sourceMappingURL=ingredient-order-by-with-relation.input.js.map