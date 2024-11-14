"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpsertWithoutNutritionMatrixInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_update_without_nutrition_matrix_input_1 = require("./material-update-without-nutrition-matrix.input");
const class_transformer_1 = require("class-transformer");
const material_create_without_nutrition_matrix_input_1 = require("./material-create-without-nutrition-matrix.input");
const material_where_input_1 = require("./material-where.input");
let MaterialUpsertWithoutNutritionMatrixInput = class MaterialUpsertWithoutNutritionMatrixInput {
};
__decorate([
    (0, graphql_1.Field)(() => material_update_without_nutrition_matrix_input_1.MaterialUpdateWithoutNutritionMatrixInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_update_without_nutrition_matrix_input_1.MaterialUpdateWithoutNutritionMatrixInput)
], MaterialUpsertWithoutNutritionMatrixInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_without_nutrition_matrix_input_1.MaterialCreateWithoutNutritionMatrixInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_create_without_nutrition_matrix_input_1.MaterialCreateWithoutNutritionMatrixInput)
], MaterialUpsertWithoutNutritionMatrixInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_input_1.MaterialWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_input_1.MaterialWhereInput)
], MaterialUpsertWithoutNutritionMatrixInput.prototype, "where", void 0);
MaterialUpsertWithoutNutritionMatrixInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpsertWithoutNutritionMatrixInput);
exports.MaterialUpsertWithoutNutritionMatrixInput = MaterialUpsertWithoutNutritionMatrixInput;
//# sourceMappingURL=material-upsert-without-nutrition-matrix.input.js.map