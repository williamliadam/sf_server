"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const meal_plan_where_input_1 = require("./meal-plan-where.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const enum_meal_type_filter_input_1 = require("../prisma/enum-meal-type-filter.input");
const dish_plan_list_relation_filter_input_1 = require("../dish-plan/dish-plan-list-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let MealPlanWhereUniqueInput = class MealPlanWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_where_input_1.MealPlanWhereInput], { nullable: true })
], MealPlanWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_where_input_1.MealPlanWhereInput], { nullable: true })
], MealPlanWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_where_input_1.MealPlanWhereInput], { nullable: true })
], MealPlanWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_meal_type_filter_input_1.EnumMealTypeFilter, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_list_relation_filter_input_1.DishPlanListRelationFilter, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "dishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], MealPlanWhereUniqueInput.prototype, "createBy", void 0);
MealPlanWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanWhereUniqueInput);
exports.MealPlanWhereUniqueInput = MealPlanWhereUniqueInput;
//# sourceMappingURL=meal-plan-where-unique.input.js.map