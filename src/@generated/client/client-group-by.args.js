"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_where_input_1 = require("./client-where.input");
const class_transformer_1 = require("class-transformer");
const client_order_by_with_aggregation_input_1 = require("./client-order-by-with-aggregation.input");
const client_scalar_field_enum_1 = require("./client-scalar-field.enum");
const client_scalar_where_with_aggregates_input_1 = require("./client-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const client_count_aggregate_input_1 = require("./client-count-aggregate.input");
const client_avg_aggregate_input_1 = require("./client-avg-aggregate.input");
const client_sum_aggregate_input_1 = require("./client-sum-aggregate.input");
const client_min_aggregate_input_1 = require("./client-min-aggregate.input");
const client_max_aggregate_input_1 = require("./client-max-aggregate.input");
let ClientGroupByArgs = class ClientGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => client_where_input_1.ClientWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => client_where_input_1.ClientWhereInput)
], ClientGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_order_by_with_aggregation_input_1.ClientOrderByWithAggregationInput], { nullable: true })
], ClientGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_scalar_field_enum_1.ClientScalarFieldEnum], { nullable: false })
], ClientGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_scalar_where_with_aggregates_input_1.ClientScalarWhereWithAggregatesInput, { nullable: true })
], ClientGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_count_aggregate_input_1.ClientCountAggregateInput, { nullable: true })
], ClientGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_avg_aggregate_input_1.ClientAvgAggregateInput, { nullable: true })
], ClientGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_sum_aggregate_input_1.ClientSumAggregateInput, { nullable: true })
], ClientGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_min_aggregate_input_1.ClientMinAggregateInput, { nullable: true })
], ClientGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_max_aggregate_input_1.ClientMaxAggregateInput, { nullable: true })
], ClientGroupByArgs.prototype, "_max", void 0);
ClientGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ClientGroupByArgs);
exports.ClientGroupByArgs = ClientGroupByArgs;
//# sourceMappingURL=client-group-by.args.js.map