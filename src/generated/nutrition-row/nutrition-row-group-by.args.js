"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_where_input_1 = require("./nutrition-row-where.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_order_by_with_aggregation_input_1 = require("./nutrition-row-order-by-with-aggregation.input");
const nutrition_row_scalar_field_enum_1 = require("./nutrition-row-scalar-field.enum");
const nutrition_row_scalar_where_with_aggregates_input_1 = require("./nutrition-row-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const nutrition_row_count_aggregate_input_1 = require("./nutrition-row-count-aggregate.input");
const nutrition_row_avg_aggregate_input_1 = require("./nutrition-row-avg-aggregate.input");
const nutrition_row_sum_aggregate_input_1 = require("./nutrition-row-sum-aggregate.input");
const nutrition_row_min_aggregate_input_1 = require("./nutrition-row-min-aggregate.input");
const nutrition_row_max_aggregate_input_1 = require("./nutrition-row-max-aggregate.input");
let NutritionRowGroupByArgs = class NutritionRowGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_where_input_1.NutritionRowWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_input_1.NutritionRowWhereInput)
], NutritionRowGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_order_by_with_aggregation_input_1.NutritionRowOrderByWithAggregationInput], { nullable: true })
], NutritionRowGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_scalar_field_enum_1.NutritionRowScalarFieldEnum], { nullable: false })
], NutritionRowGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_scalar_where_with_aggregates_input_1.NutritionRowScalarWhereWithAggregatesInput, { nullable: true })
], NutritionRowGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionRowGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionRowGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_count_aggregate_input_1.NutritionRowCountAggregateInput, { nullable: true })
], NutritionRowGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_avg_aggregate_input_1.NutritionRowAvgAggregateInput, { nullable: true })
], NutritionRowGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_sum_aggregate_input_1.NutritionRowSumAggregateInput, { nullable: true })
], NutritionRowGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_min_aggregate_input_1.NutritionRowMinAggregateInput, { nullable: true })
], NutritionRowGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_max_aggregate_input_1.NutritionRowMaxAggregateInput, { nullable: true })
], NutritionRowGroupByArgs.prototype, "_max", void 0);
NutritionRowGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], NutritionRowGroupByArgs);
exports.NutritionRowGroupByArgs = NutritionRowGroupByArgs;
//# sourceMappingURL=nutrition-row-group-by.args.js.map