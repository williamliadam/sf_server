"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMyPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_my_posts_input_1 = require("./user-create-without-my-posts.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_my_posts_input_1 = require("./user-create-or-connect-without-my-posts.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutMyPostsInput = class UserCreateNestedOneWithoutMyPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_my_posts_input_1.UserCreateWithoutMyPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_my_posts_input_1.UserCreateWithoutMyPostsInput)
], UserCreateNestedOneWithoutMyPostsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_my_posts_input_1.UserCreateOrConnectWithoutMyPostsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_my_posts_input_1.UserCreateOrConnectWithoutMyPostsInput)
], UserCreateNestedOneWithoutMyPostsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMyPostsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutMyPostsInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutMyPostsInput);
exports.UserCreateNestedOneWithoutMyPostsInput = UserCreateNestedOneWithoutMyPostsInput;
//# sourceMappingURL=user-create-nested-one-without-my-posts.input.js.map