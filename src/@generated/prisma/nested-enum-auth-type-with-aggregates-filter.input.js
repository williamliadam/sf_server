"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedEnumAuthTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAuthTypeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const auth_type_enum_1 = require("./auth-type.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_auth_type_filter_input_1 = require("./nested-enum-auth-type-filter.input");
let NestedEnumAuthTypeWithAggregatesFilter = NestedEnumAuthTypeWithAggregatesFilter_1 = class NestedEnumAuthTypeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: true })
], NestedEnumAuthTypeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [auth_type_enum_1.AuthType], { nullable: true })
], NestedEnumAuthTypeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [auth_type_enum_1.AuthType], { nullable: true })
], NestedEnumAuthTypeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumAuthTypeWithAggregatesFilter_1, { nullable: true })
], NestedEnumAuthTypeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true })
], NestedEnumAuthTypeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_auth_type_filter_input_1.NestedEnumAuthTypeFilter, { nullable: true })
], NestedEnumAuthTypeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_auth_type_filter_input_1.NestedEnumAuthTypeFilter, { nullable: true })
], NestedEnumAuthTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumAuthTypeWithAggregatesFilter = NestedEnumAuthTypeWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumAuthTypeWithAggregatesFilter);
exports.NestedEnumAuthTypeWithAggregatesFilter = NestedEnumAuthTypeWithAggregatesFilter;
//# sourceMappingURL=nested-enum-auth-type-with-aggregates-filter.input.js.map