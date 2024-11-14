"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUpdateWithoutRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const user_update_one_required_without_charge_dish_plans_nested_input_1 = require("../user/user-update-one-required-without-charge-dish-plans-nested.input");
const meal_plan_update_one_without_dish_plans_nested_input_1 = require("../meal-plan/meal-plan-update-one-without-dish-plans-nested.input");
let DishPlanUpdateWithoutRecipeInput = class DishPlanUpdateWithoutRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishPlanUpdateWithoutRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishPlanUpdateWithoutRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishPlanUpdateWithoutRecipeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_charge_dish_plans_nested_input_1.UserUpdateOneRequiredWithoutChargeDishPlansNestedInput, { nullable: true })
], DishPlanUpdateWithoutRecipeInput.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_update_one_without_dish_plans_nested_input_1.MealPlanUpdateOneWithoutDishPlansNestedInput, { nullable: true })
], DishPlanUpdateWithoutRecipeInput.prototype, "usedMealPlan", void 0);
DishPlanUpdateWithoutRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUpdateWithoutRecipeInput);
exports.DishPlanUpdateWithoutRecipeInput = DishPlanUpdateWithoutRecipeInput;
//# sourceMappingURL=dish-plan-update-without-recipe.input.js.map