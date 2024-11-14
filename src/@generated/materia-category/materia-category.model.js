"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MateriaCategory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategory = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const material_model_1 = require("../material/material.model");
const materia_category_count_output_1 = require("./materia-category-count.output");
let MateriaCategory = MateriaCategory_1 = class MateriaCategory {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], MateriaCategory.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategory.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategory.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], MateriaCategory.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaCategory.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaCategory.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_model_1.Material], { nullable: true })
], MateriaCategory.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MateriaCategory_1], { nullable: true })
], MateriaCategory.prototype, "next", void 0);
__decorate([
    (0, graphql_1.Field)(() => MateriaCategory_1, { nullable: true })
], MateriaCategory.prototype, "last", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_count_output_1.MateriaCategoryCount, { nullable: false })
], MateriaCategory.prototype, "_count", void 0);
MateriaCategory = MateriaCategory_1 = __decorate([
    (0, graphql_2.ObjectType)()
], MateriaCategory);
exports.MateriaCategory = MateriaCategory;
//# sourceMappingURL=materia-category.model.js.map