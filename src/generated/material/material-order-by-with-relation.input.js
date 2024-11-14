"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const materia_category_order_by_with_relation_input_1 = require("../materia-category/materia-category-order-by-with-relation.input");
const nutrition_row_order_by_relation_aggregate_input_1 = require("../nutrition-row/nutrition-row-order-by-relation-aggregate.input");
const ingredient_order_by_relation_aggregate_input_1 = require("../ingredient/ingredient-order-by-relation-aggregate.input");
let MaterialOrderByWithRelationInput = class MaterialOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_order_by_with_relation_input_1.MateriaCategoryOrderByWithRelationInput, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_order_by_relation_aggregate_input_1.NutritionRowOrderByRelationAggregateInput, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "nutritionMatrix", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_order_by_relation_aggregate_input_1.IngredientOrderByRelationAggregateInput, { nullable: true })
], MaterialOrderByWithRelationInput.prototype, "ingredients", void 0);
MaterialOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialOrderByWithRelationInput);
exports.MaterialOrderByWithRelationInput = MaterialOrderByWithRelationInput;
//# sourceMappingURL=material-order-by-with-relation.input.js.map