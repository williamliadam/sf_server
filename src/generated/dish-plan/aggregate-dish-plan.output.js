"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDishPlan = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_count_aggregate_output_1 = require("./dish-plan-count-aggregate.output");
const dish_plan_avg_aggregate_output_1 = require("./dish-plan-avg-aggregate.output");
const dish_plan_sum_aggregate_output_1 = require("./dish-plan-sum-aggregate.output");
const dish_plan_min_aggregate_output_1 = require("./dish-plan-min-aggregate.output");
const dish_plan_max_aggregate_output_1 = require("./dish-plan-max-aggregate.output");
let AggregateDishPlan = class AggregateDishPlan {
};
__decorate([
    (0, graphql_1.Field)(() => dish_plan_count_aggregate_output_1.DishPlanCountAggregate, { nullable: true })
], AggregateDishPlan.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_avg_aggregate_output_1.DishPlanAvgAggregate, { nullable: true })
], AggregateDishPlan.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_sum_aggregate_output_1.DishPlanSumAggregate, { nullable: true })
], AggregateDishPlan.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_min_aggregate_output_1.DishPlanMinAggregate, { nullable: true })
], AggregateDishPlan.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_max_aggregate_output_1.DishPlanMaxAggregate, { nullable: true })
], AggregateDishPlan.prototype, "_max", void 0);
AggregateDishPlan = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateDishPlan);
exports.AggregateDishPlan = AggregateDishPlan;
//# sourceMappingURL=aggregate-dish-plan.output.js.map