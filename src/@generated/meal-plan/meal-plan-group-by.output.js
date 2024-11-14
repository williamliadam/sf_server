"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const meal_type_enum_1 = require("../prisma/meal-type.enum");
const meal_plan_count_aggregate_output_1 = require("./meal-plan-count-aggregate.output");
const meal_plan_avg_aggregate_output_1 = require("./meal-plan-avg-aggregate.output");
const meal_plan_sum_aggregate_output_1 = require("./meal-plan-sum-aggregate.output");
const meal_plan_min_aggregate_output_1 = require("./meal-plan-min-aggregate.output");
const meal_plan_max_aggregate_output_1 = require("./meal-plan-max-aggregate.output");
let MealPlanGroupBy = class MealPlanGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MealPlanGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanGroupBy.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MealPlanGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MealPlanGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MealPlanGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_type_enum_1.MealType, { nullable: false })
], MealPlanGroupBy.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_count_aggregate_output_1.MealPlanCountAggregate, { nullable: true })
], MealPlanGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_avg_aggregate_output_1.MealPlanAvgAggregate, { nullable: true })
], MealPlanGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_sum_aggregate_output_1.MealPlanSumAggregate, { nullable: true })
], MealPlanGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_min_aggregate_output_1.MealPlanMinAggregate, { nullable: true })
], MealPlanGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_max_aggregate_output_1.MealPlanMaxAggregate, { nullable: true })
], MealPlanGroupBy.prototype, "_max", void 0);
MealPlanGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], MealPlanGroupBy);
exports.MealPlanGroupBy = MealPlanGroupBy;
//# sourceMappingURL=meal-plan-group-by.output.js.map