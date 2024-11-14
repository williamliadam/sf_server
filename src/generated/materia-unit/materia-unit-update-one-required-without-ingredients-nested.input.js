"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_create_without_ingredients_input_1 = require("./materia-unit-create-without-ingredients.input");
const class_transformer_1 = require("class-transformer");
const materia_unit_create_or_connect_without_ingredients_input_1 = require("./materia-unit-create-or-connect-without-ingredients.input");
const materia_unit_upsert_without_ingredients_input_1 = require("./materia-unit-upsert-without-ingredients.input");
const materia_unit_where_unique_input_1 = require("./materia-unit-where-unique.input");
const materia_unit_update_to_one_with_where_without_ingredients_input_1 = require("./materia-unit-update-to-one-with-where-without-ingredients.input");
let MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput = class MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_create_without_ingredients_input_1.MateriaUnitCreateWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_create_without_ingredients_input_1.MateriaUnitCreateWithoutIngredientsInput)
], MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_create_or_connect_without_ingredients_input_1.MateriaUnitCreateOrConnectWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_create_or_connect_without_ingredients_input_1.MateriaUnitCreateOrConnectWithoutIngredientsInput)
], MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_upsert_without_ingredients_input_1.MateriaUnitUpsertWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_upsert_without_ingredients_input_1.MateriaUnitUpsertWithoutIngredientsInput)
], MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput)
], MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_update_to_one_with_where_without_ingredients_input_1.MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_update_to_one_with_where_without_ingredients_input_1.MateriaUnitUpdateToOneWithWhereWithoutIngredientsInput)
], MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "update", void 0);
MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput);
exports.MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput = MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput;
//# sourceMappingURL=materia-unit-update-one-required-without-ingredients-nested.input.js.map