"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateWithoutNutritionMatrixInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_create_nested_one_without_materials_input_1 = require("../materia-category/materia-category-create-nested-one-without-materials.input");
const ingredient_create_nested_many_without_material_input_1 = require("../ingredient/ingredient-create-nested-many-without-material.input");
let MaterialCreateWithoutNutritionMatrixInput = class MaterialCreateWithoutNutritionMatrixInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateWithoutNutritionMatrixInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateWithoutNutritionMatrixInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateWithoutNutritionMatrixInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialCreateWithoutNutritionMatrixInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialCreateWithoutNutritionMatrixInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_nested_one_without_materials_input_1.MateriaCategoryCreateNestedOneWithoutMaterialsInput, { nullable: false })
], MaterialCreateWithoutNutritionMatrixInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_nested_many_without_material_input_1.IngredientCreateNestedManyWithoutMaterialInput, { nullable: true })
], MaterialCreateWithoutNutritionMatrixInput.prototype, "ingredients", void 0);
MaterialCreateWithoutNutritionMatrixInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialCreateWithoutNutritionMatrixInput);
exports.MaterialCreateWithoutNutritionMatrixInput = MaterialCreateWithoutNutritionMatrixInput;
//# sourceMappingURL=material-create-without-nutrition-matrix.input.js.map