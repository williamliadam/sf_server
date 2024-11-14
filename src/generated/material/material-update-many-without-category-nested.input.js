"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateManyWithoutCategoryNestedInput = void 0;
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
let MaterialUpdateManyWithoutCategoryNestedInput = class MaterialUpdateManyWithoutCategoryNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [material_create_without_category_input_1.MaterialCreateWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_without_category_input_1.MaterialCreateWithoutCategoryInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_create_or_connect_without_category_input_1.MaterialCreateOrConnectWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_or_connect_without_category_input_1.MaterialCreateOrConnectWithoutCategoryInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_upsert_with_where_unique_without_category_input_1.MaterialUpsertWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_upsert_with_where_unique_without_category_input_1.MaterialUpsertWithWhereUniqueWithoutCategoryInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_many_category_input_envelope_input_1.MaterialCreateManyCategoryInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_many_category_input_envelope_input_1.MaterialCreateManyCategoryInputEnvelope)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_where_unique_input_1.MaterialWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_update_with_where_unique_without_category_input_1.MaterialUpdateWithWhereUniqueWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_update_with_where_unique_without_category_input_1.MaterialUpdateWithWhereUniqueWithoutCategoryInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_update_many_with_where_without_category_input_1.MaterialUpdateManyWithWhereWithoutCategoryInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_update_many_with_where_without_category_input_1.MaterialUpdateManyWithWhereWithoutCategoryInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_scalar_where_input_1.MaterialScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_scalar_where_input_1.MaterialScalarWhereInput)
], MaterialUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
MaterialUpdateManyWithoutCategoryNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpdateManyWithoutCategoryNestedInput);
exports.MaterialUpdateManyWithoutCategoryNestedInput = MaterialUpdateManyWithoutCategoryNestedInput;
//# sourceMappingURL=material-update-many-without-category-nested.input.js.map