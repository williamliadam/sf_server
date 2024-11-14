"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateNestedManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_create_without_author_input_1 = require("./recipe-create-without-author.input");
const class_transformer_1 = require("class-transformer");
const recipe_create_or_connect_without_author_input_1 = require("./recipe-create-or-connect-without-author.input");
const recipe_create_many_author_input_envelope_input_1 = require("./recipe-create-many-author-input-envelope.input");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
let RecipeCreateNestedManyWithoutAuthorInput = class RecipeCreateNestedManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [recipe_create_without_author_input_1.RecipeCreateWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_without_author_input_1.RecipeCreateWithoutAuthorInput)
], RecipeCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_create_or_connect_without_author_input_1.RecipeCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_or_connect_without_author_input_1.RecipeCreateOrConnectWithoutAuthorInput)
], RecipeCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_many_author_input_envelope_input_1.RecipeCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_many_author_input_envelope_input_1.RecipeCreateManyAuthorInputEnvelope)
], RecipeCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_where_unique_input_1.RecipeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
RecipeCreateNestedManyWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeCreateNestedManyWithoutAuthorInput);
exports.RecipeCreateNestedManyWithoutAuthorInput = RecipeCreateNestedManyWithoutAuthorInput;
//# sourceMappingURL=recipe-create-nested-many-without-author.input.js.map