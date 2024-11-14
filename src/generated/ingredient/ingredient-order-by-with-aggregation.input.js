"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const ingredient_count_order_by_aggregate_input_1 = require("./ingredient-count-order-by-aggregate.input");
const ingredient_avg_order_by_aggregate_input_1 = require("./ingredient-avg-order-by-aggregate.input");
const ingredient_max_order_by_aggregate_input_1 = require("./ingredient-max-order-by-aggregate.input");
const ingredient_min_order_by_aggregate_input_1 = require("./ingredient-min-order-by-aggregate.input");
const ingredient_sum_order_by_aggregate_input_1 = require("./ingredient-sum-order-by-aggregate.input");
let IngredientOrderByWithAggregationInput = class IngredientOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "materiaUnitId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_count_order_by_aggregate_input_1.IngredientCountOrderByAggregateInput, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_avg_order_by_aggregate_input_1.IngredientAvgOrderByAggregateInput, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_max_order_by_aggregate_input_1.IngredientMaxOrderByAggregateInput, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_min_order_by_aggregate_input_1.IngredientMinOrderByAggregateInput, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_sum_order_by_aggregate_input_1.IngredientSumOrderByAggregateInput, { nullable: true })
], IngredientOrderByWithAggregationInput.prototype, "_sum", void 0);
IngredientOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientOrderByWithAggregationInput);
exports.IngredientOrderByWithAggregationInput = IngredientOrderByWithAggregationInput;
//# sourceMappingURL=ingredient-order-by-with-aggregation.input.js.map