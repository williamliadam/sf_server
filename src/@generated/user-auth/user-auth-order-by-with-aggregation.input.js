"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const user_auth_count_order_by_aggregate_input_1 = require("./user-auth-count-order-by-aggregate.input");
const user_auth_avg_order_by_aggregate_input_1 = require("./user-auth-avg-order-by-aggregate.input");
const user_auth_max_order_by_aggregate_input_1 = require("./user-auth-max-order-by-aggregate.input");
const user_auth_min_order_by_aggregate_input_1 = require("./user-auth-min-order-by-aggregate.input");
const user_auth_sum_order_by_aggregate_input_1 = require("./user-auth-sum-order-by-aggregate.input");
let UserAuthOrderByWithAggregationInput = class UserAuthOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_count_order_by_aggregate_input_1.UserAuthCountOrderByAggregateInput, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_avg_order_by_aggregate_input_1.UserAuthAvgOrderByAggregateInput, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_max_order_by_aggregate_input_1.UserAuthMaxOrderByAggregateInput, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_min_order_by_aggregate_input_1.UserAuthMinOrderByAggregateInput, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_sum_order_by_aggregate_input_1.UserAuthSumOrderByAggregateInput, { nullable: true })
], UserAuthOrderByWithAggregationInput.prototype, "_sum", void 0);
UserAuthOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthOrderByWithAggregationInput);
exports.UserAuthOrderByWithAggregationInput = UserAuthOrderByWithAggregationInput;
//# sourceMappingURL=user-auth-order-by-with-aggregation.input.js.map