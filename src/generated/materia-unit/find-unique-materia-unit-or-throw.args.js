"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMateriaUnitOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_where_unique_input_1 = require("./materia-unit-where-unique.input");
const class_transformer_1 = require("class-transformer");
let FindUniqueMateriaUnitOrThrowArgs = class FindUniqueMateriaUnitOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput)
], FindUniqueMateriaUnitOrThrowArgs.prototype, "where", void 0);
FindUniqueMateriaUnitOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueMateriaUnitOrThrowArgs);
exports.FindUniqueMateriaUnitOrThrowArgs = FindUniqueMateriaUnitOrThrowArgs;
//# sourceMappingURL=find-unique-materia-unit-or-throw.args.js.map