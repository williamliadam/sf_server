"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_where_input_1 = require("./recipe-where.input");
const class_transformer_1 = require("class-transformer");
const recipe_order_by_with_relation_input_1 = require("./recipe-order-by-with-relation.input");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const recipe_count_aggregate_input_1 = require("./recipe-count-aggregate.input");
const recipe_avg_aggregate_input_1 = require("./recipe-avg-aggregate.input");
const recipe_sum_aggregate_input_1 = require("./recipe-sum-aggregate.input");
const recipe_min_aggregate_input_1 = require("./recipe-min-aggregate.input");
const recipe_max_aggregate_input_1 = require("./recipe-max-aggregate.input");
let RecipeAggregateArgs = class RecipeAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_where_input_1.RecipeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_input_1.RecipeWhereInput)
], RecipeAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_order_by_with_relation_input_1.RecipeOrderByWithRelationInput], { nullable: true })
], RecipeAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: true })
], RecipeAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], RecipeAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], RecipeAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_count_aggregate_input_1.RecipeCountAggregateInput, { nullable: true })
], RecipeAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_avg_aggregate_input_1.RecipeAvgAggregateInput, { nullable: true })
], RecipeAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_sum_aggregate_input_1.RecipeSumAggregateInput, { nullable: true })
], RecipeAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_min_aggregate_input_1.RecipeMinAggregateInput, { nullable: true })
], RecipeAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_max_aggregate_input_1.RecipeMaxAggregateInput, { nullable: true })
], RecipeAggregateArgs.prototype, "_max", void 0);
RecipeAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], RecipeAggregateArgs);
exports.RecipeAggregateArgs = RecipeAggregateArgs;
//# sourceMappingURL=recipe-aggregate.args.js.map