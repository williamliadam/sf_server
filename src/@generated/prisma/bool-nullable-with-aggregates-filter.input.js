"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_bool_nullable_with_aggregates_filter_input_1 = require("./nested-bool-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_bool_nullable_filter_input_1 = require("./nested-bool-nullable-filter.input");
let BoolNullableWithAggregatesFilter = class BoolNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_with_aggregates_filter_input_1.NestedBoolNullableWithAggregatesFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "_max", void 0);
BoolNullableWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], BoolNullableWithAggregatesFilter);
exports.BoolNullableWithAggregatesFilter = BoolNullableWithAggregatesFilter;
//# sourceMappingURL=bool-nullable-with-aggregates-filter.input.js.map