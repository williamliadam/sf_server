"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodUpdateManyWithoutUsedRecipeNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_create_without_used_recipe_input_1 = require("./method-create-without-used-recipe.input");
const class_transformer_1 = require("class-transformer");
const method_create_or_connect_without_used_recipe_input_1 = require("./method-create-or-connect-without-used-recipe.input");
const method_upsert_with_where_unique_without_used_recipe_input_1 = require("./method-upsert-with-where-unique-without-used-recipe.input");
const method_create_many_used_recipe_input_envelope_input_1 = require("./method-create-many-used-recipe-input-envelope.input");
const method_where_unique_input_1 = require("./method-where-unique.input");
const method_update_with_where_unique_without_used_recipe_input_1 = require("./method-update-with-where-unique-without-used-recipe.input");
const method_update_many_with_where_without_used_recipe_input_1 = require("./method-update-many-with-where-without-used-recipe.input");
const method_scalar_where_input_1 = require("./method-scalar-where.input");
let MethodUpdateManyWithoutUsedRecipeNestedInput = class MethodUpdateManyWithoutUsedRecipeNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [method_create_without_used_recipe_input_1.MethodCreateWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_without_used_recipe_input_1.MethodCreateWithoutUsedRecipeInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_create_or_connect_without_used_recipe_input_1.MethodCreateOrConnectWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_or_connect_without_used_recipe_input_1.MethodCreateOrConnectWithoutUsedRecipeInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_upsert_with_where_unique_without_used_recipe_input_1.MethodUpsertWithWhereUniqueWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_upsert_with_where_unique_without_used_recipe_input_1.MethodUpsertWithWhereUniqueWithoutUsedRecipeInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_create_many_used_recipe_input_envelope_input_1.MethodCreateManyUsedRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_many_used_recipe_input_envelope_input_1.MethodCreateManyUsedRecipeInputEnvelope)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_unique_input_1.MethodWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_unique_input_1.MethodWhereUniqueInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_unique_input_1.MethodWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_unique_input_1.MethodWhereUniqueInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_unique_input_1.MethodWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_unique_input_1.MethodWhereUniqueInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_unique_input_1.MethodWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_unique_input_1.MethodWhereUniqueInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_update_with_where_unique_without_used_recipe_input_1.MethodUpdateWithWhereUniqueWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_update_with_where_unique_without_used_recipe_input_1.MethodUpdateWithWhereUniqueWithoutUsedRecipeInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_update_many_with_where_without_used_recipe_input_1.MethodUpdateManyWithWhereWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_update_many_with_where_without_used_recipe_input_1.MethodUpdateManyWithWhereWithoutUsedRecipeInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_scalar_where_input_1.MethodScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_scalar_where_input_1.MethodScalarWhereInput)
], MethodUpdateManyWithoutUsedRecipeNestedInput.prototype, "deleteMany", void 0);
MethodUpdateManyWithoutUsedRecipeNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MethodUpdateManyWithoutUsedRecipeNestedInput);
exports.MethodUpdateManyWithoutUsedRecipeNestedInput = MethodUpdateManyWithoutUsedRecipeNestedInput;
//# sourceMappingURL=method-update-many-without-used-recipe-nested.input.js.map