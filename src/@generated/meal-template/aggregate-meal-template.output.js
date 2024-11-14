"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealTemplate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_count_aggregate_output_1 = require("./meal-template-count-aggregate.output");
const meal_template_avg_aggregate_output_1 = require("./meal-template-avg-aggregate.output");
const meal_template_sum_aggregate_output_1 = require("./meal-template-sum-aggregate.output");
const meal_template_min_aggregate_output_1 = require("./meal-template-min-aggregate.output");
const meal_template_max_aggregate_output_1 = require("./meal-template-max-aggregate.output");
let AggregateMealTemplate = class AggregateMealTemplate {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_count_aggregate_output_1.MealTemplateCountAggregate, { nullable: true })
], AggregateMealTemplate.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_avg_aggregate_output_1.MealTemplateAvgAggregate, { nullable: true })
], AggregateMealTemplate.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_sum_aggregate_output_1.MealTemplateSumAggregate, { nullable: true })
], AggregateMealTemplate.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_min_aggregate_output_1.MealTemplateMinAggregate, { nullable: true })
], AggregateMealTemplate.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_max_aggregate_output_1.MealTemplateMaxAggregate, { nullable: true })
], AggregateMealTemplate.prototype, "_max", void 0);
AggregateMealTemplate = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateMealTemplate);
exports.AggregateMealTemplate = AggregateMealTemplate;
//# sourceMappingURL=aggregate-meal-template.output.js.map