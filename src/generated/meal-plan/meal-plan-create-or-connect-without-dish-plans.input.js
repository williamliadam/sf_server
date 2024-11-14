"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanCreateOrConnectWithoutDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_where_unique_input_1 = require("./meal-plan-where-unique.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_create_without_dish_plans_input_1 = require("./meal-plan-create-without-dish-plans.input");
let MealPlanCreateOrConnectWithoutDishPlansInput = class MealPlanCreateOrConnectWithoutDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput)
], MealPlanCreateOrConnectWithoutDishPlansInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_create_without_dish_plans_input_1.MealPlanCreateWithoutDishPlansInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_plan_create_without_dish_plans_input_1.MealPlanCreateWithoutDishPlansInput)
], MealPlanCreateOrConnectWithoutDishPlansInput.prototype, "create", void 0);
MealPlanCreateOrConnectWithoutDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanCreateOrConnectWithoutDishPlansInput);
exports.MealPlanCreateOrConnectWithoutDishPlansInput = MealPlanCreateOrConnectWithoutDishPlansInput;
//# sourceMappingURL=meal-plan-create-or-connect-without-dish-plans.input.js.map