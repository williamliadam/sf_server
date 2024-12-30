"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_auth_where_input_1 = require("./user-auth-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_auth_type_filter_input_1 = require("../prisma/enum-auth-type-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let UserAuthWhereUniqueInput = class UserAuthWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_where_input_1.UserAuthWhereInput], { nullable: true })
], UserAuthWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_where_input_1.UserAuthWhereInput], { nullable: true })
], UserAuthWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_where_input_1.UserAuthWhereInput], { nullable: true })
], UserAuthWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_auth_type_filter_input_1.EnumAuthTypeFilter, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], UserAuthWhereUniqueInput.prototype, "user", void 0);
UserAuthWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthWhereUniqueInput);
exports.UserAuthWhereUniqueInput = UserAuthWhereUniqueInput;
//# sourceMappingURL=user-auth-where-unique.input.js.map