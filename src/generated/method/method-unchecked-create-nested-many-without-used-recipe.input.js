"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodUncheckedCreateNestedManyWithoutUsedRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_create_without_used_recipe_input_1 = require("./method-create-without-used-recipe.input");
const class_transformer_1 = require("class-transformer");
const method_create_or_connect_without_used_recipe_input_1 = require("./method-create-or-connect-without-used-recipe.input");
const method_create_many_used_recipe_input_envelope_input_1 = require("./method-create-many-used-recipe-input-envelope.input");
const method_where_unique_input_1 = require("./method-where-unique.input");
let MethodUncheckedCreateNestedManyWithoutUsedRecipeInput = class MethodUncheckedCreateNestedManyWithoutUsedRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [method_create_without_used_recipe_input_1.MethodCreateWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_without_used_recipe_input_1.MethodCreateWithoutUsedRecipeInput)
], MethodUncheckedCreateNestedManyWithoutUsedRecipeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_create_or_connect_without_used_recipe_input_1.MethodCreateOrConnectWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_or_connect_without_used_recipe_input_1.MethodCreateOrConnectWithoutUsedRecipeInput)
], MethodUncheckedCreateNestedManyWithoutUsedRecipeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_create_many_used_recipe_input_envelope_input_1.MethodCreateManyUsedRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => method_create_many_used_recipe_input_envelope_input_1.MethodCreateManyUsedRecipeInputEnvelope)
], MethodUncheckedCreateNestedManyWithoutUsedRecipeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_unique_input_1.MethodWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_unique_input_1.MethodWhereUniqueInput)
], MethodUncheckedCreateNestedManyWithoutUsedRecipeInput.prototype, "connect", void 0);
MethodUncheckedCreateNestedManyWithoutUsedRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], MethodUncheckedCreateNestedManyWithoutUsedRecipeInput);
exports.MethodUncheckedCreateNestedManyWithoutUsedRecipeInput = MethodUncheckedCreateNestedManyWithoutUsedRecipeInput;
//# sourceMappingURL=method-unchecked-create-nested-many-without-used-recipe.input.js.map