"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_where_input_1 = require("./meal-plan-where.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_order_by_with_aggregation_input_1 = require("./meal-plan-order-by-with-aggregation.input");
const meal_plan_scalar_field_enum_1 = require("./meal-plan-scalar-field.enum");
const meal_plan_scalar_where_with_aggregates_input_1 = require("./meal-plan-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const meal_plan_count_aggregate_input_1 = require("./meal-plan-count-aggregate.input");
const meal_plan_avg_aggregate_input_1 = require("./meal-plan-avg-aggregate.input");
const meal_plan_sum_aggregate_input_1 = require("./meal-plan-sum-aggregate.input");
const meal_plan_min_aggregate_input_1 = require("./meal-plan-min-aggregate.input");
const meal_plan_max_aggregate_input_1 = require("./meal-plan-max-aggregate.input");
let MealPlanGroupByArgs = class MealPlanGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_input_1.MealPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_input_1.MealPlanWhereInput)
], MealPlanGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_order_by_with_aggregation_input_1.MealPlanOrderByWithAggregationInput], { nullable: true })
], MealPlanGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_scalar_field_enum_1.MealPlanScalarFieldEnum], { nullable: false })
], MealPlanGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_scalar_where_with_aggregates_input_1.MealPlanScalarWhereWithAggregatesInput, { nullable: true })
], MealPlanGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealPlanGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealPlanGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_count_aggregate_input_1.MealPlanCountAggregateInput, { nullable: true })
], MealPlanGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_avg_aggregate_input_1.MealPlanAvgAggregateInput, { nullable: true })
], MealPlanGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_sum_aggregate_input_1.MealPlanSumAggregateInput, { nullable: true })
], MealPlanGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_min_aggregate_input_1.MealPlanMinAggregateInput, { nullable: true })
], MealPlanGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_max_aggregate_input_1.MealPlanMaxAggregateInput, { nullable: true })
], MealPlanGroupByArgs.prototype, "_max", void 0);
MealPlanGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MealPlanGroupByArgs);
exports.MealPlanGroupByArgs = MealPlanGroupByArgs;
//# sourceMappingURL=meal-plan-group-by.args.js.map