"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const class_transformer_1 = require("class-transformer");
const post_order_by_with_relation_input_1 = require("./post-order-by-with-relation.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const post_count_aggregate_input_1 = require("./post-count-aggregate.input");
const post_avg_aggregate_input_1 = require("./post-avg-aggregate.input");
const post_sum_aggregate_input_1 = require("./post-sum-aggregate.input");
const post_min_aggregate_input_1 = require("./post-min-aggregate.input");
const post_max_aggregate_input_1 = require("./post-max-aggregate.input");
let PostAggregateArgs = class PostAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_input_1.PostWhereInput)
], PostAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_order_by_with_relation_input_1.PostOrderByWithRelationInput], { nullable: true })
], PostAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: true })
], PostAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PostAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PostAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_count_aggregate_input_1.PostCountAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_avg_aggregate_input_1.PostAvgAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_sum_aggregate_input_1.PostSumAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_min_aggregate_input_1.PostMinAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_max_aggregate_input_1.PostMaxAggregateInput, { nullable: true })
], PostAggregateArgs.prototype, "_max", void 0);
PostAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], PostAggregateArgs);
exports.PostAggregateArgs = PostAggregateArgs;
//# sourceMappingURL=post-aggregate.args.js.map