"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateUpdateWithoutCreateByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const dish_template_update_many_without_used_meal_templates_nested_input_1 = require("../dish-template/dish-template-update-many-without-used-meal-templates-nested.input");
let MealTemplateUpdateWithoutCreateByInput = class MealTemplateUpdateWithoutCreateByInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MealTemplateUpdateWithoutCreateByInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealTemplateUpdateWithoutCreateByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MealTemplateUpdateWithoutCreateByInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_update_many_without_used_meal_templates_nested_input_1.DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput, { nullable: true })
], MealTemplateUpdateWithoutCreateByInput.prototype, "dishTemplates", void 0);
MealTemplateUpdateWithoutCreateByInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateUpdateWithoutCreateByInput);
exports.MealTemplateUpdateWithoutCreateByInput = MealTemplateUpdateWithoutCreateByInput;
//# sourceMappingURL=meal-template-update-without-create-by.input.js.map