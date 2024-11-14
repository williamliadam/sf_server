"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateOneWithoutMethodsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_create_without_methods_input_1 = require("./recipe-create-without-methods.input");
const class_transformer_1 = require("class-transformer");
const recipe_create_or_connect_without_methods_input_1 = require("./recipe-create-or-connect-without-methods.input");
const recipe_upsert_without_methods_input_1 = require("./recipe-upsert-without-methods.input");
const recipe_where_input_1 = require("./recipe-where.input");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const recipe_update_to_one_with_where_without_methods_input_1 = require("./recipe-update-to-one-with-where-without-methods.input");
let RecipeUpdateOneWithoutMethodsNestedInput = class RecipeUpdateOneWithoutMethodsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_create_without_methods_input_1.RecipeCreateWithoutMethodsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_without_methods_input_1.RecipeCreateWithoutMethodsInput)
], RecipeUpdateOneWithoutMethodsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_or_connect_without_methods_input_1.RecipeCreateOrConnectWithoutMethodsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_or_connect_without_methods_input_1.RecipeCreateOrConnectWithoutMethodsInput)
], RecipeUpdateOneWithoutMethodsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_upsert_without_methods_input_1.RecipeUpsertWithoutMethodsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_upsert_without_methods_input_1.RecipeUpsertWithoutMethodsInput)
], RecipeUpdateOneWithoutMethodsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_input_1.RecipeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_input_1.RecipeWhereInput)
], RecipeUpdateOneWithoutMethodsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_input_1.RecipeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_input_1.RecipeWhereInput)
], RecipeUpdateOneWithoutMethodsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpdateOneWithoutMethodsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_to_one_with_where_without_methods_input_1.RecipeUpdateToOneWithWhereWithoutMethodsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_update_to_one_with_where_without_methods_input_1.RecipeUpdateToOneWithWhereWithoutMethodsInput)
], RecipeUpdateOneWithoutMethodsNestedInput.prototype, "update", void 0);
RecipeUpdateOneWithoutMethodsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUpdateOneWithoutMethodsNestedInput);
exports.RecipeUpdateOneWithoutMethodsNestedInput = RecipeUpdateOneWithoutMethodsNestedInput;
//# sourceMappingURL=recipe-update-one-without-methods-nested.input.js.map