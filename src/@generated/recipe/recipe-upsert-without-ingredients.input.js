"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpsertWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_update_without_ingredients_input_1 = require("./recipe-update-without-ingredients.input");
const class_transformer_1 = require("class-transformer");
const recipe_create_without_ingredients_input_1 = require("./recipe-create-without-ingredients.input");
const recipe_where_input_1 = require("./recipe-where.input");
let RecipeUpsertWithoutIngredientsInput = class RecipeUpsertWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_update_without_ingredients_input_1.RecipeUpdateWithoutIngredientsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_update_without_ingredients_input_1.RecipeUpdateWithoutIngredientsInput)
], RecipeUpsertWithoutIngredientsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_without_ingredients_input_1.RecipeCreateWithoutIngredientsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_create_without_ingredients_input_1.RecipeCreateWithoutIngredientsInput)
], RecipeUpsertWithoutIngredientsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_input_1.RecipeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_input_1.RecipeWhereInput)
], RecipeUpsertWithoutIngredientsInput.prototype, "where", void 0);
RecipeUpsertWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUpsertWithoutIngredientsInput);
exports.RecipeUpsertWithoutIngredientsInput = RecipeUpsertWithoutIngredientsInput;
//# sourceMappingURL=recipe-upsert-without-ingredients.input.js.map