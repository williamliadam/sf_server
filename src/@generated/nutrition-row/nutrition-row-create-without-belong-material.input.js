"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowCreateWithoutBelongMaterialInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_create_nested_one_without_used_row_input_1 = require("../nutrition/nutrition-create-nested-one-without-used-row.input");
let NutritionRowCreateWithoutBelongMaterialInput = class NutritionRowCreateWithoutBelongMaterialInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], NutritionRowCreateWithoutBelongMaterialInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NutritionRowCreateWithoutBelongMaterialInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NutritionRowCreateWithoutBelongMaterialInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_nested_one_without_used_row_input_1.NutritionCreateNestedOneWithoutUsedRowInput, { nullable: false })
], NutritionRowCreateWithoutBelongMaterialInput.prototype, "nutirtion", void 0);
NutritionRowCreateWithoutBelongMaterialInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowCreateWithoutBelongMaterialInput);
exports.NutritionRowCreateWithoutBelongMaterialInput = NutritionRowCreateWithoutBelongMaterialInput;
//# sourceMappingURL=nutrition-row-create-without-belong-material.input.js.map