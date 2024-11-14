"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_meal_type_field_update_operations_input_1 = require("../prisma/enum-meal-type-field-update-operations.input");
const dish_plan_update_many_without_used_meal_plan_nested_input_1 = require("../dish-plan/dish-plan-update-many-without-used-meal-plan-nested.input");
const user_update_one_required_without_my_meal_plans_nested_input_1 = require("../user/user-update-one-required-without-my-meal-plans-nested.input");
let MealPlanUpdateInput = class MealPlanUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_meal_type_field_update_operations_input_1.EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUpdateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_update_many_without_used_meal_plan_nested_input_1.DishPlanUpdateManyWithoutUsedMealPlanNestedInput, { nullable: true })
], MealPlanUpdateInput.prototype, "dishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_my_meal_plans_nested_input_1.UserUpdateOneRequiredWithoutMyMealPlansNestedInput, { nullable: true })
], MealPlanUpdateInput.prototype, "createBy", void 0);
MealPlanUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUpdateInput);
exports.MealPlanUpdateInput = MealPlanUpdateInput;
//# sourceMappingURL=meal-plan-update.input.js.map