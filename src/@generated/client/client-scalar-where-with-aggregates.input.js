"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClientScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let ClientScalarWhereWithAggregatesInput = ClientScalarWhereWithAggregatesInput_1 = class ClientScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ClientScalarWhereWithAggregatesInput_1], { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClientScalarWhereWithAggregatesInput_1], { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClientScalarWhereWithAggregatesInput_1], { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], ClientScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
ClientScalarWhereWithAggregatesInput = ClientScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ClientScalarWhereWithAggregatesInput);
exports.ClientScalarWhereWithAggregatesInput = ClientScalarWhereWithAggregatesInput;
//# sourceMappingURL=client-scalar-where-with-aggregates.input.js.map