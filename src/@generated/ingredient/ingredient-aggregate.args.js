"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_where_input_1 = require("./ingredient-where.input");
const class_transformer_1 = require("class-transformer");
const ingredient_order_by_with_relation_input_1 = require("./ingredient-order-by-with-relation.input");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const ingredient_count_aggregate_input_1 = require("./ingredient-count-aggregate.input");
const ingredient_avg_aggregate_input_1 = require("./ingredient-avg-aggregate.input");
const ingredient_sum_aggregate_input_1 = require("./ingredient-sum-aggregate.input");
const ingredient_min_aggregate_input_1 = require("./ingredient-min-aggregate.input");
const ingredient_max_aggregate_input_1 = require("./ingredient-max-aggregate.input");
let IngredientAggregateArgs = class IngredientAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ingredient_where_input_1.IngredientWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_input_1.IngredientWhereInput)
], IngredientAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_order_by_with_relation_input_1.IngredientOrderByWithRelationInput], { nullable: true })
], IngredientAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput, { nullable: true })
], IngredientAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_count_aggregate_input_1.IngredientCountAggregateInput, { nullable: true })
], IngredientAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_avg_aggregate_input_1.IngredientAvgAggregateInput, { nullable: true })
], IngredientAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_sum_aggregate_input_1.IngredientSumAggregateInput, { nullable: true })
], IngredientAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_min_aggregate_input_1.IngredientMinAggregateInput, { nullable: true })
], IngredientAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_max_aggregate_input_1.IngredientMaxAggregateInput, { nullable: true })
], IngredientAggregateArgs.prototype, "_max", void 0);
IngredientAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], IngredientAggregateArgs);
exports.IngredientAggregateArgs = IngredientAggregateArgs;
//# sourceMappingURL=ingredient-aggregate.args.js.map