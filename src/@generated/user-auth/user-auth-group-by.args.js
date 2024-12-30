"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_where_input_1 = require("./user-auth-where.input");
const class_transformer_1 = require("class-transformer");
const user_auth_order_by_with_aggregation_input_1 = require("./user-auth-order-by-with-aggregation.input");
const user_auth_scalar_field_enum_1 = require("./user-auth-scalar-field.enum");
const user_auth_scalar_where_with_aggregates_input_1 = require("./user-auth-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const user_auth_count_aggregate_input_1 = require("./user-auth-count-aggregate.input");
const user_auth_avg_aggregate_input_1 = require("./user-auth-avg-aggregate.input");
const user_auth_sum_aggregate_input_1 = require("./user-auth-sum-aggregate.input");
const user_auth_min_aggregate_input_1 = require("./user-auth-min-aggregate.input");
const user_auth_max_aggregate_input_1 = require("./user-auth-max-aggregate.input");
let UserAuthGroupByArgs = class UserAuthGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_input_1.UserAuthWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_where_input_1.UserAuthWhereInput)
], UserAuthGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_order_by_with_aggregation_input_1.UserAuthOrderByWithAggregationInput], { nullable: true })
], UserAuthGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_scalar_field_enum_1.UserAuthScalarFieldEnum], { nullable: false })
], UserAuthGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_scalar_where_with_aggregates_input_1.UserAuthScalarWhereWithAggregatesInput, { nullable: true })
], UserAuthGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAuthGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAuthGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_count_aggregate_input_1.UserAuthCountAggregateInput, { nullable: true })
], UserAuthGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_avg_aggregate_input_1.UserAuthAvgAggregateInput, { nullable: true })
], UserAuthGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_sum_aggregate_input_1.UserAuthSumAggregateInput, { nullable: true })
], UserAuthGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_min_aggregate_input_1.UserAuthMinAggregateInput, { nullable: true })
], UserAuthGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_max_aggregate_input_1.UserAuthMaxAggregateInput, { nullable: true })
], UserAuthGroupByArgs.prototype, "_max", void 0);
UserAuthGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UserAuthGroupByArgs);
exports.UserAuthGroupByArgs = UserAuthGroupByArgs;
//# sourceMappingURL=user-auth-group-by.args.js.map