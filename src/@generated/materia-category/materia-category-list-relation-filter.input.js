"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_where_input_1 = require("./materia-category-where.input");
let MateriaCategoryListRelationFilter = class MateriaCategoryListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true })
], MateriaCategoryListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true })
], MateriaCategoryListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true })
], MateriaCategoryListRelationFilter.prototype, "none", void 0);
MateriaCategoryListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryListRelationFilter);
exports.MateriaCategoryListRelationFilter = MateriaCategoryListRelationFilter;
//# sourceMappingURL=materia-category-list-relation-filter.input.js.map