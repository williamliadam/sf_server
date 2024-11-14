"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBodyDetail = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_count_aggregate_output_1 = require("./body-detail-count-aggregate.output");
const body_detail_avg_aggregate_output_1 = require("./body-detail-avg-aggregate.output");
const body_detail_sum_aggregate_output_1 = require("./body-detail-sum-aggregate.output");
const body_detail_min_aggregate_output_1 = require("./body-detail-min-aggregate.output");
const body_detail_max_aggregate_output_1 = require("./body-detail-max-aggregate.output");
let AggregateBodyDetail = class AggregateBodyDetail {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_count_aggregate_output_1.BodyDetailCountAggregate, { nullable: true })
], AggregateBodyDetail.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_avg_aggregate_output_1.BodyDetailAvgAggregate, { nullable: true })
], AggregateBodyDetail.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_sum_aggregate_output_1.BodyDetailSumAggregate, { nullable: true })
], AggregateBodyDetail.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_min_aggregate_output_1.BodyDetailMinAggregate, { nullable: true })
], AggregateBodyDetail.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_max_aggregate_output_1.BodyDetailMaxAggregate, { nullable: true })
], AggregateBodyDetail.prototype, "_max", void 0);
AggregateBodyDetail = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateBodyDetail);
exports.AggregateBodyDetail = AggregateBodyDetail;
//# sourceMappingURL=aggregate-body-detail.output.js.map