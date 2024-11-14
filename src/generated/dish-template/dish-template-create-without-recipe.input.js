"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateCreateWithoutRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const meal_template_create_nested_one_without_dish_templates_input_1 = require("../meal-template/meal-template-create-nested-one-without-dish-templates.input");
let DishTemplateCreateWithoutRecipeInput = class DishTemplateCreateWithoutRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishTemplateCreateWithoutRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishTemplateCreateWithoutRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishTemplateCreateWithoutRecipeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_nested_one_without_dish_templates_input_1.MealTemplateCreateNestedOneWithoutDishTemplatesInput, { nullable: true })
], DishTemplateCreateWithoutRecipeInput.prototype, "usedMealTemplates", void 0);
DishTemplateCreateWithoutRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateCreateWithoutRecipeInput);
exports.DishTemplateCreateWithoutRecipeInput = DishTemplateCreateWithoutRecipeInput;
//# sourceMappingURL=dish-template-create-without-recipe.input.js.map