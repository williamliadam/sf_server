"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUncheckedUpdateManyWithoutCategoryNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_create_without_category_input_1 = require("./material-create-without-category.input");
const class_transformer_1 = require("class-transformer");
const material_create_or_connect_without_category_input_1 = require("./material-create-or-connect-without-category.input");
const material_upsert_with_where_unique_without_category_input_1 = require("./material-upsert-with-where-unique-without-category.input");
const material_create_many_category_input_envelope_input_1 = require("./material-create-many-category-input-envelope.input");
const material_where_unique_input_1 = require("./material-where-unique.input");
const material_update_with_where_unique_without_category_input_1 = require("./material-update-with-where-unique-without-category.input");
const material_update_many_with_where_without_category_input_1 = require("./material-update-many-with-where-without-category.input");
const material_scalar_where_input_1 = require("./material-scalar-where.input");
let MaterialUncheckedUpdateManyWithoutCategoryNestedInput = class MaterialUncheckedUpdateManyWithoutCategoryNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [material_create_without_category_input_1.MaterialCreateWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_without_category_input_1.MaterialCreateWithoutCategoryInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_create_or_connect_without_category_input_1.MaterialCreateOrConnectWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_or_connect_without_category_input_1.MaterialCreateOrConnectWithoutCategoryInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_upsert_with_where_unique_without_category_input_1.MaterialUpsertWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_upsert_with_where_unique_without_category_input_1.MaterialUpsertWithWhereUniqueWithoutCategoryInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_many_category_input_envelope_input_1.MaterialCreateManyCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_many_category_input_envelope_input_1.MaterialCreateManyCategoryInputEnvelope)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_update_with_where_unique_without_category_input_1.MaterialUpdateWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_update_with_where_unique_without_category_input_1.MaterialUpdateWithWhereUniqueWithoutCategoryInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_update_many_with_where_without_category_input_1.MaterialUpdateManyWithWhereWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_update_many_with_where_without_category_input_1.MaterialUpdateManyWithWhereWithoutCategoryInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_scalar_where_input_1.MaterialScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_scalar_where_input_1.MaterialScalarWhereInput)
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
MaterialUncheckedUpdateManyWithoutCategoryNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUncheckedUpdateManyWithoutCategoryNestedInput);
exports.MaterialUncheckedUpdateManyWithoutCategoryNestedInput = MaterialUncheckedUpdateManyWithoutCategoryNestedInput;
//# sourceMappingURL=material-unchecked-update-many-without-category-nested.input.js.map