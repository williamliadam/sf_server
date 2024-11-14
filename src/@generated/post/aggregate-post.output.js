"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePost = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_count_aggregate_output_1 = require("./post-count-aggregate.output");
const post_avg_aggregate_output_1 = require("./post-avg-aggregate.output");
const post_sum_aggregate_output_1 = require("./post-sum-aggregate.output");
const post_min_aggregate_output_1 = require("./post-min-aggregate.output");
const post_max_aggregate_output_1 = require("./post-max-aggregate.output");
let AggregatePost = class AggregatePost {
};
__decorate([
    (0, graphql_1.Field)(() => post_count_aggregate_output_1.PostCountAggregate, { nullable: true })
], AggregatePost.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_avg_aggregate_output_1.PostAvgAggregate, { nullable: true })
], AggregatePost.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_sum_aggregate_output_1.PostSumAggregate, { nullable: true })
], AggregatePost.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_min_aggregate_output_1.PostMinAggregate, { nullable: true })
], AggregatePost.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_max_aggregate_output_1.PostMaxAggregate, { nullable: true })
], AggregatePost.prototype, "_max", void 0);
AggregatePost = __decorate([
    (0, graphql_2.ObjectType)()
], AggregatePost);
exports.AggregatePost = AggregatePost;
//# sourceMappingURL=aggregate-post.output.js.map