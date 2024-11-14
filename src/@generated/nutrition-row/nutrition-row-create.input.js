"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_create_nested_one_without_used_row_input_1 = require("../nutrition/nutrition-create-nested-one-without-used-row.input");
const material_create_nested_one_without_nutrition_matrix_input_1 = require("../material/material-create-nested-one-without-nutrition-matrix.input");
let NutritionRowCreateInput = class NutritionRowCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionRowCreateInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NutritionRowCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NutritionRowCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_nested_one_without_used_row_input_1.NutritionCreateNestedOneWithoutUsedRowInput, { nullable: false })
], NutritionRowCreateInput.prototype, "nutirtion", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_nested_one_without_nutrition_matrix_input_1.MaterialCreateNestedOneWithoutNutritionMatrixInput, { nullable: false })
], NutritionRowCreateInput.prototype, "belongMaterial", void 0);
NutritionRowCreateInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowCreateInput);
exports.NutritionRowCreateInput = NutritionRowCreateInput;
//# sourceMappingURL=nutrition-row-create.input.js.map