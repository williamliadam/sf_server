"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_bool_nullable_filter_input_1 = require("./nested-bool-nullable-filter.input");
let BoolNullableFilter = class BoolNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BoolNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true })
], BoolNullableFilter.prototype, "not", void 0);
BoolNullableFilter = __decorate([
    (0, graphql_2.InputType)()
], BoolNullableFilter);
exports.BoolNullableFilter = BoolNullableFilter;
//# sourceMappingURL=bool-nullable-filter.input.js.map