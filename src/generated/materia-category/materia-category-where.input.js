"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MateriaCategoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const material_list_relation_filter_input_1 = require("../material/material-list-relation-filter.input");
const materia_category_list_relation_filter_input_1 = require("./materia-category-list-relation-filter.input");
const materia_category_nullable_relation_filter_input_1 = require("./materia-category-nullable-relation-filter.input");
let MateriaCategoryWhereInput = MateriaCategoryWhereInput_1 = class MateriaCategoryWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MateriaCategoryWhereInput_1], { nullable: true })
], MateriaCategoryWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MateriaCategoryWhereInput_1], { nullable: true })
], MateriaCategoryWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MateriaCategoryWhereInput_1], { nullable: true })
], MateriaCategoryWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_list_relation_filter_input_1.MaterialListRelationFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_list_relation_filter_input_1.MateriaCategoryListRelationFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "next", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_nullable_relation_filter_input_1.MateriaCategoryNullableRelationFilter, { nullable: true })
], MateriaCategoryWhereInput.prototype, "last", void 0);
MateriaCategoryWhereInput = MateriaCategoryWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryWhereInput);
exports.MateriaCategoryWhereInput = MateriaCategoryWhereInput;
//# sourceMappingURL=materia-category-where.input.js.map