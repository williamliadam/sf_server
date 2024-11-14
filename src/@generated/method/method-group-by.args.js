"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_where_input_1 = require("./method-where.input");
const class_transformer_1 = require("class-transformer");
const method_order_by_with_aggregation_input_1 = require("./method-order-by-with-aggregation.input");
const method_scalar_field_enum_1 = require("./method-scalar-field.enum");
const method_scalar_where_with_aggregates_input_1 = require("./method-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const method_count_aggregate_input_1 = require("./method-count-aggregate.input");
const method_avg_aggregate_input_1 = require("./method-avg-aggregate.input");
const method_sum_aggregate_input_1 = require("./method-sum-aggregate.input");
const method_min_aggregate_input_1 = require("./method-min-aggregate.input");
const method_max_aggregate_input_1 = require("./method-max-aggregate.input");
let MethodGroupByArgs = class MethodGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => method_where_input_1.MethodWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_input_1.MethodWhereInput)
], MethodGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_order_by_with_aggregation_input_1.MethodOrderByWithAggregationInput], { nullable: true })
], MethodGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_scalar_field_enum_1.MethodScalarFieldEnum], { nullable: false })
], MethodGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_scalar_where_with_aggregates_input_1.MethodScalarWhereWithAggregatesInput, { nullable: true })
], MethodGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MethodGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MethodGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_count_aggregate_input_1.MethodCountAggregateInput, { nullable: true })
], MethodGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_avg_aggregate_input_1.MethodAvgAggregateInput, { nullable: true })
], MethodGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_sum_aggregate_input_1.MethodSumAggregateInput, { nullable: true })
], MethodGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_min_aggregate_input_1.MethodMinAggregateInput, { nullable: true })
], MethodGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_max_aggregate_input_1.MethodMaxAggregateInput, { nullable: true })
], MethodGroupByArgs.prototype, "_max", void 0);
MethodGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MethodGroupByArgs);
exports.MethodGroupByArgs = MethodGroupByArgs;
//# sourceMappingURL=method-group-by.args.js.map