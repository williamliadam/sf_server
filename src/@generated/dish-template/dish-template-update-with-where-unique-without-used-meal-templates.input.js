"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_where_unique_input_1 = require("./dish-template-where-unique.input");
const class_transformer_1 = require("class-transformer");
const dish_template_update_without_used_meal_templates_input_1 = require("./dish-template-update-without-used-meal-templates.input");
let DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput = class DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_update_without_used_meal_templates_input_1.DishTemplateUpdateWithoutUsedMealTemplatesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => dish_template_update_without_used_meal_templates_input_1.DishTemplateUpdateWithoutUsedMealTemplatesInput)
], DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput.prototype, "data", void 0);
DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput);
exports.DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput = DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput;
//# sourceMappingURL=dish-template-update-with-where-unique-without-used-meal-templates.input.js.map