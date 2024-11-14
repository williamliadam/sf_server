"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_create_without_belong_material_input_1 = require("./nutrition-row-create-without-belong-material.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_create_or_connect_without_belong_material_input_1 = require("./nutrition-row-create-or-connect-without-belong-material.input");
const nutrition_row_create_many_belong_material_input_envelope_input_1 = require("./nutrition-row-create-many-belong-material-input-envelope.input");
const nutrition_row_where_unique_input_1 = require("./nutrition-row-where-unique.input");
let NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput = class NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput {
};
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_create_without_belong_material_input_1.NutritionRowCreateWithoutBelongMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_without_belong_material_input_1.NutritionRowCreateWithoutBelongMaterialInput)
], NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_create_or_connect_without_belong_material_input_1.NutritionRowCreateOrConnectWithoutBelongMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_or_connect_without_belong_material_input_1.NutritionRowCreateOrConnectWithoutBelongMaterialInput)
], NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_create_many_belong_material_input_envelope_input_1.NutritionRowCreateManyBelongMaterialInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_many_belong_material_input_envelope_input_1.NutritionRowCreateManyBelongMaterialInputEnvelope)
], NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput.prototype, "connect", void 0);
NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput);
exports.NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput = NutritionRowUncheckedCreateNestedManyWithoutBelongMaterialInput;
//# sourceMappingURL=nutrition-row-unchecked-create-nested-many-without-belong-material.input.js.map