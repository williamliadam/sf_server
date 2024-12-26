"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClientWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let ClientWhereInput = ClientWhereInput_1 = class ClientWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ClientWhereInput_1], { nullable: true })
], ClientWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClientWhereInput_1], { nullable: true })
], ClientWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClientWhereInput_1], { nullable: true })
], ClientWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], ClientWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], ClientWhereInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ClientWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], ClientWhereInput.prototype, "updatedAt", void 0);
ClientWhereInput = ClientWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ClientWhereInput);
exports.ClientWhereInput = ClientWhereInput;
//# sourceMappingURL=client-where.input.js.map