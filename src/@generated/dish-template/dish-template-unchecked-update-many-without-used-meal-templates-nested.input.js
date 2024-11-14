"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_create_without_used_meal_templates_input_1 = require("./dish-template-create-without-used-meal-templates.input");
const class_transformer_1 = require("class-transformer");
const dish_template_create_or_connect_without_used_meal_templates_input_1 = require("./dish-template-create-or-connect-without-used-meal-templates.input");
const dish_template_upsert_with_where_unique_without_used_meal_templates_input_1 = require("./dish-template-upsert-with-where-unique-without-used-meal-templates.input");
const dish_template_create_many_used_meal_templates_input_envelope_input_1 = require("./dish-template-create-many-used-meal-templates-input-envelope.input");
const dish_template_where_unique_input_1 = require("./dish-template-where-unique.input");
const dish_template_update_with_where_unique_without_used_meal_templates_input_1 = require("./dish-template-update-with-where-unique-without-used-meal-templates.input");
const dish_template_update_many_with_where_without_used_meal_templates_input_1 = require("./dish-template-update-many-with-where-without-used-meal-templates.input");
const dish_template_scalar_where_input_1 = require("./dish-template-scalar-where.input");
let DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput = class DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_template_create_without_used_meal_templates_input_1.DishTemplateCreateWithoutUsedMealTemplatesInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_without_used_meal_templates_input_1.DishTemplateCreateWithoutUsedMealTemplatesInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_create_or_connect_without_used_meal_templates_input_1.DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_or_connect_without_used_meal_templates_input_1.DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_upsert_with_where_unique_without_used_meal_templates_input_1.DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_upsert_with_where_unique_without_used_meal_templates_input_1.DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_create_many_used_meal_templates_input_envelope_input_1.DishTemplateCreateManyUsedMealTemplatesInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_many_used_meal_templates_input_envelope_input_1.DishTemplateCreateManyUsedMealTemplatesInputEnvelope)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_update_with_where_unique_without_used_meal_templates_input_1.DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_update_with_where_unique_without_used_meal_templates_input_1.DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_update_many_with_where_without_used_meal_templates_input_1.DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_update_many_with_where_without_used_meal_templates_input_1.DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_scalar_where_input_1.DishTemplateScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_scalar_where_input_1.DishTemplateScalarWhereInput)
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput.prototype, "deleteMany", void 0);
DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput);
exports.DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput = DishTemplateUncheckedUpdateManyWithoutUsedMealTemplatesNestedInput;
//# sourceMappingURL=dish-template-unchecked-update-many-without-used-meal-templates-nested.input.js.map