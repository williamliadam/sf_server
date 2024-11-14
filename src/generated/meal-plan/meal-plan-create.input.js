"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_type_enum_1 = require("../prisma/meal-type.enum");
const dish_plan_create_nested_many_without_used_meal_plan_input_1 = require("../dish-plan/dish-plan-create-nested-many-without-used-meal-plan.input");
const user_create_nested_one_without_my_meal_plans_input_1 = require("../user/user-create-nested-one-without-my-meal-plans.input");
let MealPlanCreateInput = class MealPlanCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanCreateInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_type_enum_1.MealType, { nullable: true })
], MealPlanCreateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_nested_many_without_used_meal_plan_input_1.DishPlanCreateNestedManyWithoutUsedMealPlanInput, { nullable: true })
], MealPlanCreateInput.prototype, "dishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_my_meal_plans_input_1.UserCreateNestedOneWithoutMyMealPlansInput, { nullable: false })
], MealPlanCreateInput.prototype, "createBy", void 0);
MealPlanCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanCreateInput);
exports.MealPlanCreateInput = MealPlanCreateInput;
//# sourceMappingURL=meal-plan-create.input.js.map