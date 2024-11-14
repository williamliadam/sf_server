"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_where_input_1 = require("./dish-plan-where.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_order_by_with_aggregation_input_1 = require("./dish-plan-order-by-with-aggregation.input");
const dish_plan_scalar_field_enum_1 = require("./dish-plan-scalar-field.enum");
const dish_plan_scalar_where_with_aggregates_input_1 = require("./dish-plan-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const dish_plan_count_aggregate_input_1 = require("./dish-plan-count-aggregate.input");
const dish_plan_avg_aggregate_input_1 = require("./dish-plan-avg-aggregate.input");
const dish_plan_sum_aggregate_input_1 = require("./dish-plan-sum-aggregate.input");
const dish_plan_min_aggregate_input_1 = require("./dish-plan-min-aggregate.input");
const dish_plan_max_aggregate_input_1 = require("./dish-plan-max-aggregate.input");
let DishPlanGroupByArgs = class DishPlanGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => dish_plan_where_input_1.DishPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_input_1.DishPlanWhereInput)
], DishPlanGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_order_by_with_aggregation_input_1.DishPlanOrderByWithAggregationInput], { nullable: true })
], DishPlanGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_scalar_field_enum_1.DishPlanScalarFieldEnum], { nullable: false })
], DishPlanGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_scalar_where_with_aggregates_input_1.DishPlanScalarWhereWithAggregatesInput, { nullable: true })
], DishPlanGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_count_aggregate_input_1.DishPlanCountAggregateInput, { nullable: true })
], DishPlanGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_avg_aggregate_input_1.DishPlanAvgAggregateInput, { nullable: true })
], DishPlanGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_sum_aggregate_input_1.DishPlanSumAggregateInput, { nullable: true })
], DishPlanGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_min_aggregate_input_1.DishPlanMinAggregateInput, { nullable: true })
], DishPlanGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_max_aggregate_input_1.DishPlanMaxAggregateInput, { nullable: true })
], DishPlanGroupByArgs.prototype, "_max", void 0);
DishPlanGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DishPlanGroupByArgs);
exports.DishPlanGroupByArgs = DishPlanGroupByArgs;
//# sourceMappingURL=dish-plan-group-by.args.js.map