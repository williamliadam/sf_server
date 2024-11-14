"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUncheckedUpdateWithoutCategoryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nutrition_row_unchecked_update_many_without_belong_material_nested_input_1 = require("../nutrition-row/nutrition-row-unchecked-update-many-without-belong-material-nested.input");
const ingredient_unchecked_update_many_without_material_nested_input_1 = require("../ingredient/ingredient-unchecked-update-many-without-material-nested.input");
let MaterialUncheckedUpdateWithoutCategoryInput = class MaterialUncheckedUpdateWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_unchecked_update_many_without_belong_material_nested_input_1.NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "nutritionMatrix", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_unchecked_update_many_without_material_nested_input_1.IngredientUncheckedUpdateManyWithoutMaterialNestedInput, { nullable: true })
], MaterialUncheckedUpdateWithoutCategoryInput.prototype, "ingredients", void 0);
MaterialUncheckedUpdateWithoutCategoryInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUncheckedUpdateWithoutCategoryInput);
exports.MaterialUncheckedUpdateWithoutCategoryInput = MaterialUncheckedUpdateWithoutCategoryInput;
//# sourceMappingURL=material-unchecked-update-without-category.input.js.map