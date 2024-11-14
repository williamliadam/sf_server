"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateWithoutNutritionMatrixInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const materia_category_update_one_required_without_materials_nested_input_1 = require("../materia-category/materia-category-update-one-required-without-materials-nested.input");
const ingredient_update_many_without_material_nested_input_1 = require("../ingredient/ingredient-update-many-without-material-nested.input");
let MaterialUpdateWithoutNutritionMatrixInput = class MaterialUpdateWithoutNutritionMatrixInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutNutritionMatrixInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutNutritionMatrixInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutNutritionMatrixInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutNutritionMatrixInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutNutritionMatrixInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_one_required_without_materials_nested_input_1.MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput, { nullable: true })
], MaterialUpdateWithoutNutritionMatrixInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_update_many_without_material_nested_input_1.IngredientUpdateManyWithoutMaterialNestedInput, { nullable: true })
], MaterialUpdateWithoutNutritionMatrixInput.prototype, "ingredients", void 0);
MaterialUpdateWithoutNutritionMatrixInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpdateWithoutNutritionMatrixInput);
exports.MaterialUpdateWithoutNutritionMatrixInput = MaterialUpdateWithoutNutritionMatrixInput;
//# sourceMappingURL=material-update-without-nutrition-matrix.input.js.map