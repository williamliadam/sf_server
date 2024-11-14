"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const materia_category_model_1 = require("../materia-category/materia-category.model");
const nutrition_row_model_1 = require("../nutrition-row/nutrition-row.model");
const ingredient_model_1 = require("../ingredient/ingredient.model");
const material_count_output_1 = require("./material-count.output");
let Material = class Material {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Material.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Material.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Material.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Material.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Material.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Material.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Material.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_model_1.MateriaCategory, { nullable: false })
], Material.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_model_1.NutritionRow], { nullable: true })
], Material.prototype, "nutritionMatrix", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_model_1.Ingredient], { nullable: true })
], Material.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_count_output_1.MaterialCount, { nullable: false })
], Material.prototype, "_count", void 0);
Material = __decorate([
    (0, graphql_2.ObjectType)()
], Material);
exports.Material = Material;
//# sourceMappingURL=material.model.js.map