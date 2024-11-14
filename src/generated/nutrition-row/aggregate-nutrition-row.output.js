"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNutritionRow = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_count_aggregate_output_1 = require("./nutrition-row-count-aggregate.output");
const nutrition_row_avg_aggregate_output_1 = require("./nutrition-row-avg-aggregate.output");
const nutrition_row_sum_aggregate_output_1 = require("./nutrition-row-sum-aggregate.output");
const nutrition_row_min_aggregate_output_1 = require("./nutrition-row-min-aggregate.output");
const nutrition_row_max_aggregate_output_1 = require("./nutrition-row-max-aggregate.output");
let AggregateNutritionRow = class AggregateNutritionRow {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_count_aggregate_output_1.NutritionRowCountAggregate, { nullable: true })
], AggregateNutritionRow.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_avg_aggregate_output_1.NutritionRowAvgAggregate, { nullable: true })
], AggregateNutritionRow.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_sum_aggregate_output_1.NutritionRowSumAggregate, { nullable: true })
], AggregateNutritionRow.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_min_aggregate_output_1.NutritionRowMinAggregate, { nullable: true })
], AggregateNutritionRow.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_max_aggregate_output_1.NutritionRowMaxAggregate, { nullable: true })
], AggregateNutritionRow.prototype, "_max", void 0);
AggregateNutritionRow = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateNutritionRow);
exports.AggregateNutritionRow = AggregateNutritionRow;
//# sourceMappingURL=aggregate-nutrition-row.output.js.map