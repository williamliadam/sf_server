"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUncheckedCreateWithoutCategoryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_row_unchecked_create_nested_many_without_belong_material_input_1 = require("../nutrition-row/nutrition-row-unchecked-create-nested-many-without-belong-material.input");
const ingredient_unchecked_create_nested_many_without_material_input_1 = require("../ingredient/ingredient-unchecked-create-nested-many-without-material.input");
let MaterialUncheckedCreateWithoutCategoryInput = class MaterialUncheckedCreateWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_unchecked_create_nested_many_without_belong_material_input_1.NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput, { nullable: true })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "nutritionMatrix", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_create_nested_many_without_material_input_1.IngredientUncheckedCreateNestedManyWithoutMaterialInput, { nullable: true })
], MaterialUncheckedCreateWithoutCategoryInput.prototype, "ingredients", void 0);
MaterialUncheckedCreateWithoutCategoryInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUncheckedCreateWithoutCategoryInput);
exports.MaterialUncheckedCreateWithoutCategoryInput = MaterialUncheckedCreateWithoutCategoryInput;
//# sourceMappingURL=material-unchecked-create-without-category.input.js.map