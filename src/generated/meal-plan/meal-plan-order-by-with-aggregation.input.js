"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const meal_plan_count_order_by_aggregate_input_1 = require("./meal-plan-count-order-by-aggregate.input");
const meal_plan_avg_order_by_aggregate_input_1 = require("./meal-plan-avg-order-by-aggregate.input");
const meal_plan_max_order_by_aggregate_input_1 = require("./meal-plan-max-order-by-aggregate.input");
const meal_plan_min_order_by_aggregate_input_1 = require("./meal-plan-min-order-by-aggregate.input");
const meal_plan_sum_order_by_aggregate_input_1 = require("./meal-plan-sum-order-by-aggregate.input");
let MealPlanOrderByWithAggregationInput = class MealPlanOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_count_order_by_aggregate_input_1.MealPlanCountOrderByAggregateInput, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_avg_order_by_aggregate_input_1.MealPlanAvgOrderByAggregateInput, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_max_order_by_aggregate_input_1.MealPlanMaxOrderByAggregateInput, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_min_order_by_aggregate_input_1.MealPlanMinOrderByAggregateInput, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_sum_order_by_aggregate_input_1.MealPlanSumOrderByAggregateInput, { nullable: true })
], MealPlanOrderByWithAggregationInput.prototype, "_sum", void 0);
MealPlanOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanOrderByWithAggregationInput);
exports.MealPlanOrderByWithAggregationInput = MealPlanOrderByWithAggregationInput;
//# sourceMappingURL=meal-plan-order-by-with-aggregation.input.js.map