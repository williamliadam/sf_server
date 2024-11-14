"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMyRecipesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_my_recipes_input_1 = require("./user-create-without-my-recipes.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_my_recipes_input_1 = require("./user-create-or-connect-without-my-recipes.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutMyRecipesInput = class UserCreateNestedOneWithoutMyRecipesInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_my_recipes_input_1.UserCreateWithoutMyRecipesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_my_recipes_input_1.UserCreateWithoutMyRecipesInput)
], UserCreateNestedOneWithoutMyRecipesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_my_recipes_input_1.UserCreateOrConnectWithoutMyRecipesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_my_recipes_input_1.UserCreateOrConnectWithoutMyRecipesInput)
], UserCreateNestedOneWithoutMyRecipesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMyRecipesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutMyRecipesInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutMyRecipesInput);
exports.UserCreateNestedOneWithoutMyRecipesInput = UserCreateNestedOneWithoutMyRecipesInput;
//# sourceMappingURL=user-create-nested-one-without-my-recipes.input.js.map