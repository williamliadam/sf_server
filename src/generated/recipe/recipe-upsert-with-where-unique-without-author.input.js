"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const class_transformer_1 = require("class-transformer");
const recipe_update_without_author_input_1 = require("./recipe-update-without-author.input");
const recipe_create_without_author_input_1 = require("./recipe-create-without-author.input");
let RecipeUpsertWithWhereUniqueWithoutAuthorInput = class RecipeUpsertWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_without_author_input_1.RecipeUpdateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_update_without_author_input_1.RecipeUpdateWithoutAuthorInput)
], RecipeUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_without_author_input_1.RecipeCreateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_create_without_author_input_1.RecipeCreateWithoutAuthorInput)
], RecipeUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
RecipeUpsertWithWhereUniqueWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUpsertWithWhereUniqueWithoutAuthorInput);
exports.RecipeUpsertWithWhereUniqueWithoutAuthorInput = RecipeUpsertWithWhereUniqueWithoutAuthorInput;
//# sourceMappingURL=recipe-upsert-with-where-unique-without-author.input.js.map