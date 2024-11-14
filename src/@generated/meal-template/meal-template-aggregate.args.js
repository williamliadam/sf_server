"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_where_input_1 = require("./meal-template-where.input");
const class_transformer_1 = require("class-transformer");
const meal_template_order_by_with_relation_input_1 = require("./meal-template-order-by-with-relation.input");
const meal_template_where_unique_input_1 = require("./meal-template-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const meal_template_count_aggregate_input_1 = require("./meal-template-count-aggregate.input");
const meal_template_avg_aggregate_input_1 = require("./meal-template-avg-aggregate.input");
const meal_template_sum_aggregate_input_1 = require("./meal-template-sum-aggregate.input");
const meal_template_min_aggregate_input_1 = require("./meal-template-min-aggregate.input");
const meal_template_max_aggregate_input_1 = require("./meal-template-max-aggregate.input");
let MealTemplateAggregateArgs = class MealTemplateAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_input_1.MealTemplateWhereInput)
], MealTemplateAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_order_by_with_relation_input_1.MealTemplateOrderByWithRelationInput], { nullable: true })
], MealTemplateAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput, { nullable: true })
], MealTemplateAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealTemplateAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealTemplateAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_count_aggregate_input_1.MealTemplateCountAggregateInput, { nullable: true })
], MealTemplateAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_avg_aggregate_input_1.MealTemplateAvgAggregateInput, { nullable: true })
], MealTemplateAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_sum_aggregate_input_1.MealTemplateSumAggregateInput, { nullable: true })
], MealTemplateAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_min_aggregate_input_1.MealTemplateMinAggregateInput, { nullable: true })
], MealTemplateAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_max_aggregate_input_1.MealTemplateMaxAggregateInput, { nullable: true })
], MealTemplateAggregateArgs.prototype, "_max", void 0);
MealTemplateAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MealTemplateAggregateArgs);
exports.MealTemplateAggregateArgs = MealTemplateAggregateArgs;
//# sourceMappingURL=meal-template-aggregate.args.js.map