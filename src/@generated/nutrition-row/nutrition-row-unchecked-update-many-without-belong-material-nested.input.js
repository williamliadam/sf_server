"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_create_without_belong_material_input_1 = require("./nutrition-row-create-without-belong-material.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_create_or_connect_without_belong_material_input_1 = require("./nutrition-row-create-or-connect-without-belong-material.input");
const nutrition_row_upsert_with_where_unique_without_belong_material_input_1 = require("./nutrition-row-upsert-with-where-unique-without-belong-material.input");
const nutrition_row_create_many_belong_material_input_envelope_input_1 = require("./nutrition-row-create-many-belong-material-input-envelope.input");
const nutrition_row_where_unique_input_1 = require("./nutrition-row-where-unique.input");
const nutrition_row_update_with_where_unique_without_belong_material_input_1 = require("./nutrition-row-update-with-where-unique-without-belong-material.input");
const nutrition_row_update_many_with_where_without_belong_material_input_1 = require("./nutrition-row-update-many-with-where-without-belong-material.input");
const nutrition_row_scalar_where_input_1 = require("./nutrition-row-scalar-where.input");
let NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput = class NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_create_without_belong_material_input_1.NutritionRowCreateWithoutBelongMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_without_belong_material_input_1.NutritionRowCreateWithoutBelongMaterialInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_create_or_connect_without_belong_material_input_1.NutritionRowCreateOrConnectWithoutBelongMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_or_connect_without_belong_material_input_1.NutritionRowCreateOrConnectWithoutBelongMaterialInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_upsert_with_where_unique_without_belong_material_input_1.NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_upsert_with_where_unique_without_belong_material_input_1.NutritionRowUpsertWithWhereUniqueWithoutBelongMaterialInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_create_many_belong_material_input_envelope_input_1.NutritionRowCreateManyBelongMaterialInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_many_belong_material_input_envelope_input_1.NutritionRowCreateManyBelongMaterialInputEnvelope)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_update_with_where_unique_without_belong_material_input_1.NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_update_with_where_unique_without_belong_material_input_1.NutritionRowUpdateWithWhereUniqueWithoutBelongMaterialInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_update_many_with_where_without_belong_material_input_1.NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_update_many_with_where_without_belong_material_input_1.NutritionRowUpdateManyWithWhereWithoutBelongMaterialInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_scalar_where_input_1.NutritionRowScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_scalar_where_input_1.NutritionRowScalarWhereInput)
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput.prototype, "deleteMany", void 0);
NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput);
exports.NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput = NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput;
//# sourceMappingURL=nutrition-row-unchecked-update-many-without-belong-material-nested.input.js.map