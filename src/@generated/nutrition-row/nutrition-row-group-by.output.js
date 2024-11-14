"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_row_count_aggregate_output_1 = require("./nutrition-row-count-aggregate.output");
const nutrition_row_avg_aggregate_output_1 = require("./nutrition-row-avg-aggregate.output");
const nutrition_row_sum_aggregate_output_1 = require("./nutrition-row-sum-aggregate.output");
const nutrition_row_min_aggregate_output_1 = require("./nutrition-row-min-aggregate.output");
const nutrition_row_max_aggregate_output_1 = require("./nutrition-row-max-aggregate.output");
let NutritionRowGroupBy = class NutritionRowGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionRowGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionRowGroupBy.prototype, "nutirtionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionRowGroupBy.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionRowGroupBy.prototype, "belongToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], NutritionRowGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], NutritionRowGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_count_aggregate_output_1.NutritionRowCountAggregate, { nullable: true })
], NutritionRowGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_avg_aggregate_output_1.NutritionRowAvgAggregate, { nullable: true })
], NutritionRowGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_sum_aggregate_output_1.NutritionRowSumAggregate, { nullable: true })
], NutritionRowGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_min_aggregate_output_1.NutritionRowMinAggregate, { nullable: true })
], NutritionRowGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_max_aggregate_output_1.NutritionRowMaxAggregate, { nullable: true })
], NutritionRowGroupBy.prototype, "_max", void 0);
NutritionRowGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], NutritionRowGroupBy);
exports.NutritionRowGroupBy = NutritionRowGroupBy;
//# sourceMappingURL=nutrition-row-group-by.output.js.map