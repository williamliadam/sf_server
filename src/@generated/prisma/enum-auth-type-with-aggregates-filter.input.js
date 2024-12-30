"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAuthTypeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const auth_type_enum_1 = require("./auth-type.enum");
const nested_enum_auth_type_with_aggregates_filter_input_1 = require("./nested-enum-auth-type-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_auth_type_filter_input_1 = require("./nested-enum-auth-type-filter.input");
let EnumAuthTypeWithAggregatesFilter = class EnumAuthTypeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: true })
], EnumAuthTypeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [auth_type_enum_1.AuthType], { nullable: true })
], EnumAuthTypeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [auth_type_enum_1.AuthType], { nullable: true })
], EnumAuthTypeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_auth_type_with_aggregates_filter_input_1.NestedEnumAuthTypeWithAggregatesFilter, { nullable: true })
], EnumAuthTypeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true })
], EnumAuthTypeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_auth_type_filter_input_1.NestedEnumAuthTypeFilter, { nullable: true })
], EnumAuthTypeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_auth_type_filter_input_1.NestedEnumAuthTypeFilter, { nullable: true })
], EnumAuthTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumAuthTypeWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumAuthTypeWithAggregatesFilter);
exports.EnumAuthTypeWithAggregatesFilter = EnumAuthTypeWithAggregatesFilter;
//# sourceMappingURL=enum-auth-type-with-aggregates-filter.input.js.map