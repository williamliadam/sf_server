"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_where_input_1 = require("./nutrition-where.input");
const class_transformer_1 = require("class-transformer");
const nutrition_order_by_with_relation_input_1 = require("./nutrition-order-by-with-relation.input");
const nutrition_where_unique_input_1 = require("./nutrition-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const nutrition_count_aggregate_input_1 = require("./nutrition-count-aggregate.input");
const nutrition_avg_aggregate_input_1 = require("./nutrition-avg-aggregate.input");
const nutrition_sum_aggregate_input_1 = require("./nutrition-sum-aggregate.input");
const nutrition_min_aggregate_input_1 = require("./nutrition-min-aggregate.input");
const nutrition_max_aggregate_input_1 = require("./nutrition-max-aggregate.input");
let NutritionAggregateArgs = class NutritionAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_input_1.NutritionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_where_input_1.NutritionWhereInput)
], NutritionAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_order_by_with_relation_input_1.NutritionOrderByWithRelationInput], { nullable: true })
], NutritionAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput, { nullable: true })
], NutritionAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_count_aggregate_input_1.NutritionCountAggregateInput, { nullable: true })
], NutritionAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_avg_aggregate_input_1.NutritionAvgAggregateInput, { nullable: true })
], NutritionAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_sum_aggregate_input_1.NutritionSumAggregateInput, { nullable: true })
], NutritionAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_min_aggregate_input_1.NutritionMinAggregateInput, { nullable: true })
], NutritionAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_max_aggregate_input_1.NutritionMaxAggregateInput, { nullable: true })
], NutritionAggregateArgs.prototype, "_max", void 0);
NutritionAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], NutritionAggregateArgs);
exports.NutritionAggregateArgs = NutritionAggregateArgs;
//# sourceMappingURL=nutrition-aggregate.args.js.map