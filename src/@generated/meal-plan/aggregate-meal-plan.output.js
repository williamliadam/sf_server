"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealPlan = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_count_aggregate_output_1 = require("./meal-plan-count-aggregate.output");
const meal_plan_avg_aggregate_output_1 = require("./meal-plan-avg-aggregate.output");
const meal_plan_sum_aggregate_output_1 = require("./meal-plan-sum-aggregate.output");
const meal_plan_min_aggregate_output_1 = require("./meal-plan-min-aggregate.output");
const meal_plan_max_aggregate_output_1 = require("./meal-plan-max-aggregate.output");
let AggregateMealPlan = class AggregateMealPlan {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_count_aggregate_output_1.MealPlanCountAggregate, { nullable: true })
], AggregateMealPlan.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_avg_aggregate_output_1.MealPlanAvgAggregate, { nullable: true })
], AggregateMealPlan.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_sum_aggregate_output_1.MealPlanSumAggregate, { nullable: true })
], AggregateMealPlan.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_min_aggregate_output_1.MealPlanMinAggregate, { nullable: true })
], AggregateMealPlan.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_max_aggregate_output_1.MealPlanMaxAggregate, { nullable: true })
], AggregateMealPlan.prototype, "_max", void 0);
AggregateMealPlan = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateMealPlan);
exports.AggregateMealPlan = AggregateMealPlan;
//# sourceMappingURL=aggregate-meal-plan.output.js.map