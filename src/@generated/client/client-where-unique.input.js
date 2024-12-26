"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const client_where_input_1 = require("./client-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let ClientWhereUniqueInput = class ClientWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_where_input_1.ClientWhereInput], { nullable: true })
], ClientWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_where_input_1.ClientWhereInput], { nullable: true })
], ClientWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_where_input_1.ClientWhereInput], { nullable: true })
], ClientWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ClientWhereUniqueInput.prototype, "updatedAt", void 0);
ClientWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ClientWhereUniqueInput);
exports.ClientWhereUniqueInput = ClientWhereUniqueInput;
//# sourceMappingURL=client-where-unique.input.js.map