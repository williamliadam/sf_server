"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMealTypeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_type_enum_1 = require("./meal-type.enum");
const nested_enum_meal_type_with_aggregates_filter_input_1 = require("./nested-enum-meal-type-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_meal_type_filter_input_1 = require("./nested-enum-meal-type-filter.input");
let EnumMealTypeWithAggregatesFilter = class EnumMealTypeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => meal_type_enum_1.MealType, { nullable: true })
], EnumMealTypeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_type_enum_1.MealType], { nullable: true })
], EnumMealTypeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_type_enum_1.MealType], { nullable: true })
], EnumMealTypeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_meal_type_with_aggregates_filter_input_1.NestedEnumMealTypeWithAggregatesFilter, { nullable: true })
], EnumMealTypeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true })
], EnumMealTypeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_meal_type_filter_input_1.NestedEnumMealTypeFilter, { nullable: true })
], EnumMealTypeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_meal_type_filter_input_1.NestedEnumMealTypeFilter, { nullable: true })
], EnumMealTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumMealTypeWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumMealTypeWithAggregatesFilter);
exports.EnumMealTypeWithAggregatesFilter = EnumMealTypeWithAggregatesFilter;
//# sourceMappingURL=enum-meal-type-with-aggregates-filter.input.js.map