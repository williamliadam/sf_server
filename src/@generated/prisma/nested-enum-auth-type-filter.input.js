"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedEnumAuthTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAuthTypeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const auth_type_enum_1 = require("./auth-type.enum");
let NestedEnumAuthTypeFilter = NestedEnumAuthTypeFilter_1 = class NestedEnumAuthTypeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: true })
], NestedEnumAuthTypeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [auth_type_enum_1.AuthType], { nullable: true })
], NestedEnumAuthTypeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [auth_type_enum_1.AuthType], { nullable: true })
], NestedEnumAuthTypeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumAuthTypeFilter_1, { nullable: true })
], NestedEnumAuthTypeFilter.prototype, "not", void 0);
NestedEnumAuthTypeFilter = NestedEnumAuthTypeFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumAuthTypeFilter);
exports.NestedEnumAuthTypeFilter = NestedEnumAuthTypeFilter;
//# sourceMappingURL=nested-enum-auth-type-filter.input.js.map