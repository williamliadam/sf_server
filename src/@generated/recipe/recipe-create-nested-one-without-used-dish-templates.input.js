"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCreateNestedOneWithoutUsedDishTemplatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_create_without_used_dish_templates_input_1 = require("./recipe-create-without-used-dish-templates.input");
const class_transformer_1 = require("class-transformer");
const recipe_create_or_connect_without_used_dish_templates_input_1 = require("./recipe-create-or-connect-without-used-dish-templates.input");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
let RecipeCreateNestedOneWithoutUsedDishTemplatesInput = class RecipeCreateNestedOneWithoutUsedDishTemplatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_create_without_used_dish_templates_input_1.RecipeCreateWithoutUsedDishTemplatesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_without_used_dish_templates_input_1.RecipeCreateWithoutUsedDishTemplatesInput)
], RecipeCreateNestedOneWithoutUsedDishTemplatesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_or_connect_without_used_dish_templates_input_1.RecipeCreateOrConnectWithoutUsedDishTemplatesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_or_connect_without_used_dish_templates_input_1.RecipeCreateOrConnectWithoutUsedDishTemplatesInput)
], RecipeCreateNestedOneWithoutUsedDishTemplatesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeCreateNestedOneWithoutUsedDishTemplatesInput.prototype, "connect", void 0);
RecipeCreateNestedOneWithoutUsedDishTemplatesInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeCreateNestedOneWithoutUsedDishTemplatesInput);
exports.RecipeCreateNestedOneWithoutUsedDishTemplatesInput = RecipeCreateNestedOneWithoutUsedDishTemplatesInput;
//# sourceMappingURL=recipe-create-nested-one-without-used-dish-templates.input.js.map