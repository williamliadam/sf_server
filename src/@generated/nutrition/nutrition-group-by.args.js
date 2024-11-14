"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_where_input_1 = require("./nutrition-where.input");
const class_transformer_1 = require("class-transformer");
const nutrition_order_by_with_aggregation_input_1 = require("./nutrition-order-by-with-aggregation.input");
const nutrition_scalar_field_enum_1 = require("./nutrition-scalar-field.enum");
const nutrition_scalar_where_with_aggregates_input_1 = require("./nutrition-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const nutrition_count_aggregate_input_1 = require("./nutrition-count-aggregate.input");
const nutrition_avg_aggregate_input_1 = require("./nutrition-avg-aggregate.input");
const nutrition_sum_aggregate_input_1 = require("./nutrition-sum-aggregate.input");
const nutrition_min_aggregate_input_1 = require("./nutrition-min-aggregate.input");
const nutrition_max_aggregate_input_1 = require("./nutrition-max-aggregate.input");
let NutritionGroupByArgs = class NutritionGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_input_1.NutritionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_where_input_1.NutritionWhereInput)
], NutritionGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_order_by_with_aggregation_input_1.NutritionOrderByWithAggregationInput], { nullable: true })
], NutritionGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_scalar_field_enum_1.NutritionScalarFieldEnum], { nullable: false })
], NutritionGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_scalar_where_with_aggregates_input_1.NutritionScalarWhereWithAggregatesInput, { nullable: true })
], NutritionGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_count_aggregate_input_1.NutritionCountAggregateInput, { nullable: true })
], NutritionGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_avg_aggregate_input_1.NutritionAvgAggregateInput, { nullable: true })
], NutritionGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_sum_aggregate_input_1.NutritionSumAggregateInput, { nullable: true })
], NutritionGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_min_aggregate_input_1.NutritionMinAggregateInput, { nullable: true })
], NutritionGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_max_aggregate_input_1.NutritionMaxAggregateInput, { nullable: true })
], NutritionGroupByArgs.prototype, "_max", void 0);
NutritionGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], NutritionGroupByArgs);
exports.NutritionGroupByArgs = NutritionGroupByArgs;
//# sourceMappingURL=nutrition-group-by.args.js.map