"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitUpsertWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_update_without_ingredients_input_1 = require("./materia-unit-update-without-ingredients.input");
const class_transformer_1 = require("class-transformer");
const materia_unit_create_without_ingredients_input_1 = require("./materia-unit-create-without-ingredients.input");
const materia_unit_where_input_1 = require("./materia-unit-where.input");
let MateriaUnitUpsertWithoutIngredientsInput = class MateriaUnitUpsertWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_update_without_ingredients_input_1.MateriaUnitUpdateWithoutIngredientsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_unit_update_without_ingredients_input_1.MateriaUnitUpdateWithoutIngredientsInput)
], MateriaUnitUpsertWithoutIngredientsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_create_without_ingredients_input_1.MateriaUnitCreateWithoutIngredientsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_unit_create_without_ingredients_input_1.MateriaUnitCreateWithoutIngredientsInput)
], MateriaUnitUpsertWithoutIngredientsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_input_1.MateriaUnitWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_where_input_1.MateriaUnitWhereInput)
], MateriaUnitUpsertWithoutIngredientsInput.prototype, "where", void 0);
MateriaUnitUpsertWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaUnitUpsertWithoutIngredientsInput);
exports.MateriaUnitUpsertWithoutIngredientsInput = MateriaUnitUpsertWithoutIngredientsInput;
//# sourceMappingURL=materia-unit-upsert-without-ingredients.input.js.map