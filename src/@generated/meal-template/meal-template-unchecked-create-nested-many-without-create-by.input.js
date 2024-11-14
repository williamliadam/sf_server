"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateUncheckedCreateNestedManyWithoutCreateByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_create_without_create_by_input_1 = require("./meal-template-create-without-create-by.input");
const class_transformer_1 = require("class-transformer");
const meal_template_create_or_connect_without_create_by_input_1 = require("./meal-template-create-or-connect-without-create-by.input");
const meal_template_create_many_create_by_input_envelope_input_1 = require("./meal-template-create-many-create-by-input-envelope.input");
const meal_template_where_unique_input_1 = require("./meal-template-where-unique.input");
let MealTemplateUncheckedCreateNestedManyWithoutCreateByInput = class MealTemplateUncheckedCreateNestedManyWithoutCreateByInput {
};
__decorate([
    (0, graphql_1.Field)(() => [meal_template_create_without_create_by_input_1.MealTemplateCreateWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_without_create_by_input_1.MealTemplateCreateWithoutCreateByInput)
], MealTemplateUncheckedCreateNestedManyWithoutCreateByInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_create_or_connect_without_create_by_input_1.MealTemplateCreateOrConnectWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_or_connect_without_create_by_input_1.MealTemplateCreateOrConnectWithoutCreateByInput)
], MealTemplateUncheckedCreateNestedManyWithoutCreateByInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_many_create_by_input_envelope_input_1.MealTemplateCreateManyCreateByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_create_many_create_by_input_envelope_input_1.MealTemplateCreateManyCreateByInputEnvelope)
], MealTemplateUncheckedCreateNestedManyWithoutCreateByInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_unique_input_1.MealTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput)
], MealTemplateUncheckedCreateNestedManyWithoutCreateByInput.prototype, "connect", void 0);
MealTemplateUncheckedCreateNestedManyWithoutCreateByInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateUncheckedCreateNestedManyWithoutCreateByInput);
exports.MealTemplateUncheckedCreateNestedManyWithoutCreateByInput = MealTemplateUncheckedCreateNestedManyWithoutCreateByInput;
//# sourceMappingURL=meal-template-unchecked-create-nested-many-without-create-by.input.js.map