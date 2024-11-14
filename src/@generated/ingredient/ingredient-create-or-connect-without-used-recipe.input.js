"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientCreateOrConnectWithoutUsedRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
const class_transformer_1 = require("class-transformer");
const ingredient_create_without_used_recipe_input_1 = require("./ingredient-create-without-used-recipe.input");
let IngredientCreateOrConnectWithoutUsedRecipeInput = class IngredientCreateOrConnectWithoutUsedRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientCreateOrConnectWithoutUsedRecipeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_without_used_recipe_input_1.IngredientCreateWithoutUsedRecipeInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ingredient_create_without_used_recipe_input_1.IngredientCreateWithoutUsedRecipeInput)
], IngredientCreateOrConnectWithoutUsedRecipeInput.prototype, "create", void 0);
IngredientCreateOrConnectWithoutUsedRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientCreateOrConnectWithoutUsedRecipeInput);
exports.IngredientCreateOrConnectWithoutUsedRecipeInput = IngredientCreateOrConnectWithoutUsedRecipeInput;
//# sourceMappingURL=ingredient-create-or-connect-without-used-recipe.input.js.map