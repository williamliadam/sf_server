"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const recipe_count_order_by_aggregate_input_1 = require("./recipe-count-order-by-aggregate.input");
const recipe_avg_order_by_aggregate_input_1 = require("./recipe-avg-order-by-aggregate.input");
const recipe_max_order_by_aggregate_input_1 = require("./recipe-max-order-by-aggregate.input");
const recipe_min_order_by_aggregate_input_1 = require("./recipe-min-order-by-aggregate.input");
const recipe_sum_order_by_aggregate_input_1 = require("./recipe-sum-order-by-aggregate.input");
let RecipeOrderByWithAggregationInput = class RecipeOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_count_order_by_aggregate_input_1.RecipeCountOrderByAggregateInput, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_avg_order_by_aggregate_input_1.RecipeAvgOrderByAggregateInput, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_max_order_by_aggregate_input_1.RecipeMaxOrderByAggregateInput, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_min_order_by_aggregate_input_1.RecipeMinOrderByAggregateInput, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_sum_order_by_aggregate_input_1.RecipeSumOrderByAggregateInput, { nullable: true })
], RecipeOrderByWithAggregationInput.prototype, "_sum", void 0);
RecipeOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeOrderByWithAggregationInput);
exports.RecipeOrderByWithAggregationInput = RecipeOrderByWithAggregationInput;
//# sourceMappingURL=recipe-order-by-with-aggregation.input.js.map