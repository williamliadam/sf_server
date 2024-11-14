"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const nutrition_row_count_order_by_aggregate_input_1 = require("./nutrition-row-count-order-by-aggregate.input");
const nutrition_row_avg_order_by_aggregate_input_1 = require("./nutrition-row-avg-order-by-aggregate.input");
const nutrition_row_max_order_by_aggregate_input_1 = require("./nutrition-row-max-order-by-aggregate.input");
const nutrition_row_min_order_by_aggregate_input_1 = require("./nutrition-row-min-order-by-aggregate.input");
const nutrition_row_sum_order_by_aggregate_input_1 = require("./nutrition-row-sum-order-by-aggregate.input");
let NutritionRowOrderByWithAggregationInput = class NutritionRowOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "nutirtionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "belongToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_count_order_by_aggregate_input_1.NutritionRowCountOrderByAggregateInput, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_avg_order_by_aggregate_input_1.NutritionRowAvgOrderByAggregateInput, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_max_order_by_aggregate_input_1.NutritionRowMaxOrderByAggregateInput, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_min_order_by_aggregate_input_1.NutritionRowMinOrderByAggregateInput, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_sum_order_by_aggregate_input_1.NutritionRowSumOrderByAggregateInput, { nullable: true })
], NutritionRowOrderByWithAggregationInput.prototype, "_sum", void 0);
NutritionRowOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowOrderByWithAggregationInput);
exports.NutritionRowOrderByWithAggregationInput = NutritionRowOrderByWithAggregationInput;
//# sourceMappingURL=nutrition-row-order-by-with-aggregation.input.js.map