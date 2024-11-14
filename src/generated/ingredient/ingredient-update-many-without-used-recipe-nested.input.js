"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUpdateManyWithoutUsedRecipeNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_create_without_used_recipe_input_1 = require("./ingredient-create-without-used-recipe.input");
const class_transformer_1 = require("class-transformer");
const ingredient_create_or_connect_without_used_recipe_input_1 = require("./ingredient-create-or-connect-without-used-recipe.input");
const ingredient_upsert_with_where_unique_without_used_recipe_input_1 = require("./ingredient-upsert-with-where-unique-without-used-recipe.input");
const ingredient_create_many_used_recipe_input_envelope_input_1 = require("./ingredient-create-many-used-recipe-input-envelope.input");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
const ingredient_update_with_where_unique_without_used_recipe_input_1 = require("./ingredient-update-with-where-unique-without-used-recipe.input");
const ingredient_update_many_with_where_without_used_recipe_input_1 = require("./ingredient-update-many-with-where-without-used-recipe.input");
const ingredient_scalar_where_input_1 = require("./ingredient-scalar-where.input");
let IngredientUpdateManyWithoutUsedRecipeNestedInput = class IngredientUpdateManyWithoutUsedRecipeNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_without_used_recipe_input_1.IngredientCreateWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_without_used_recipe_input_1.IngredientCreateWithoutUsedRecipeInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_or_connect_without_used_recipe_input_1.IngredientCreateOrConnectWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_or_connect_without_used_recipe_input_1.IngredientCreateOrConnectWithoutUsedRecipeInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_upsert_with_where_unique_without_used_recipe_input_1.IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_upsert_with_where_unique_without_used_recipe_input_1.IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_create_many_used_recipe_input_envelope_input_1.IngredientCreateManyUsedRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_create_many_used_recipe_input_envelope_input_1.IngredientCreateManyUsedRecipeInputEnvelope)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_where_unique_input_1.IngredientWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_update_with_where_unique_without_used_recipe_input_1.IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_update_with_where_unique_without_used_recipe_input_1.IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_update_many_with_where_without_used_recipe_input_1.IngredientUpdateManyWithWhereWithoutUsedRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_update_many_with_where_without_used_recipe_input_1.IngredientUpdateManyWithWhereWithoutUsedRecipeInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_scalar_where_input_1.IngredientScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_scalar_where_input_1.IngredientScalarWhereInput)
], IngredientUpdateManyWithoutUsedRecipeNestedInput.prototype, "deleteMany", void 0);
IngredientUpdateManyWithoutUsedRecipeNestedInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientUpdateManyWithoutUsedRecipeNestedInput);
exports.IngredientUpdateManyWithoutUsedRecipeNestedInput = IngredientUpdateManyWithoutUsedRecipeNestedInput;
//# sourceMappingURL=ingredient-update-many-without-used-recipe-nested.input.js.map