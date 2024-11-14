"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DishPlanWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const recipe_relation_filter_input_1 = require("../recipe/recipe-relation-filter.input");
const meal_plan_nullable_relation_filter_input_1 = require("../meal-plan/meal-plan-nullable-relation-filter.input");
let DishPlanWhereInput = DishPlanWhereInput_1 = class DishPlanWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DishPlanWhereInput_1], { nullable: true })
], DishPlanWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishPlanWhereInput_1], { nullable: true })
], DishPlanWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishPlanWhereInput_1], { nullable: true })
], DishPlanWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanWhereInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanWhereInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], DishPlanWhereInput.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishPlanWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishPlanWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], DishPlanWhereInput.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_relation_filter_input_1.RecipeRelationFilter, { nullable: true })
], DishPlanWhereInput.prototype, "recipe", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_nullable_relation_filter_input_1.MealPlanNullableRelationFilter, { nullable: true })
], DishPlanWhereInput.prototype, "usedMealPlan", void 0);
DishPlanWhereInput = DishPlanWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DishPlanWhereInput);
exports.DishPlanWhereInput = DishPlanWhereInput;
//# sourceMappingURL=dish-plan-where.input.js.map