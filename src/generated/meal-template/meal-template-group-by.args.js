"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_where_input_1 = require("./meal-template-where.input");
const class_transformer_1 = require("class-transformer");
const meal_template_order_by_with_aggregation_input_1 = require("./meal-template-order-by-with-aggregation.input");
const meal_template_scalar_field_enum_1 = require("./meal-template-scalar-field.enum");
const meal_template_scalar_where_with_aggregates_input_1 = require("./meal-template-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const meal_template_count_aggregate_input_1 = require("./meal-template-count-aggregate.input");
const meal_template_avg_aggregate_input_1 = require("./meal-template-avg-aggregate.input");
const meal_template_sum_aggregate_input_1 = require("./meal-template-sum-aggregate.input");
const meal_template_min_aggregate_input_1 = require("./meal-template-min-aggregate.input");
const meal_template_max_aggregate_input_1 = require("./meal-template-max-aggregate.input");
let MealTemplateGroupByArgs = class MealTemplateGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_input_1.MealTemplateWhereInput)
], MealTemplateGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_order_by_with_aggregation_input_1.MealTemplateOrderByWithAggregationInput], { nullable: true })
], MealTemplateGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_scalar_field_enum_1.MealTemplateScalarFieldEnum], { nullable: false })
], MealTemplateGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_scalar_where_with_aggregates_input_1.MealTemplateScalarWhereWithAggregatesInput, { nullable: true })
], MealTemplateGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealTemplateGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealTemplateGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_count_aggregate_input_1.MealTemplateCountAggregateInput, { nullable: true })
], MealTemplateGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_avg_aggregate_input_1.MealTemplateAvgAggregateInput, { nullable: true })
], MealTemplateGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_sum_aggregate_input_1.MealTemplateSumAggregateInput, { nullable: true })
], MealTemplateGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_min_aggregate_input_1.MealTemplateMinAggregateInput, { nullable: true })
], MealTemplateGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_max_aggregate_input_1.MealTemplateMaxAggregateInput, { nullable: true })
], MealTemplateGroupByArgs.prototype, "_max", void 0);
MealTemplateGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MealTemplateGroupByArgs);
exports.MealTemplateGroupByArgs = MealTemplateGroupByArgs;
//# sourceMappingURL=meal-template-group-by.args.js.map