"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const auth_type_enum_1 = require("../prisma/auth-type.enum");
const user_auth_count_aggregate_output_1 = require("./user-auth-count-aggregate.output");
const user_auth_avg_aggregate_output_1 = require("./user-auth-avg-aggregate.output");
const user_auth_sum_aggregate_output_1 = require("./user-auth-sum-aggregate.output");
const user_auth_min_aggregate_output_1 = require("./user-auth-min-aggregate.output");
const user_auth_max_aggregate_output_1 = require("./user-auth-max-aggregate.output");
let UserAuthGroupBy = class UserAuthGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserAuthGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserAuthGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: false })
], UserAuthGroupBy.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthGroupBy.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthGroupBy.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserAuthGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserAuthGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_count_aggregate_output_1.UserAuthCountAggregate, { nullable: true })
], UserAuthGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_avg_aggregate_output_1.UserAuthAvgAggregate, { nullable: true })
], UserAuthGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_sum_aggregate_output_1.UserAuthSumAggregate, { nullable: true })
], UserAuthGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_min_aggregate_output_1.UserAuthMinAggregate, { nullable: true })
], UserAuthGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_max_aggregate_output_1.UserAuthMaxAggregate, { nullable: true })
], UserAuthGroupBy.prototype, "_max", void 0);
UserAuthGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], UserAuthGroupBy);
exports.UserAuthGroupBy = UserAuthGroupBy;
//# sourceMappingURL=user-auth-group-by.output.js.map