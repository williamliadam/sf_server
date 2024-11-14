"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedEnumRoleWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_role_filter_input_1 = require("./nested-enum-role-filter.input");
let NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = class NestedEnumRoleWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], NestedEnumRoleWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true })
], NestedEnumRoleWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true })
], NestedEnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumRoleWithAggregatesFilter_1, { nullable: true })
], NestedEnumRoleWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true })
], NestedEnumRoleWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_role_filter_input_1.NestedEnumRoleFilter, { nullable: true })
], NestedEnumRoleWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_role_filter_input_1.NestedEnumRoleFilter, { nullable: true })
], NestedEnumRoleWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumRoleWithAggregatesFilter);
exports.NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter;
//# sourceMappingURL=nested-enum-role-with-aggregates-filter.input.js.map