"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowCreateWithoutNutirtionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const material_create_nested_one_without_nutrition_matrix_input_1 = require("../material/material-create-nested-one-without-nutrition-matrix.input");
let NutritionRowCreateWithoutNutirtionInput = class NutritionRowCreateWithoutNutirtionInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionRowCreateWithoutNutirtionInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NutritionRowCreateWithoutNutirtionInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NutritionRowCreateWithoutNutirtionInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_nested_one_without_nutrition_matrix_input_1.MaterialCreateNestedOneWithoutNutritionMatrixInput, { nullable: false })
], NutritionRowCreateWithoutNutirtionInput.prototype, "belongMaterial", void 0);
NutritionRowCreateWithoutNutirtionInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowCreateWithoutNutirtionInput);
exports.NutritionRowCreateWithoutNutirtionInput = NutritionRowCreateWithoutNutirtionInput;
//# sourceMappingURL=nutrition-row-create-without-nutirtion.input.js.map