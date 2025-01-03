"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUpdateWithoutUsedMealPlanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const user_update_one_required_without_charge_dish_plans_nested_input_1 = require("../user/user-update-one-required-without-charge-dish-plans-nested.input");
const recipe_update_one_required_without_used_dish_plans_nested_input_1 = require("../recipe/recipe-update-one-required-without-used-dish-plans-nested.input");
let DishPlanUpdateWithoutUsedMealPlanInput = class DishPlanUpdateWithoutUsedMealPlanInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishPlanUpdateWithoutUsedMealPlanInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishPlanUpdateWithoutUsedMealPlanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishPlanUpdateWithoutUsedMealPlanInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_charge_dish_plans_nested_input_1.UserUpdateOneRequiredWithoutChargeDishPlansNestedInput, { nullable: true })
], DishPlanUpdateWithoutUsedMealPlanInput.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_one_required_without_used_dish_plans_nested_input_1.RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput, { nullable: true })
], DishPlanUpdateWithoutUsedMealPlanInput.prototype, "recipe", void 0);
DishPlanUpdateWithoutUsedMealPlanInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUpdateWithoutUsedMealPlanInput);
exports.DishPlanUpdateWithoutUsedMealPlanInput = DishPlanUpdateWithoutUsedMealPlanInput;
//# sourceMappingURL=dish-plan-update-without-used-meal-plan.input.js.map