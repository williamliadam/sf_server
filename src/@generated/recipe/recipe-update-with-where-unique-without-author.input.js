"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const class_transformer_1 = require("class-transformer");
const recipe_update_without_author_input_1 = require("./recipe-update-without-author.input");
let RecipeUpdateWithWhereUniqueWithoutAuthorInput = class RecipeUpdateWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_without_author_input_1.RecipeUpdateWithoutAuthorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_update_without_author_input_1.RecipeUpdateWithoutAuthorInput)
], RecipeUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
RecipeUpdateWithWhereUniqueWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUpdateWithWhereUniqueWithoutAuthorInput);
exports.RecipeUpdateWithWhereUniqueWithoutAuthorInput = RecipeUpdateWithWhereUniqueWithoutAuthorInput;
//# sourceMappingURL=recipe-update-with-where-unique-without-author.input.js.map