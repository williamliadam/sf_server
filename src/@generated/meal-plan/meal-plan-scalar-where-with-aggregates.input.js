"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MealPlanScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const date_time_nullable_with_aggregates_filter_input_1 = require("../prisma/date-time-nullable-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const enum_meal_type_with_aggregates_filter_input_1 = require("../prisma/enum-meal-type-with-aggregates-filter.input");
let MealPlanScalarWhereWithAggregatesInput = MealPlanScalarWhereWithAggregatesInput_1 = class MealPlanScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MealPlanScalarWhereWithAggregatesInput_1], { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealPlanScalarWhereWithAggregatesInput_1], { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealPlanScalarWhereWithAggregatesInput_1], { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_with_aggregates_filter_input_1.DateTimeNullableWithAggregatesFilter, { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_meal_type_with_aggregates_filter_input_1.EnumMealTypeWithAggregatesFilter, { nullable: true })
], MealPlanScalarWhereWithAggregatesInput.prototype, "type", void 0);
MealPlanScalarWhereWithAggregatesInput = MealPlanScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MealPlanScalarWhereWithAggregatesInput);
exports.MealPlanScalarWhereWithAggregatesInput = MealPlanScalarWhereWithAggregatesInput;
//# sourceMappingURL=meal-plan-scalar-where-with-aggregates.input.js.map