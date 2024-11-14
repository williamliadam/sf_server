"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MealPlanWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const enum_meal_type_filter_input_1 = require("../prisma/enum-meal-type-filter.input");
const dish_plan_list_relation_filter_input_1 = require("../dish-plan/dish-plan-list-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let MealPlanWhereInput = MealPlanWhereInput_1 = class MealPlanWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MealPlanWhereInput_1], { nullable: true })
], MealPlanWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealPlanWhereInput_1], { nullable: true })
], MealPlanWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealPlanWhereInput_1], { nullable: true })
], MealPlanWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealPlanWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true })
], MealPlanWhereInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealPlanWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealPlanWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealPlanWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_meal_type_filter_input_1.EnumMealTypeFilter, { nullable: true })
], MealPlanWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_list_relation_filter_input_1.DishPlanListRelationFilter, { nullable: true })
], MealPlanWhereInput.prototype, "dishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], MealPlanWhereInput.prototype, "createBy", void 0);
MealPlanWhereInput = MealPlanWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MealPlanWhereInput);
exports.MealPlanWhereInput = MealPlanWhereInput;
//# sourceMappingURL=meal-plan-where.input.js.map