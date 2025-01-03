"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowUpdateWithoutNutirtionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const material_update_one_required_without_nutrition_matrix_nested_input_1 = require("../material/material-update-one-required-without-nutrition-matrix-nested.input");
let NutritionRowUpdateWithoutNutirtionInput = class NutritionRowUpdateWithoutNutirtionInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], NutritionRowUpdateWithoutNutirtionInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], NutritionRowUpdateWithoutNutirtionInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], NutritionRowUpdateWithoutNutirtionInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_update_one_required_without_nutrition_matrix_nested_input_1.MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput, { nullable: true })
], NutritionRowUpdateWithoutNutirtionInput.prototype, "belongMaterial", void 0);
NutritionRowUpdateWithoutNutirtionInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowUpdateWithoutNutirtionInput);
exports.NutritionRowUpdateWithoutNutirtionInput = NutritionRowUpdateWithoutNutirtionInput;
//# sourceMappingURL=nutrition-row-update-without-nutirtion.input.js.map