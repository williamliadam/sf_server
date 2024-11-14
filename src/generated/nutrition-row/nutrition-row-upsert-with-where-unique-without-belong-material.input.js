"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_where_unique_input_1 = require("./nutrition-row-where-unique.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_update_without_belong_material_input_1 = require("./nutrition-row-update-without-belong-material.input");
const nutrition_row_create_without_belong_material_input_1 = require("./nutrition-row-create-without-belong-material.input");
let NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput = class NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_update_without_belong_material_input_1.NutritionRowUpdateWithoutBelongMaterialInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_update_without_belong_material_input_1.NutritionRowUpdateWithoutBelongMaterialInput)
], NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_create_without_belong_material_input_1.NutritionRowCreateWithoutBelongMaterialInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_without_belong_material_input_1.NutritionRowCreateWithoutBelongMaterialInput)
], NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput.prototype, "create", void 0);
NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput);
exports.NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput = NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput;
//# sourceMappingURL=nutrition-row-upsert-with-where-unique-without-belong-material.input.js.map