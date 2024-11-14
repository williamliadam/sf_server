"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUncheckedCreateWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_row_unchecked_create_nested_many_without_belong_material_input_1 = require("../nutrition-row/nutrition-row-unchecked-create-nested-many-without-belong-material.input");
let MaterialUncheckedCreateWithoutIngredientsInput = class MaterialUncheckedCreateWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_unchecked_create_nested_many_without_belong_material_input_1.NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput, { nullable: true })
], MaterialUncheckedCreateWithoutIngredientsInput.prototype, "nutritionMatrix", void 0);
MaterialUncheckedCreateWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUncheckedCreateWithoutIngredientsInput);
exports.MaterialUncheckedCreateWithoutIngredientsInput = MaterialUncheckedCreateWithoutIngredientsInput;
//# sourceMappingURL=material-unchecked-create-without-ingredients.input.js.map