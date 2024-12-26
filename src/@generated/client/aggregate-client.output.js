"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateClient = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_count_aggregate_output_1 = require("./client-count-aggregate.output");
const client_avg_aggregate_output_1 = require("./client-avg-aggregate.output");
const client_sum_aggregate_output_1 = require("./client-sum-aggregate.output");
const client_min_aggregate_output_1 = require("./client-min-aggregate.output");
const client_max_aggregate_output_1 = require("./client-max-aggregate.output");
let AggregateClient = class AggregateClient {
};
__decorate([
    (0, graphql_1.Field)(() => client_count_aggregate_output_1.ClientCountAggregate, { nullable: true })
], AggregateClient.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_avg_aggregate_output_1.ClientAvgAggregate, { nullable: true })
], AggregateClient.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_sum_aggregate_output_1.ClientSumAggregate, { nullable: true })
], AggregateClient.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_min_aggregate_output_1.ClientMinAggregate, { nullable: true })
], AggregateClient.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_max_aggregate_output_1.ClientMaxAggregate, { nullable: true })
], AggregateClient.prototype, "_max", void 0);
AggregateClient = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateClient);
exports.AggregateClient = AggregateClient;
//# sourceMappingURL=aggregate-client.output.js.map