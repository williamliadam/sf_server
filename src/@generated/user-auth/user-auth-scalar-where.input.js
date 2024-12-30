"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserAuthScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_auth_type_filter_input_1 = require("../prisma/enum-auth-type-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let UserAuthScalarWhereInput = UserAuthScalarWhereInput_1 = class UserAuthScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserAuthScalarWhereInput_1], { nullable: true })
], UserAuthScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserAuthScalarWhereInput_1], { nullable: true })
], UserAuthScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserAuthScalarWhereInput_1], { nullable: true })
], UserAuthScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserAuthScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserAuthScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_auth_type_filter_input_1.EnumAuthTypeFilter, { nullable: true })
], UserAuthScalarWhereInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserAuthScalarWhereInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserAuthScalarWhereInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserAuthScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserAuthScalarWhereInput.prototype, "updatedAt", void 0);
UserAuthScalarWhereInput = UserAuthScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserAuthScalarWhereInput);
exports.UserAuthScalarWhereInput = UserAuthScalarWhereInput;
//# sourceMappingURL=user-auth-scalar-where.input.js.map