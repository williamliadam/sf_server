"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanCreateWithoutRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_create_nested_one_without_charge_dish_plans_input_1 = require("../user/user-create-nested-one-without-charge-dish-plans.input");
const meal_plan_create_nested_one_without_dish_plans_input_1 = require("../meal-plan/meal-plan-create-nested-one-without-dish-plans.input");
let DishPlanCreateWithoutRecipeInput = class DishPlanCreateWithoutRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishPlanCreateWithoutRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanCreateWithoutRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanCreateWithoutRecipeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_charge_dish_plans_input_1.UserCreateNestedOneWithoutChargeDishPlansInput, { nullable: false })
], DishPlanCreateWithoutRecipeInput.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_create_nested_one_without_dish_plans_input_1.MealPlanCreateNestedOneWithoutDishPlansInput, { nullable: true })
], DishPlanCreateWithoutRecipeInput.prototype, "usedMealPlan", void 0);
DishPlanCreateWithoutRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanCreateWithoutRecipeInput);
exports.DishPlanCreateWithoutRecipeInput = DishPlanCreateWithoutRecipeInput;
//# sourceMappingURL=dish-plan-create-without-recipe.input.js.map