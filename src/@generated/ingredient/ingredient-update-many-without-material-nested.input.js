"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUpdateManyWithoutMaterialNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_create_without_material_input_1 = require("./ingredient-create-without-material.input");
const class_transformer_1 = require("class-transformer");
const ingredient_create_or_connect_without_material_input_1 = require("./ingredient-create-or-connect-without-material.input");
const ingredient_upsert_with_where_unique_without_material_input_1 = require("./ingredient-upsert-with-where-unique-without-material.input");
const ingredient_create_many_material_input_envelope_input_1 = require("./ingredient-create-many-material-input-envelope.input");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
const ingredient_update_with_where_unique_without_material_input_1 = require("./ingredient-update-with-where-unique-without-material.input");
const ingredient_update_many_with_where_without_material_input_1 = require("./ingredient-update-many-with-where-without-material.input");
const ingredient_scalar_where_input_1 = require("./ingredient-scalar-where.input");
let IngredientUpdateManyWithoutMaterialNestedInput = class IngredientUpdateManyWithoutMaterialNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_without_material_input_1.IngredientCreateWithoutMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_without_material_input_1.IngredientCreateWithoutMaterialInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_or_connect_without_material_input_1.IngredientCreateOrConnectWithoutMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_or_connect_without_material_input_1.IngredientCreateOrConnectWithoutMaterialInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_upsert_with_where_unique_without_material_input_1.IngredientUpsertWithWhereUniqueWithoutMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_upsert_with_where_unique_without_material_input_1.IngredientUpsertWithWhereUniqueWithoutMaterialInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_many_material_input_envelope_input_1.IngredientCreateManyMaterialInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_many_material_input_envelope_input_1.IngredientCreateManyMaterialInputEnvelope)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_update_with_where_unique_without_material_input_1.IngredientUpdateWithWhereUniqueWithoutMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_update_with_where_unique_without_material_input_1.IngredientUpdateWithWhereUniqueWithoutMaterialInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_update_many_with_where_without_material_input_1.IngredientUpdateManyWithWhereWithoutMaterialInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_update_many_with_where_without_material_input_1.IngredientUpdateManyWithWhereWithoutMaterialInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_scalar_where_input_1.IngredientScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_scalar_where_input_1.IngredientScalarWhereInput)
], IngredientUpdateManyWithoutMaterialNestedInput.prototype, "deleteMany", void 0);
IngredientUpdateManyWithoutMaterialNestedInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientUpdateManyWithoutMaterialNestedInput);
exports.IngredientUpdateManyWithoutMaterialNestedInput = IngredientUpdateManyWithoutMaterialNestedInput;
//# sourceMappingURL=ingredient-update-many-without-material-nested.input.js.map