"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateUpdateOneWithoutDishTemplatesNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_create_without_dish_templates_input_1 = require("./meal-template-create-without-dish-templates.input");
const class_transformer_1 = require("class-transformer");
const meal_template_create_or_connect_without_dish_templates_input_1 = require("./meal-template-create-or-connect-without-dish-templates.input");
const meal_template_upsert_without_dish_templates_input_1 = require("./meal-template-upsert-without-dish-templates.input");
const meal_template_where_input_1 = require("./meal-template-where.input");
const meal_template_where_unique_input_1 = require("./meal-template-where-unique.input");
const meal_template_update_to_one_with_where_without_dish_templates_input_1 = require("./meal-template-update-to-one-with-where-without-dish-templates.input");
let MealTemplateUpdateOneWithoutDishTemplatesNestedInput = class MealTemplateUpdateOneWithoutDishTemplatesNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_without_dish_templates_input_1.MealTemplateCreateWithoutDishTemplatesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_without_dish_templates_input_1.MealTemplateCreateWithoutDishTemplatesInput)
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_or_connect_without_dish_templates_input_1.MealTemplateCreateOrConnectWithoutDishTemplatesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_or_connect_without_dish_templates_input_1.MealTemplateCreateOrConnectWithoutDishTemplatesInput)
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_upsert_without_dish_templates_input_1.MealTemplateUpsertWithoutDishTemplatesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_upsert_without_dish_templates_input_1.MealTemplateUpsertWithoutDishTemplatesInput)
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_input_1.MealTemplateWhereInput)
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_input_1.MealTemplateWhereInput)
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput)
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_update_to_one_with_where_without_dish_templates_input_1.MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_update_to_one_with_where_without_dish_templates_input_1.MealTemplateUpdateToOneWithWhereWithoutDishTemplatesInput)
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput.prototype, "update", void 0);
MealTemplateUpdateOneWithoutDishTemplatesNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateUpdateOneWithoutDishTemplatesNestedInput);
exports.MealTemplateUpdateOneWithoutDishTemplatesNestedInput = MealTemplateUpdateOneWithoutDishTemplatesNestedInput;
//# sourceMappingURL=meal-template-update-one-without-dish-templates-nested.input.js.map