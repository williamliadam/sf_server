"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const nutrition_count_order_by_aggregate_input_1 = require("./nutrition-count-order-by-aggregate.input");
const nutrition_avg_order_by_aggregate_input_1 = require("./nutrition-avg-order-by-aggregate.input");
const nutrition_max_order_by_aggregate_input_1 = require("./nutrition-max-order-by-aggregate.input");
const nutrition_min_order_by_aggregate_input_1 = require("./nutrition-min-order-by-aggregate.input");
const nutrition_sum_order_by_aggregate_input_1 = require("./nutrition-sum-order-by-aggregate.input");
let NutritionOrderByWithAggregationInput = class NutritionOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_count_order_by_aggregate_input_1.NutritionCountOrderByAggregateInput, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_avg_order_by_aggregate_input_1.NutritionAvgOrderByAggregateInput, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_max_order_by_aggregate_input_1.NutritionMaxOrderByAggregateInput, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_min_order_by_aggregate_input_1.NutritionMinOrderByAggregateInput, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_sum_order_by_aggregate_input_1.NutritionSumOrderByAggregateInput, { nullable: true })
], NutritionOrderByWithAggregationInput.prototype, "_sum", void 0);
NutritionOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionOrderByWithAggregationInput);
exports.NutritionOrderByWithAggregationInput = NutritionOrderByWithAggregationInput;
//# sourceMappingURL=nutrition-order-by-with-aggregation.input.js.map