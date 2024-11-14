"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUpdateWithoutDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_meal_type_field_update_operations_input_1 = require("../prisma/enum-meal-type-field-update-operations.input");
const user_update_one_required_without_my_meal_plans_nested_input_1 = require("../user/user-update-one-required-without-my-meal-plans-nested.input");
let MealPlanUpdateWithoutDishPlansInput = class MealPlanUpdateWithoutDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateWithoutDishPlansInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateWithoutDishPlansInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateWithoutDishPlansInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_meal_type_field_update_operations_input_1.EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateWithoutDishPlansInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_my_meal_plans_nested_input_1.UserUpdateOneRequiredWithoutMyMealPlansNestedInput, { nullable: true })
], MealPlanUpdateWithoutDishPlansInput.prototype, "createBy", void 0);
MealPlanUpdateWithoutDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUpdateWithoutDishPlansInput);
exports.MealPlanUpdateWithoutDishPlansInput = MealPlanUpdateWithoutDishPlansInput;
//# sourceMappingURL=meal-plan-update-without-dish-plans.input.js.map