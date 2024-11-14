"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateManyWithoutAuthorNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_create_without_author_input_1 = require("./recipe-create-without-author.input");
const class_transformer_1 = require("class-transformer");
const recipe_create_or_connect_without_author_input_1 = require("./recipe-create-or-connect-without-author.input");
const recipe_upsert_with_where_unique_without_author_input_1 = require("./recipe-upsert-with-where-unique-without-author.input");
const recipe_create_many_author_input_envelope_input_1 = require("./recipe-create-many-author-input-envelope.input");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const recipe_update_with_where_unique_without_author_input_1 = require("./recipe-update-with-where-unique-without-author.input");
const recipe_update_many_with_where_without_author_input_1 = require("./recipe-update-many-with-where-without-author.input");
const recipe_scalar_where_input_1 = require("./recipe-scalar-where.input");
let RecipeUpdateManyWithoutAuthorNestedInput = class RecipeUpdateManyWithoutAuthorNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [recipe_create_without_author_input_1.RecipeCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_without_author_input_1.RecipeCreateWithoutAuthorInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_create_or_connect_without_author_input_1.RecipeCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_or_connect_without_author_input_1.RecipeCreateOrConnectWithoutAuthorInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_upsert_with_where_unique_without_author_input_1.RecipeUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_upsert_with_where_unique_without_author_input_1.RecipeUpsertWithWhereUniqueWithoutAuthorInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_many_author_input_envelope_input_1.RecipeCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_many_author_input_envelope_input_1.RecipeCreateManyAuthorInputEnvelope)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_where_unique_input_1.RecipeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_where_unique_input_1.RecipeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_where_unique_input_1.RecipeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_where_unique_input_1.RecipeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_update_with_where_unique_without_author_input_1.RecipeUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_update_with_where_unique_without_author_input_1.RecipeUpdateWithWhereUniqueWithoutAuthorInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_update_many_with_where_without_author_input_1.RecipeUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_update_many_with_where_without_author_input_1.RecipeUpdateManyWithWhereWithoutAuthorInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_scalar_where_input_1.RecipeScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_scalar_where_input_1.RecipeScalarWhereInput)
], RecipeUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
RecipeUpdateManyWithoutAuthorNestedInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUpdateManyWithoutAuthorNestedInput);
exports.RecipeUpdateManyWithoutAuthorNestedInput = RecipeUpdateManyWithoutAuthorNestedInput;
//# sourceMappingURL=recipe-update-many-without-author-nested.input.js.map