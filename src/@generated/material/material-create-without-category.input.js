"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateWithoutCategoryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_create_nested_many_without_belong_material_input_1 = require("../nutrition-row/nutrition-row-create-nested-many-without-belong-material.input");
const ingredient_create_nested_many_without_material_input_1 = require("../ingredient/ingredient-create-nested-many-without-material.input");
let MaterialCreateWithoutCategoryInput = class MaterialCreateWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateWithoutCategoryInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialCreateWithoutCategoryInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialCreateWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialCreateWithoutCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_create_nested_many_without_belong_material_input_1.NutritionRowCreateNestedManyWithoutBelongMaterialInput, { nullable: true })
], MaterialCreateWithoutCategoryInput.prototype, "nutritionMatrix", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_nested_many_without_material_input_1.IngredientCreateNestedManyWithoutMaterialInput, { nullable: true })
], MaterialCreateWithoutCategoryInput.prototype, "ingredients", void 0);
MaterialCreateWithoutCategoryInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialCreateWithoutCategoryInput);
exports.MaterialCreateWithoutCategoryInput = MaterialCreateWithoutCategoryInput;
//# sourceMappingURL=material-create-without-category.input.js.map