"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_count_aggregate_output_1 = require("./nutrition-count-aggregate.output");
const nutrition_avg_aggregate_output_1 = require("./nutrition-avg-aggregate.output");
const nutrition_sum_aggregate_output_1 = require("./nutrition-sum-aggregate.output");
const nutrition_min_aggregate_output_1 = require("./nutrition-min-aggregate.output");
const nutrition_max_aggregate_output_1 = require("./nutrition-max-aggregate.output");
let NutritionGroupBy = class NutritionGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], NutritionGroupBy.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], NutritionGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], NutritionGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], NutritionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_count_aggregate_output_1.NutritionCountAggregate, { nullable: true })
], NutritionGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_avg_aggregate_output_1.NutritionAvgAggregate, { nullable: true })
], NutritionGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_sum_aggregate_output_1.NutritionSumAggregate, { nullable: true })
], NutritionGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_min_aggregate_output_1.NutritionMinAggregate, { nullable: true })
], NutritionGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_max_aggregate_output_1.NutritionMaxAggregate, { nullable: true })
], NutritionGroupBy.prototype, "_max", void 0);
NutritionGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], NutritionGroupBy);
exports.NutritionGroupBy = NutritionGroupBy;
//# sourceMappingURL=nutrition-group-by.output.js.map