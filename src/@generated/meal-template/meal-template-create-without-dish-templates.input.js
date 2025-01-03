"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateCreateWithoutDishTemplatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_nested_one_without_my_meal_templates_input_1 = require("../user/user-create-nested-one-without-my-meal-templates.input");
let MealTemplateCreateWithoutDishTemplatesInput = class MealTemplateCreateWithoutDishTemplatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MealTemplateCreateWithoutDishTemplatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateCreateWithoutDishTemplatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateCreateWithoutDishTemplatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_my_meal_templates_input_1.UserCreateNestedOneWithoutMyMealTemplatesInput, { nullable: false })
], MealTemplateCreateWithoutDishTemplatesInput.prototype, "createBy", void 0);
MealTemplateCreateWithoutDishTemplatesInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateCreateWithoutDishTemplatesInput);
exports.MealTemplateCreateWithoutDishTemplatesInput = MealTemplateCreateWithoutDishTemplatesInput;
//# sourceMappingURL=meal-template-create-without-dish-templates.input.js.map