"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUncheckedCreateNestedManyWithoutUnitInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_create_without_unit_input_1 = require("./ingredient-create-without-unit.input");
const class_transformer_1 = require("class-transformer");
const ingredient_create_or_connect_without_unit_input_1 = require("./ingredient-create-or-connect-without-unit.input");
const ingredient_create_many_unit_input_envelope_input_1 = require("./ingredient-create-many-unit-input-envelope.input");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
let IngredientUncheckedCreateNestedManyWithoutUnitInput = class IngredientUncheckedCreateNestedManyWithoutUnitInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_without_unit_input_1.IngredientCreateWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_without_unit_input_1.IngredientCreateWithoutUnitInput)
], IngredientUncheckedCreateNestedManyWithoutUnitInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_or_connect_without_unit_input_1.IngredientCreateOrConnectWithoutUnitInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_or_connect_without_unit_input_1.IngredientCreateOrConnectWithoutUnitInput)
], IngredientUncheckedCreateNestedManyWithoutUnitInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_many_unit_input_envelope_input_1.IngredientCreateManyUnitInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_many_unit_input_envelope_input_1.IngredientCreateManyUnitInputEnvelope)
], IngredientUncheckedCreateNestedManyWithoutUnitInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUncheckedCreateNestedManyWithoutUnitInput.prototype, "connect", void 0);
IngredientUncheckedCreateNestedManyWithoutUnitInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientUncheckedCreateNestedManyWithoutUnitInput);
exports.IngredientUncheckedCreateNestedManyWithoutUnitInput = IngredientUncheckedCreateNestedManyWithoutUnitInput;
//# sourceMappingURL=ingredient-unchecked-create-nested-many-without-unit.input.js.map