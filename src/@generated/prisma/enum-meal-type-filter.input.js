"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMealTypeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_type_enum_1 = require("./meal-type.enum");
const nested_enum_meal_type_filter_input_1 = require("./nested-enum-meal-type-filter.input");
let EnumMealTypeFilter = class EnumMealTypeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => meal_type_enum_1.MealType, { nullable: true })
], EnumMealTypeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_type_enum_1.MealType], { nullable: true })
], EnumMealTypeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_type_enum_1.MealType], { nullable: true })
], EnumMealTypeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_meal_type_filter_input_1.NestedEnumMealTypeFilter, { nullable: true })
], EnumMealTypeFilter.prototype, "not", void 0);
EnumMealTypeFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumMealTypeFilter);
exports.EnumMealTypeFilter = EnumMealTypeFilter;
//# sourceMappingURL=enum-meal-type-filter.input.js.map