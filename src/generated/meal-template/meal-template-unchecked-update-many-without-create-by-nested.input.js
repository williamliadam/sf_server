"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_create_without_create_by_input_1 = require("./meal-template-create-without-create-by.input");
const class_transformer_1 = require("class-transformer");
const meal_template_create_or_connect_without_create_by_input_1 = require("./meal-template-create-or-connect-without-create-by.input");
const meal_template_upsert_with_where_unique_without_create_by_input_1 = require("./meal-template-upsert-with-where-unique-without-create-by.input");
const meal_template_create_many_create_by_input_envelope_input_1 = require("./meal-template-create-many-create-by-input-envelope.input");
const meal_template_where_unique_input_1 = require("./meal-template-where-unique.input");
const meal_template_update_with_where_unique_without_create_by_input_1 = require("./meal-template-update-with-where-unique-without-create-by.input");
const meal_template_update_many_with_where_without_create_by_input_1 = require("./meal-template-update-many-with-where-without-create-by.input");
const meal_template_scalar_where_input_1 = require("./meal-template-scalar-where.input");
let MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput = class MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [meal_template_create_without_create_by_input_1.MealTemplateCreateWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_without_create_by_input_1.MealTemplateCreateWithoutCreateByInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_create_or_connect_without_create_by_input_1.MealTemplateCreateOrConnectWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_or_connect_without_create_by_input_1.MealTemplateCreateOrConnectWithoutCreateByInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_upsert_with_where_unique_without_create_by_input_1.MealTemplateUpsertWithWhereUniqueWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_upsert_with_where_unique_without_create_by_input_1.MealTemplateUpsertWithWhereUniqueWithoutCreateByInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_many_create_by_input_envelope_input_1.MealTemplateCreateManyCreateByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_many_create_by_input_envelope_input_1.MealTemplateCreateManyCreateByInputEnvelope)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_unique_input_1.MealTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_unique_input_1.MealTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_unique_input_1.MealTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_unique_input_1.MealTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_update_with_where_unique_without_create_by_input_1.MealTemplateUpdateWithWhereUniqueWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_update_with_where_unique_without_create_by_input_1.MealTemplateUpdateWithWhereUniqueWithoutCreateByInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_update_many_with_where_without_create_by_input_1.MealTemplateUpdateManyWithWhereWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_update_many_with_where_without_create_by_input_1.MealTemplateUpdateManyWithWhereWithoutCreateByInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_scalar_where_input_1.MealTemplateScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_scalar_where_input_1.MealTemplateScalarWhereInput)
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput.prototype, "deleteMany", void 0);
MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput);
exports.MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput = MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput;
//# sourceMappingURL=meal-template-unchecked-update-many-without-create-by-nested.input.js.map