"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const meal_template_create_nested_one_without_dish_templates_input_1 = require("../meal-template/meal-template-create-nested-one-without-dish-templates.input");
const recipe_create_nested_one_without_used_dish_templates_input_1 = require("../recipe/recipe-create-nested-one-without-used-dish-templates.input");
let DishTemplateCreateInput = class DishTemplateCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishTemplateCreateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishTemplateCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishTemplateCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_nested_one_without_dish_templates_input_1.MealTemplateCreateNestedOneWithoutDishTemplatesInput, { nullable: true })
], DishTemplateCreateInput.prototype, "usedMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_nested_one_without_used_dish_templates_input_1.RecipeCreateNestedOneWithoutUsedDishTemplatesInput, { nullable: false })
], DishTemplateCreateInput.prototype, "recipe", void 0);
DishTemplateCreateInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateCreateInput);
exports.DishTemplateCreateInput = DishTemplateCreateInput;
//# sourceMappingURL=dish-template-create.input.js.map