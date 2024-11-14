"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_create_without_last_input_1 = require("./materia-category-create-without-last.input");
const class_transformer_1 = require("class-transformer");
const materia_category_create_or_connect_without_last_input_1 = require("./materia-category-create-or-connect-without-last.input");
const materia_category_upsert_with_where_unique_without_last_input_1 = require("./materia-category-upsert-with-where-unique-without-last.input");
const materia_category_create_many_last_input_envelope_input_1 = require("./materia-category-create-many-last-input-envelope.input");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const materia_category_update_with_where_unique_without_last_input_1 = require("./materia-category-update-with-where-unique-without-last.input");
const materia_category_update_many_with_where_without_last_input_1 = require("./materia-category-update-many-with-where-without-last.input");
const materia_category_scalar_where_input_1 = require("./materia-category-scalar-where.input");
let MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput = class MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [materia_category_create_without_last_input_1.MateriaCategoryCreateWithoutLastInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_create_without_last_input_1.MateriaCategoryCreateWithoutLastInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_create_or_connect_without_last_input_1.MateriaCategoryCreateOrConnectWithoutLastInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_create_or_connect_without_last_input_1.MateriaCategoryCreateOrConnectWithoutLastInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_upsert_with_where_unique_without_last_input_1.MateriaCategoryUpsertWithWhereUniqueWithoutLastInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_upsert_with_where_unique_without_last_input_1.MateriaCategoryUpsertWithWhereUniqueWithoutLastInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_many_last_input_envelope_input_1.MateriaCategoryCreateManyLastInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_create_many_last_input_envelope_input_1.MateriaCategoryCreateManyLastInputEnvelope)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_update_with_where_unique_without_last_input_1.MateriaCategoryUpdateWithWhereUniqueWithoutLastInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_update_with_where_unique_without_last_input_1.MateriaCategoryUpdateWithWhereUniqueWithoutLastInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_update_many_with_where_without_last_input_1.MateriaCategoryUpdateManyWithWhereWithoutLastInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_update_many_with_where_without_last_input_1.MateriaCategoryUpdateManyWithWhereWithoutLastInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_scalar_where_input_1.MateriaCategoryScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_scalar_where_input_1.MateriaCategoryScalarWhereInput)
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput.prototype, "deleteMany", void 0);
MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput);
exports.MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput = MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput;
//# sourceMappingURL=materia-category-unchecked-update-many-without-last-nested.input.js.map