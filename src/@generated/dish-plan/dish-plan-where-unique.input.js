"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const dish_plan_where_input_1 = require("./dish-plan-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const recipe_relation_filter_input_1 = require("../recipe/recipe-relation-filter.input");
const meal_plan_nullable_relation_filter_input_1 = require("../meal-plan/meal-plan-nullable-relation-filter.input");
let DishPlanWhereUniqueInput = class DishPlanWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_input_1.DishPlanWhereInput], { nullable: true })
], DishPlanWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_input_1.DishPlanWhereInput], { nullable: true })
], DishPlanWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_input_1.DishPlanWhereInput], { nullable: true })
], DishPlanWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_relation_filter_input_1.RecipeRelationFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "recipe", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_nullable_relation_filter_input_1.MealPlanNullableRelationFilter, { nullable: true })
], DishPlanWhereUniqueInput.prototype, "usedMealPlan", void 0);
DishPlanWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanWhereUniqueInput);
exports.DishPlanWhereUniqueInput = DishPlanWhereUniqueInput;
//# sourceMappingURL=dish-plan-where-unique.input.js.map