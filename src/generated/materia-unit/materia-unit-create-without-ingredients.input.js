"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitCreateWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let MateriaUnitCreateWithoutIngredientsInput = class MateriaUnitCreateWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnitCreateWithoutIngredientsInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnitCreateWithoutIngredientsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MateriaUnitCreateWithoutIngredientsInput.prototype, "toKilo", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaUnitCreateWithoutIngredientsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaUnitCreateWithoutIngredientsInput.prototype, "updatedAt", void 0);
MateriaUnitCreateWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaUnitCreateWithoutIngredientsInput);
exports.MateriaUnitCreateWithoutIngredientsInput = MateriaUnitCreateWithoutIngredientsInput;
//# sourceMappingURL=materia-unit-create-without-ingredients.input.js.map