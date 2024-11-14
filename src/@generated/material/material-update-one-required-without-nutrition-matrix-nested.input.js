"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_create_without_nutrition_matrix_input_1 = require("./material-create-without-nutrition-matrix.input");
const class_transformer_1 = require("class-transformer");
const material_create_or_connect_without_nutrition_matrix_input_1 = require("./material-create-or-connect-without-nutrition-matrix.input");
const material_upsert_without_nutrition_matrix_input_1 = require("./material-upsert-without-nutrition-matrix.input");
const material_where_unique_input_1 = require("./material-where-unique.input");
const material_update_to_one_with_where_without_nutrition_matrix_input_1 = require("./material-update-to-one-with-where-without-nutrition-matrix.input");
let MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput = class MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => material_create_without_nutrition_matrix_input_1.MaterialCreateWithoutNutritionMatrixInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_without_nutrition_matrix_input_1.MaterialCreateWithoutNutritionMatrixInput)
], MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_or_connect_without_nutrition_matrix_input_1.MaterialCreateOrConnectWithoutNutritionMatrixInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_or_connect_without_nutrition_matrix_input_1.MaterialCreateOrConnectWithoutNutritionMatrixInput)
], MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_upsert_without_nutrition_matrix_input_1.MaterialUpsertWithoutNutritionMatrixInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_upsert_without_nutrition_matrix_input_1.MaterialUpsertWithoutNutritionMatrixInput)
], MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_unique_input_1.MaterialWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_update_to_one_with_where_without_nutrition_matrix_input_1.MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_update_to_one_with_where_without_nutrition_matrix_input_1.MaterialUpdateToOneWithWhereWithoutNutritionMatrixInput)
], MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput.prototype, "update", void 0);
MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput);
exports.MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput = MaterialUpdateOneRequiredWithoutNutritionMatrixNestedInput;
//# sourceMappingURL=material-update-one-required-without-nutrition-matrix-nested.input.js.map