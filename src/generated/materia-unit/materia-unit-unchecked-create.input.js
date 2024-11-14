"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const ingredient_unchecked_create_nested_many_without_unit_input_1 = require("../ingredient/ingredient-unchecked-create-nested-many-without-unit.input");
let MateriaUnitUncheckedCreateInput = class MateriaUnitUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaUnitUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnitUncheckedCreateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnitUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MateriaUnitUncheckedCreateInput.prototype, "toKilo", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaUnitUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaUnitUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_create_nested_many_without_unit_input_1.IngredientUncheckedCreateNestedManyWithoutUnitInput, { nullable: true })
], MateriaUnitUncheckedCreateInput.prototype, "ingredients", void 0);
MateriaUnitUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaUnitUncheckedCreateInput);
exports.MateriaUnitUncheckedCreateInput = MateriaUnitUncheckedCreateInput;
//# sourceMappingURL=materia-unit-unchecked-create.input.js.map