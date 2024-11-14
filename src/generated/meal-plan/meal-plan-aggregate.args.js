"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_where_input_1 = require("./meal-plan-where.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_order_by_with_relation_input_1 = require("./meal-plan-order-by-with-relation.input");
const meal_plan_where_unique_input_1 = require("./meal-plan-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const meal_plan_count_aggregate_input_1 = require("./meal-plan-count-aggregate.input");
const meal_plan_avg_aggregate_input_1 = require("./meal-plan-avg-aggregate.input");
const meal_plan_sum_aggregate_input_1 = require("./meal-plan-sum-aggregate.input");
const meal_plan_min_aggregate_input_1 = require("./meal-plan-min-aggregate.input");
const meal_plan_max_aggregate_input_1 = require("./meal-plan-max-aggregate.input");
let MealPlanAggregateArgs = class MealPlanAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_input_1.MealPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_input_1.MealPlanWhereInput)
], MealPlanAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_order_by_with_relation_input_1.MealPlanOrderByWithRelationInput], { nullable: true })
], MealPlanAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput, { nullable: true })
], MealPlanAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealPlanAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealPlanAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_count_aggregate_input_1.MealPlanCountAggregateInput, { nullable: true })
], MealPlanAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_avg_aggregate_input_1.MealPlanAvgAggregateInput, { nullable: true })
], MealPlanAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_sum_aggregate_input_1.MealPlanSumAggregateInput, { nullable: true })
], MealPlanAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_min_aggregate_input_1.MealPlanMinAggregateInput, { nullable: true })
], MealPlanAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_max_aggregate_input_1.MealPlanMaxAggregateInput, { nullable: true })
], MealPlanAggregateArgs.prototype, "_max", void 0);
MealPlanAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MealPlanAggregateArgs);
exports.MealPlanAggregateArgs = MealPlanAggregateArgs;
//# sourceMappingURL=meal-plan-aggregate.args.js.map