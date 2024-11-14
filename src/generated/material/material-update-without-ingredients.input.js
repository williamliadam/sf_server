"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const materia_category_update_one_required_without_materials_nested_input_1 = require("../materia-category/materia-category-update-one-required-without-materials-nested.input");
const nutrition_row_update_many_without_belong_material_nested_input_1 = require("../nutrition-row/nutrition-row-update-many-without-belong-material-nested.input");
let MaterialUpdateWithoutIngredientsInput = class MaterialUpdateWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutIngredientsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutIngredientsInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutIngredientsInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutIngredientsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MaterialUpdateWithoutIngredientsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_one_required_without_materials_nested_input_1.MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput, { nullable: true })
], MaterialUpdateWithoutIngredientsInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_update_many_without_belong_material_nested_input_1.NutritionRowUpdateManyWithoutBelongMaterialNestedInput, { nullable: true })
], MaterialUpdateWithoutIngredientsInput.prototype, "nutritionMatrix", void 0);
MaterialUpdateWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpdateWithoutIngredientsInput);
exports.MaterialUpdateWithoutIngredientsInput = MaterialUpdateWithoutIngredientsInput;
//# sourceMappingURL=material-update-without-ingredients.input.js.map