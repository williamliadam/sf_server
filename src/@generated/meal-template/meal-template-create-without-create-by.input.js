"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateCreateWithoutCreateByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_create_nested_many_without_used_meal_templates_input_1 = require("../dish-template/dish-template-create-nested-many-without-used-meal-templates.input");
let MealTemplateCreateWithoutCreateByInput = class MealTemplateCreateWithoutCreateByInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MealTemplateCreateWithoutCreateByInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateCreateWithoutCreateByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateCreateWithoutCreateByInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_create_nested_many_without_used_meal_templates_input_1.DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput, { nullable: true })
], MealTemplateCreateWithoutCreateByInput.prototype, "dishTemplates", void 0);
MealTemplateCreateWithoutCreateByInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateCreateWithoutCreateByInput);
exports.MealTemplateCreateWithoutCreateByInput = MealTemplateCreateWithoutCreateByInput;
//# sourceMappingURL=meal-template-create-without-create-by.input.js.map