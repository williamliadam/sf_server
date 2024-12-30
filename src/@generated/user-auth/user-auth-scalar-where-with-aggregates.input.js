"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserAuthScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const enum_auth_type_with_aggregates_filter_input_1 = require("../prisma/enum-auth-type-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let UserAuthScalarWhereWithAggregatesInput = UserAuthScalarWhereWithAggregatesInput_1 = class UserAuthScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserAuthScalarWhereWithAggregatesInput_1], { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserAuthScalarWhereWithAggregatesInput_1], { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserAuthScalarWhereWithAggregatesInput_1], { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_auth_type_with_aggregates_filter_input_1.EnumAuthTypeWithAggregatesFilter, { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], UserAuthScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
UserAuthScalarWhereWithAggregatesInput = UserAuthScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserAuthScalarWhereWithAggregatesInput);
exports.UserAuthScalarWhereWithAggregatesInput = UserAuthScalarWhereWithAggregatesInput;
//# sourceMappingURL=user-auth-scalar-where-with-aggregates.input.js.map