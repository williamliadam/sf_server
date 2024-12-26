"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_where_input_1 = require("./client-where.input");
const class_transformer_1 = require("class-transformer");
const client_order_by_with_relation_input_1 = require("./client-order-by-with-relation.input");
const client_where_unique_input_1 = require("./client-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const client_count_aggregate_input_1 = require("./client-count-aggregate.input");
const client_avg_aggregate_input_1 = require("./client-avg-aggregate.input");
const client_sum_aggregate_input_1 = require("./client-sum-aggregate.input");
const client_min_aggregate_input_1 = require("./client-min-aggregate.input");
const client_max_aggregate_input_1 = require("./client-max-aggregate.input");
let ClientAggregateArgs = class ClientAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => client_where_input_1.ClientWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => client_where_input_1.ClientWhereInput)
], ClientAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_order_by_with_relation_input_1.ClientOrderByWithRelationInput], { nullable: true })
], ClientAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_where_unique_input_1.ClientWhereUniqueInput, { nullable: true })
], ClientAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_count_aggregate_input_1.ClientCountAggregateInput, { nullable: true })
], ClientAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_avg_aggregate_input_1.ClientAvgAggregateInput, { nullable: true })
], ClientAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_sum_aggregate_input_1.ClientSumAggregateInput, { nullable: true })
], ClientAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_min_aggregate_input_1.ClientMinAggregateInput, { nullable: true })
], ClientAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_max_aggregate_input_1.ClientMaxAggregateInput, { nullable: true })
], ClientAggregateArgs.prototype, "_max", void 0);
ClientAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ClientAggregateArgs);
exports.ClientAggregateArgs = ClientAggregateArgs;
//# sourceMappingURL=client-aggregate.args.js.map