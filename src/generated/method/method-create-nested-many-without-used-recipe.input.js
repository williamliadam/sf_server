"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodCreateNestedManyWithoutUsedRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_create_without_used_recipe_input_1 = require("./method-create-without-used-recipe.input");
const class_transformer_1 = require("class-transformer");
const method_create_or_connect_without_used_recipe_input_1 = require("./method-create-or-connect-without-used-recipe.input");
const method_create_many_used_recipe_input_envelope_input_1 = require("./method-create-many-used-recipe-input-envelope.input");
const method_where_unique_input_1 = require("./method-where-unique.input");
let MethodCreateNestedManyWithoutUsedRecipeInput = class MethodCreateNestedManyWithoutUsedRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [method_create_without_used_recipe_input_1.MethodCreateWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_without_used_recipe_input_1.MethodCreateWithoutUsedRecipeInput)
], MethodCreateNestedManyWithoutUsedRecipeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_create_or_connect_without_used_recipe_input_1.MethodCreateOrConnectWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_or_connect_without_used_recipe_input_1.MethodCreateOrConnectWithoutUsedRecipeInput)
], MethodCreateNestedManyWithoutUsedRecipeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_create_many_used_recipe_input_envelope_input_1.MethodCreateManyUsedRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_many_used_recipe_input_envelope_input_1.MethodCreateManyUsedRecipeInputEnvelope)
], MethodCreateNestedManyWithoutUsedRecipeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_unique_input_1.MethodWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_unique_input_1.MethodWhereUniqueInput)
], MethodCreateNestedManyWithoutUsedRecipeInput.prototype, "connect", void 0);
MethodCreateNestedManyWithoutUsedRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], MethodCreateNestedManyWithoutUsedRecipeInput);
exports.MethodCreateNestedManyWithoutUsedRecipeInput = MethodCreateNestedManyWithoutUsedRecipeInput;
//# sourceMappingURL=method-create-nested-many-without-used-recipe.input.js.map