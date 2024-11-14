"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUncheckedUpdateWithoutCreateByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_meal_type_field_update_operations_input_1 = require("../prisma/enum-meal-type-field-update-operations.input");
const dish_plan_unchecked_update_many_without_used_meal_plan_nested_input_1 = require("../dish-plan/dish-plan-unchecked-update-many-without-used-meal-plan-nested.input");
let MealPlanUncheckedUpdateWithoutCreateByInput = class MealPlanUncheckedUpdateWithoutCreateByInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], MealPlanUncheckedUpdateWithoutCreateByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUncheckedUpdateWithoutCreateByInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUncheckedUpdateWithoutCreateByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUncheckedUpdateWithoutCreateByInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_meal_type_field_update_operations_input_1.EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
], MealPlanUncheckedUpdateWithoutCreateByInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_update_many_without_used_meal_plan_nested_input_1.DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput, { nullable: true })
], MealPlanUncheckedUpdateWithoutCreateByInput.prototype, "dishPlans", void 0);
MealPlanUncheckedUpdateWithoutCreateByInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUncheckedUpdateWithoutCreateByInput);
exports.MealPlanUncheckedUpdateWithoutCreateByInput = MealPlanUncheckedUpdateWithoutCreateByInput;
//# sourceMappingURL=meal-plan-unchecked-update-without-create-by.input.js.map