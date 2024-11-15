"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_create_without_nutirtion_input_1 = require("./nutrition-row-create-without-nutirtion.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_create_or_connect_without_nutirtion_input_1 = require("./nutrition-row-create-or-connect-without-nutirtion.input");
const nutrition_row_upsert_with_where_unique_without_nutirtion_input_1 = require("./nutrition-row-upsert-with-where-unique-without-nutirtion.input");
const nutrition_row_create_many_nutirtion_input_envelope_input_1 = require("./nutrition-row-create-many-nutirtion-input-envelope.input");
const nutrition_row_where_unique_input_1 = require("./nutrition-row-where-unique.input");
const nutrition_row_update_with_where_unique_without_nutirtion_input_1 = require("./nutrition-row-update-with-where-unique-without-nutirtion.input");
const nutrition_row_update_many_with_where_without_nutirtion_input_1 = require("./nutrition-row-update-many-with-where-without-nutirtion.input");
const nutrition_row_scalar_where_input_1 = require("./nutrition-row-scalar-where.input");
let NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput = class NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_create_without_nutirtion_input_1.NutritionRowCreateWithoutNutirtionInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_without_nutirtion_input_1.NutritionRowCreateWithoutNutirtionInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_create_or_connect_without_nutirtion_input_1.NutritionRowCreateOrConnectWithoutNutirtionInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_or_connect_without_nutirtion_input_1.NutritionRowCreateOrConnectWithoutNutirtionInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_upsert_with_where_unique_without_nutirtion_input_1.NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_upsert_with_where_unique_without_nutirtion_input_1.NutritionRowUpsertWithWhereUniqueWithoutNutirtionInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_create_many_nutirtion_input_envelope_input_1.NutritionRowCreateManyNutirtionInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_many_nutirtion_input_envelope_input_1.NutritionRowCreateManyNutirtionInputEnvelope)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_update_with_where_unique_without_nutirtion_input_1.NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_update_with_where_unique_without_nutirtion_input_1.NutritionRowUpdateWithWhereUniqueWithoutNutirtionInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_update_many_with_where_without_nutirtion_input_1.NutritionRowUpdateManyWithWhereWithoutNutirtionInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_update_many_with_where_without_nutirtion_input_1.NutritionRowUpdateManyWithWhereWithoutNutirtionInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_scalar_where_input_1.NutritionRowScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_scalar_where_input_1.NutritionRowScalarWhereInput)
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput.prototype, "deleteMany", void 0);
NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput);
exports.NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput = NutritionRowUncheckedUpdateManyWithoutNutirtionNestedInput;
//# sourceMappingURL=nutrition-row-unchecked-update-many-without-nutirtion-nested.input.js.map