"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserAuthWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_auth_type_filter_input_1 = require("../prisma/enum-auth-type-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let UserAuthWhereInput = UserAuthWhereInput_1 = class UserAuthWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserAuthWhereInput_1], { nullable: true })
], UserAuthWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserAuthWhereInput_1], { nullable: true })
], UserAuthWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserAuthWhereInput_1], { nullable: true })
], UserAuthWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserAuthWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserAuthWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_auth_type_filter_input_1.EnumAuthTypeFilter, { nullable: true })
], UserAuthWhereInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserAuthWhereInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserAuthWhereInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserAuthWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserAuthWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], UserAuthWhereInput.prototype, "user", void 0);
UserAuthWhereInput = UserAuthWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserAuthWhereInput);
exports.UserAuthWhereInput = UserAuthWhereInput;
//# sourceMappingURL=user-auth-where.input.js.map