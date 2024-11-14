"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_nested_one_without_my_meal_templates_input_1 = require("../user/user-create-nested-one-without-my-meal-templates.input");
const dish_template_create_nested_many_without_used_meal_templates_input_1 = require("../dish-template/dish-template-create-nested-many-without-used-meal-templates.input");
let MealTemplateCreateInput = class MealTemplateCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MealTemplateCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_my_meal_templates_input_1.UserCreateNestedOneWithoutMyMealTemplatesInput, { nullable: false })
], MealTemplateCreateInput.prototype, "createBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_create_nested_many_without_used_meal_templates_input_1.DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput, { nullable: true })
], MealTemplateCreateInput.prototype, "dishTemplates", void 0);
MealTemplateCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateCreateInput);
exports.MealTemplateCreateInput = MealTemplateCreateInput;
//# sourceMappingURL=meal-template-create.input.js.map