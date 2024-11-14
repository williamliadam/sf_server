"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMateriaUnitArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_create_input_1 = require("./materia-unit-create.input");
const class_transformer_1 = require("class-transformer");
let CreateOneMateriaUnitArgs = class CreateOneMateriaUnitArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_create_input_1.MateriaUnitCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_unit_create_input_1.MateriaUnitCreateInput)
], CreateOneMateriaUnitArgs.prototype, "data", void 0);
CreateOneMateriaUnitArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOneMateriaUnitArgs);
exports.CreateOneMateriaUnitArgs = CreateOneMateriaUnitArgs;
//# sourceMappingURL=create-one-materia-unit.args.js.map