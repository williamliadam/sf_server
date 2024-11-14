"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MateriaUnitWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const ingredient_list_relation_filter_input_1 = require("../ingredient/ingredient-list-relation-filter.input");
let MateriaUnitWhereInput = MateriaUnitWhereInput_1 = class MateriaUnitWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MateriaUnitWhereInput_1], { nullable: true })
], MateriaUnitWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MateriaUnitWhereInput_1], { nullable: true })
], MateriaUnitWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MateriaUnitWhereInput_1], { nullable: true })
], MateriaUnitWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MateriaUnitWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MateriaUnitWhereInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MateriaUnitWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MateriaUnitWhereInput.prototype, "toKilo", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MateriaUnitWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MateriaUnitWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_list_relation_filter_input_1.IngredientListRelationFilter, { nullable: true })
], MateriaUnitWhereInput.prototype, "ingredients", void 0);
MateriaUnitWhereInput = MateriaUnitWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MateriaUnitWhereInput);
exports.MateriaUnitWhereInput = MateriaUnitWhereInput;
//# sourceMappingURL=materia-unit-where.input.js.map