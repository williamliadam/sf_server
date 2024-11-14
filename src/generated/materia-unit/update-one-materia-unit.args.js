"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMateriaUnitArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_update_input_1 = require("./materia-unit-update.input");
const class_transformer_1 = require("class-transformer");
const materia_unit_where_unique_input_1 = require("./materia-unit-where-unique.input");
let UpdateOneMateriaUnitArgs = class UpdateOneMateriaUnitArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_update_input_1.MateriaUnitUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_unit_update_input_1.MateriaUnitUpdateInput)
], UpdateOneMateriaUnitArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput)
], UpdateOneMateriaUnitArgs.prototype, "where", void 0);
UpdateOneMateriaUnitArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneMateriaUnitArgs);
exports.UpdateOneMateriaUnitArgs = UpdateOneMateriaUnitArgs;
//# sourceMappingURL=update-one-materia-unit.args.js.map