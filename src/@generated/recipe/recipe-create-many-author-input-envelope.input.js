"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateManyAuthorInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_create_many_author_input_1 = require("./recipe-create-many-author.input");
const class_transformer_1 = require("class-transformer");
let RecipeCreateManyAuthorInputEnvelope = class RecipeCreateManyAuthorInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [recipe_create_many_author_input_1.RecipeCreateManyAuthorInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_create_many_author_input_1.RecipeCreateManyAuthorInput)
], RecipeCreateManyAuthorInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], RecipeCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
RecipeCreateManyAuthorInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], RecipeCreateManyAuthorInputEnvelope);
exports.RecipeCreateManyAuthorInputEnvelope = RecipeCreateManyAuthorInputEnvelope;
//# sourceMappingURL=recipe-create-many-author-input-envelope.input.js.map