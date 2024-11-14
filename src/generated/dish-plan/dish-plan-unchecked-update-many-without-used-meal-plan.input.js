"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput = class DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput.prototype, "updatedAt", void 0);
DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput);
exports.DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput = DishPlanUncheckedUpdateManyWithoutUsedMealPlanInput;
//# sourceMappingURL=dish-plan-unchecked-update-many-without-used-meal-plan.input.js.map