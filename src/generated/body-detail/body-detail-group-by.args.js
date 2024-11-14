"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_where_input_1 = require("./body-detail-where.input");
const class_transformer_1 = require("class-transformer");
const body_detail_order_by_with_aggregation_input_1 = require("./body-detail-order-by-with-aggregation.input");
const body_detail_scalar_field_enum_1 = require("./body-detail-scalar-field.enum");
const body_detail_scalar_where_with_aggregates_input_1 = require("./body-detail-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const body_detail_count_aggregate_input_1 = require("./body-detail-count-aggregate.input");
const body_detail_avg_aggregate_input_1 = require("./body-detail-avg-aggregate.input");
const body_detail_sum_aggregate_input_1 = require("./body-detail-sum-aggregate.input");
const body_detail_min_aggregate_input_1 = require("./body-detail-min-aggregate.input");
const body_detail_max_aggregate_input_1 = require("./body-detail-max-aggregate.input");
let BodyDetailGroupByArgs = class BodyDetailGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_input_1.BodyDetailWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_where_input_1.BodyDetailWhereInput)
], BodyDetailGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [body_detail_order_by_with_aggregation_input_1.BodyDetailOrderByWithAggregationInput], { nullable: true })
], BodyDetailGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [body_detail_scalar_field_enum_1.BodyDetailScalarFieldEnum], { nullable: false })
], BodyDetailGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_scalar_where_with_aggregates_input_1.BodyDetailScalarWhereWithAggregatesInput, { nullable: true })
], BodyDetailGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], BodyDetailGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], BodyDetailGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_count_aggregate_input_1.BodyDetailCountAggregateInput, { nullable: true })
], BodyDetailGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_avg_aggregate_input_1.BodyDetailAvgAggregateInput, { nullable: true })
], BodyDetailGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_sum_aggregate_input_1.BodyDetailSumAggregateInput, { nullable: true })
], BodyDetailGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_min_aggregate_input_1.BodyDetailMinAggregateInput, { nullable: true })
], BodyDetailGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_max_aggregate_input_1.BodyDetailMaxAggregateInput, { nullable: true })
], BodyDetailGroupByArgs.prototype, "_max", void 0);
BodyDetailGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], BodyDetailGroupByArgs);
exports.BodyDetailGroupByArgs = BodyDetailGroupByArgs;
//# sourceMappingURL=body-detail-group-by.args.js.map