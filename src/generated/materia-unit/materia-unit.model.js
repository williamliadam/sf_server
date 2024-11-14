"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnit = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const ingredient_model_1 = require("../ingredient/ingredient.model");
const materia_unit_count_output_1 = require("./materia-unit-count.output");
let MateriaUnit = class MateriaUnit {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], MateriaUnit.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnit.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnit.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], MateriaUnit.prototype, "toKilo", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaUnit.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaUnit.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_model_1.Ingredient], { nullable: true })
], MateriaUnit.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_count_output_1.MateriaUnitCount, { nullable: false })
], MateriaUnit.prototype, "_count", void 0);
MateriaUnit = __decorate([
    (0, graphql_2.ObjectType)()
], MateriaUnit);
exports.MateriaUnit = MateriaUnit;
//# sourceMappingURL=materia-unit.model.js.map