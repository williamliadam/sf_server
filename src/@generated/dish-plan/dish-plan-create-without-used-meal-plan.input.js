"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanCreateWithoutUsedMealPlanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_create_nested_one_without_charge_dish_plans_input_1 = require("../user/user-create-nested-one-without-charge-dish-plans.input");
const recipe_create_nested_one_without_used_dish_plans_input_1 = require("../recipe/recipe-create-nested-one-without-used-dish-plans.input");
let DishPlanCreateWithoutUsedMealPlanInput = class DishPlanCreateWithoutUsedMealPlanInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishPlanCreateWithoutUsedMealPlanInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanCreateWithoutUsedMealPlanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanCreateWithoutUsedMealPlanInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_charge_dish_plans_input_1.UserCreateNestedOneWithoutChargeDishPlansInput, { nullable: false })
], DishPlanCreateWithoutUsedMealPlanInput.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_nested_one_without_used_dish_plans_input_1.RecipeCreateNestedOneWithoutUsedDishPlansInput, { nullable: false })
], DishPlanCreateWithoutUsedMealPlanInput.prototype, "recipe", void 0);
DishPlanCreateWithoutUsedMealPlanInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanCreateWithoutUsedMealPlanInput);
exports.DishPlanCreateWithoutUsedMealPlanInput = DishPlanCreateWithoutUsedMealPlanInput;
//# sourceMappingURL=dish-plan-create-without-used-meal-plan.input.js.map