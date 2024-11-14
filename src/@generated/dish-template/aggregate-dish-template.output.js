"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDishTemplate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_count_aggregate_output_1 = require("./dish-template-count-aggregate.output");
const dish_template_avg_aggregate_output_1 = require("./dish-template-avg-aggregate.output");
const dish_template_sum_aggregate_output_1 = require("./dish-template-sum-aggregate.output");
const dish_template_min_aggregate_output_1 = require("./dish-template-min-aggregate.output");
const dish_template_max_aggregate_output_1 = require("./dish-template-max-aggregate.output");
let AggregateDishTemplate = class AggregateDishTemplate {
};
__decorate([
    (0, graphql_1.Field)(() => dish_template_count_aggregate_output_1.DishTemplateCountAggregate, { nullable: true })
], AggregateDishTemplate.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_avg_aggregate_output_1.DishTemplateAvgAggregate, { nullable: true })
], AggregateDishTemplate.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_sum_aggregate_output_1.DishTemplateSumAggregate, { nullable: true })
], AggregateDishTemplate.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_min_aggregate_output_1.DishTemplateMinAggregate, { nullable: true })
], AggregateDishTemplate.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_max_aggregate_output_1.DishTemplateMaxAggregate, { nullable: true })
], AggregateDishTemplate.prototype, "_max", void 0);
AggregateDishTemplate = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateDishTemplate);
exports.AggregateDishTemplate = AggregateDishTemplate;
//# sourceMappingURL=aggregate-dish-template.output.js.map