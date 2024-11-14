"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitCreateNestedOneWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_create_without_ingredients_input_1 = require("./materia-unit-create-without-ingredients.input");
const class_transformer_1 = require("class-transformer");
const materia_unit_create_or_connect_without_ingredients_input_1 = require("./materia-unit-create-or-connect-without-ingredients.input");
const materia_unit_where_unique_input_1 = require("./materia-unit-where-unique.input");
let MateriaUnitCreateNestedOneWithoutIngredientsInput = class MateriaUnitCreateNestedOneWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_create_without_ingredients_input_1.MateriaUnitCreateWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_create_without_ingredients_input_1.MateriaUnitCreateWithoutIngredientsInput)
], MateriaUnitCreateNestedOneWithoutIngredientsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_create_or_connect_without_ingredients_input_1.MateriaUnitCreateOrConnectWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_create_or_connect_without_ingredients_input_1.MateriaUnitCreateOrConnectWithoutIngredientsInput)
], MateriaUnitCreateNestedOneWithoutIngredientsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput)
], MateriaUnitCreateNestedOneWithoutIngredientsInput.prototype, "connect", void 0);
MateriaUnitCreateNestedOneWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaUnitCreateNestedOneWithoutIngredientsInput);
exports.MateriaUnitCreateNestedOneWithoutIngredientsInput = MateriaUnitCreateNestedOneWithoutIngredientsInput;
//# sourceMappingURL=materia-unit-create-nested-one-without-ingredients.input.js.map