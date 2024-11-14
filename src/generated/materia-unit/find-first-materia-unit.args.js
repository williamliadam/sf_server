"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMateriaUnitArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_where_input_1 = require("./materia-unit-where.input");
const class_transformer_1 = require("class-transformer");
const materia_unit_order_by_with_relation_input_1 = require("./materia-unit-order-by-with-relation.input");
const materia_unit_where_unique_input_1 = require("./materia-unit-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const materia_unit_scalar_field_enum_1 = require("./materia-unit-scalar-field.enum");
let FindFirstMateriaUnitArgs = class FindFirstMateriaUnitArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_input_1.MateriaUnitWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_where_input_1.MateriaUnitWhereInput)
], FindFirstMateriaUnitArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_unit_order_by_with_relation_input_1.MateriaUnitOrderByWithRelationInput], { nullable: true })
], FindFirstMateriaUnitArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput, { nullable: true })
], FindFirstMateriaUnitArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMateriaUnitArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMateriaUnitArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_unit_scalar_field_enum_1.MateriaUnitScalarFieldEnum], { nullable: true })
], FindFirstMateriaUnitArgs.prototype, "distinct", void 0);
FindFirstMateriaUnitArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstMateriaUnitArgs);
exports.FindFirstMateriaUnitArgs = FindFirstMateriaUnitArgs;
//# sourceMappingURL=find-first-materia-unit.args.js.map