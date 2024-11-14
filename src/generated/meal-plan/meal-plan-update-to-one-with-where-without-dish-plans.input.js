"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUpdateToOneWithWhereWithoutDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_where_input_1 = require("./meal-plan-where.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_update_without_dish_plans_input_1 = require("./meal-plan-update-without-dish-plans.input");
let MealPlanUpdateToOneWithWhereWithoutDishPlansInput = class MealPlanUpdateToOneWithWhereWithoutDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_input_1.MealPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_input_1.MealPlanWhereInput)
], MealPlanUpdateToOneWithWhereWithoutDishPlansInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_update_without_dish_plans_input_1.MealPlanUpdateWithoutDishPlansInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_plan_update_without_dish_plans_input_1.MealPlanUpdateWithoutDishPlansInput)
], MealPlanUpdateToOneWithWhereWithoutDishPlansInput.prototype, "data", void 0);
MealPlanUpdateToOneWithWhereWithoutDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUpdateToOneWithWhereWithoutDishPlansInput);
exports.MealPlanUpdateToOneWithWhereWithoutDishPlansInput = MealPlanUpdateToOneWithWhereWithoutDishPlansInput;
//# sourceMappingURL=meal-plan-update-to-one-with-where-without-dish-plans.input.js.map