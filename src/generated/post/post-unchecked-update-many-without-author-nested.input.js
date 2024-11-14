"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUncheckedUpdateManyWithoutAuthorNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
const class_transformer_1 = require("class-transformer");
const post_create_or_connect_without_author_input_1 = require("./post-create-or-connect-without-author.input");
const post_upsert_with_where_unique_without_author_input_1 = require("./post-upsert-with-where-unique-without-author.input");
const post_create_many_author_input_envelope_input_1 = require("./post-create-many-author-input-envelope.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_update_with_where_unique_without_author_input_1 = require("./post-update-with-where-unique-without-author.input");
const post_update_many_with_where_without_author_input_1 = require("./post-update-many-with-where-without-author.input");
const post_scalar_where_input_1 = require("./post-scalar-where.input");
let PostUncheckedUpdateManyWithoutAuthorNestedInput = class PostUncheckedUpdateManyWithoutAuthorNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [post_create_without_author_input_1.PostCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_without_author_input_1.PostCreateWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_unique_input_1.PostWhereUniqueInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_scalar_where_input_1.PostScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => post_scalar_where_input_1.PostScalarWhereInput)
], PostUncheckedUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
PostUncheckedUpdateManyWithoutAuthorNestedInput = __decorate([
    (0, graphql_2.InputType)()
], PostUncheckedUpdateManyWithoutAuthorNestedInput);
exports.PostUncheckedUpdateManyWithoutAuthorNestedInput = PostUncheckedUpdateManyWithoutAuthorNestedInput;
//# sourceMappingURL=post-unchecked-update-many-without-author-nested.input.js.map