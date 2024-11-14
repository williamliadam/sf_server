"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUpdateManyWithoutUnitNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_create_without_unit_input_1 = require("./ingredient-create-without-unit.input");
const class_transformer_1 = require("class-transformer");
const ingredient_create_or_connect_without_unit_input_1 = require("./ingredient-create-or-connect-without-unit.input");
const ingredient_upsert_with_where_unique_without_unit_input_1 = require("./ingredient-upsert-with-where-unique-without-unit.input");
const ingredient_create_many_unit_input_envelope_input_1 = require("./ingredient-create-many-unit-input-envelope.input");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
const ingredient_update_with_where_unique_without_unit_input_1 = require("./ingredient-update-with-where-unique-without-unit.input");
const ingredient_update_many_with_where_without_unit_input_1 = require("./ingredient-update-many-with-where-without-unit.input");
const ingredient_scalar_where_input_1 = require("./ingredient-scalar-where.input");
let IngredientUpdateManyWithoutUnitNestedInput = class IngredientUpdateManyWithoutUnitNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_without_unit_input_1.IngredientCreateWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_without_unit_input_1.IngredientCreateWithoutUnitInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_or_connect_without_unit_input_1.IngredientCreateOrConnectWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_or_connect_without_unit_input_1.IngredientCreateOrConnectWithoutUnitInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_upsert_with_where_unique_without_unit_input_1.IngredientUpsertWithWhereUniqueWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_upsert_with_where_unique_without_unit_input_1.IngredientUpsertWithWhereUniqueWithoutUnitInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_many_unit_input_envelope_input_1.IngredientCreateManyUnitInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_many_unit_input_envelope_input_1.IngredientCreateManyUnitInputEnvelope)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_update_with_where_unique_without_unit_input_1.IngredientUpdateWithWhereUniqueWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_update_with_where_unique_without_unit_input_1.IngredientUpdateWithWhereUniqueWithoutUnitInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_update_many_with_where_without_unit_input_1.IngredientUpdateManyWithWhereWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_update_many_with_where_without_unit_input_1.IngredientUpdateManyWithWhereWithoutUnitInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_scalar_where_input_1.IngredientScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_scalar_where_input_1.IngredientScalarWhereInput)
], IngredientUpdateManyWithoutUnitNestedInput.prototype, "deleteMany", void 0);
IngredientUpdateManyWithoutUnitNestedInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientUpdateManyWithoutUnitNestedInput);
exports.IngredientUpdateManyWithoutUnitNestedInput = IngredientUpdateManyWithoutUnitNestedInput;
//# sourceMappingURL=ingredient-update-many-without-unit-nested.input.js.map