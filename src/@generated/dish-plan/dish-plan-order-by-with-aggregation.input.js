"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const dish_plan_count_order_by_aggregate_input_1 = require("./dish-plan-count-order-by-aggregate.input");
const dish_plan_avg_order_by_aggregate_input_1 = require("./dish-plan-avg-order-by-aggregate.input");
const dish_plan_max_order_by_aggregate_input_1 = require("./dish-plan-max-order-by-aggregate.input");
const dish_plan_min_order_by_aggregate_input_1 = require("./dish-plan-min-order-by-aggregate.input");
const dish_plan_sum_order_by_aggregate_input_1 = require("./dish-plan-sum-order-by-aggregate.input");
let DishPlanOrderByWithAggregationInput = class DishPlanOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_count_order_by_aggregate_input_1.DishPlanCountOrderByAggregateInput, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_avg_order_by_aggregate_input_1.DishPlanAvgOrderByAggregateInput, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_max_order_by_aggregate_input_1.DishPlanMaxOrderByAggregateInput, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_min_order_by_aggregate_input_1.DishPlanMinOrderByAggregateInput, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_sum_order_by_aggregate_input_1.DishPlanSumOrderByAggregateInput, { nullable: true })
], DishPlanOrderByWithAggregationInput.prototype, "_sum", void 0);
DishPlanOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanOrderByWithAggregationInput);
exports.DishPlanOrderByWithAggregationInput = DishPlanOrderByWithAggregationInput;
//# sourceMappingURL=dish-plan-order-by-with-aggregation.input.js.map