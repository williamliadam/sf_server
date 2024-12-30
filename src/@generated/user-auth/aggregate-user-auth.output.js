"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserAuth = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_count_aggregate_output_1 = require("./user-auth-count-aggregate.output");
const user_auth_avg_aggregate_output_1 = require("./user-auth-avg-aggregate.output");
const user_auth_sum_aggregate_output_1 = require("./user-auth-sum-aggregate.output");
const user_auth_min_aggregate_output_1 = require("./user-auth-min-aggregate.output");
const user_auth_max_aggregate_output_1 = require("./user-auth-max-aggregate.output");
let AggregateUserAuth = class AggregateUserAuth {
};
__decorate([
    (0, graphql_1.Field)(() => user_auth_count_aggregate_output_1.UserAuthCountAggregate, { nullable: true })
], AggregateUserAuth.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_avg_aggregate_output_1.UserAuthAvgAggregate, { nullable: true })
], AggregateUserAuth.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_sum_aggregate_output_1.UserAuthSumAggregate, { nullable: true })
], AggregateUserAuth.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_min_aggregate_output_1.UserAuthMinAggregate, { nullable: true })
], AggregateUserAuth.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_max_aggregate_output_1.UserAuthMaxAggregate, { nullable: true })
], AggregateUserAuth.prototype, "_max", void 0);
AggregateUserAuth = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUserAuth);
exports.AggregateUserAuth = AggregateUserAuth;
//# sourceMappingURL=aggregate-user-auth.output.js.map