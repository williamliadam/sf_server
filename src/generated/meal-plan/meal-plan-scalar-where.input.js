"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MealPlanScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const enum_meal_type_filter_input_1 = require("../prisma/enum-meal-type-filter.input");
let MealPlanScalarWhereInput = MealPlanScalarWhereInput_1 = class MealPlanScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MealPlanScalarWhereInput_1], { nullable: true })
], MealPlanScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealPlanScalarWhereInput_1], { nullable: true })
], MealPlanScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealPlanScalarWhereInput_1], { nullable: true })
], MealPlanScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealPlanScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true })
], MealPlanScalarWhereInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealPlanScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealPlanScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealPlanScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_meal_type_filter_input_1.EnumMealTypeFilter, { nullable: true })
], MealPlanScalarWhereInput.prototype, "type", void 0);
MealPlanScalarWhereInput = MealPlanScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MealPlanScalarWhereInput);
exports.MealPlanScalarWhereInput = MealPlanScalarWhereInput;
//# sourceMappingURL=meal-plan-scalar-where.input.js.map