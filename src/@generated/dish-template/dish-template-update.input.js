"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const meal_template_update_one_without_dish_templates_nested_input_1 = require("../meal-template/meal-template-update-one-without-dish-templates-nested.input");
const recipe_update_one_required_without_used_dish_templates_nested_input_1 = require("../recipe/recipe-update-one-required-without-used-dish-templates-nested.input");
let DishTemplateUpdateInput = class DishTemplateUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], DishTemplateUpdateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishTemplateUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], DishTemplateUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_update_one_without_dish_templates_nested_input_1.MealTemplateUpdateOneWithoutDishTemplatesNestedInput, { nullable: true })
], DishTemplateUpdateInput.prototype, "usedMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_one_required_without_used_dish_templates_nested_input_1.RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput, { nullable: true })
], DishTemplateUpdateInput.prototype, "recipe", void 0);
DishTemplateUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateUpdateInput);
exports.DishTemplateUpdateInput = DishTemplateUpdateInput;
//# sourceMappingURL=dish-template-update.input.js.map