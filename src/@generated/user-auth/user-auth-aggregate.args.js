"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_where_input_1 = require("./user-auth-where.input");
const class_transformer_1 = require("class-transformer");
const user_auth_order_by_with_relation_input_1 = require("./user-auth-order-by-with-relation.input");
const user_auth_where_unique_input_1 = require("./user-auth-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const user_auth_count_aggregate_input_1 = require("./user-auth-count-aggregate.input");
const user_auth_avg_aggregate_input_1 = require("./user-auth-avg-aggregate.input");
const user_auth_sum_aggregate_input_1 = require("./user-auth-sum-aggregate.input");
const user_auth_min_aggregate_input_1 = require("./user-auth-min-aggregate.input");
const user_auth_max_aggregate_input_1 = require("./user-auth-max-aggregate.input");
let UserAuthAggregateArgs = class UserAuthAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_input_1.UserAuthWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_where_input_1.UserAuthWhereInput)
], UserAuthAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_order_by_with_relation_input_1.UserAuthOrderByWithRelationInput], { nullable: true })
], UserAuthAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput, { nullable: true })
], UserAuthAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAuthAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAuthAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_count_aggregate_input_1.UserAuthCountAggregateInput, { nullable: true })
], UserAuthAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_avg_aggregate_input_1.UserAuthAvgAggregateInput, { nullable: true })
], UserAuthAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_sum_aggregate_input_1.UserAuthSumAggregateInput, { nullable: true })
], UserAuthAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_min_aggregate_input_1.UserAuthMinAggregateInput, { nullable: true })
], UserAuthAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_max_aggregate_input_1.UserAuthMaxAggregateInput, { nullable: true })
], UserAuthAggregateArgs.prototype, "_max", void 0);
UserAuthAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UserAuthAggregateArgs);
exports.UserAuthAggregateArgs = UserAuthAggregateArgs;
//# sourceMappingURL=user-auth-aggregate.args.js.map