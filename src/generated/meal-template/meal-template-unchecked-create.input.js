"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const dish_template_unchecked_create_nested_many_without_used_meal_templates_input_1 = require("../dish-template/dish-template-unchecked-create-nested-many-without-used-meal-templates.input");
let MealTemplateUncheckedCreateInput = class MealTemplateUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealTemplateUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MealTemplateUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MealTemplateUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealTemplateUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_unchecked_create_nested_many_without_used_meal_templates_input_1.DishTemplateUncheckedCreateNestedManyWithoutUsedMealTemplatesInput, { nullable: true })
], MealTemplateUncheckedCreateInput.prototype, "dishTemplates", void 0);
MealTemplateUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateUncheckedCreateInput);
exports.MealTemplateUncheckedCreateInput = MealTemplateUncheckedCreateInput;
//# sourceMappingURL=meal-template-unchecked-create.input.js.map