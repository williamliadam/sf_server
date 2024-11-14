"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateUpdateWithoutRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const meal_template_update_one_without_dish_templates_nested_input_1 = require("../meal-template/meal-template-update-one-without-dish-templates-nested.input");
let DishTemplateUpdateWithoutRecipeInput = class DishTemplateUpdateWithoutRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishTemplateUpdateWithoutRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishTemplateUpdateWithoutRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishTemplateUpdateWithoutRecipeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_update_one_without_dish_templates_nested_input_1.MealTemplateUpdateOneWithoutDishTemplatesNestedInput, { nullable: true })
], DishTemplateUpdateWithoutRecipeInput.prototype, "usedMealTemplates", void 0);
DishTemplateUpdateWithoutRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateUpdateWithoutRecipeInput);
exports.DishTemplateUpdateWithoutRecipeInput = DishTemplateUpdateWithoutRecipeInput;
//# sourceMappingURL=dish-template-update-without-recipe.input.js.map