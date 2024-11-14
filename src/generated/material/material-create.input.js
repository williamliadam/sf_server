"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_create_nested_one_without_materials_input_1 = require("../materia-category/materia-category-create-nested-one-without-materials.input");
const nutrition_row_create_nested_many_without_belong_material_input_1 = require("../nutrition-row/nutrition-row-create-nested-many-without-belong-material.input");
const ingredient_create_nested_many_without_material_input_1 = require("../ingredient/ingredient-create-nested-many-without-material.input");
let MaterialCreateInput = class MaterialCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_nested_one_without_materials_input_1.MateriaCategoryCreateNestedOneWithoutMaterialsInput, { nullable: false })
], MaterialCreateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_create_nested_many_without_belong_material_input_1.NutritionRowCreateNestedManyWithoutBelongMaterialInput, { nullable: true })
], MaterialCreateInput.prototype, "nutritionMatrix", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_nested_many_without_material_input_1.IngredientCreateNestedManyWithoutMaterialInput, { nullable: true })
], MaterialCreateInput.prototype, "ingredients", void 0);
MaterialCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialCreateInput);
exports.MaterialCreateInput = MaterialCreateInput;
//# sourceMappingURL=material-create.input.js.map