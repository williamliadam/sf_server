"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_create_nested_one_without_my_posts_input_1 = require("../user/user-create-nested-one-without-my-posts.input");
let PostCreateInput = class PostCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], PostCreateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostCreateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PostCreateInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCreateInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_my_posts_input_1.UserCreateNestedOneWithoutMyPostsInput, { nullable: true })
], PostCreateInput.prototype, "author", void 0);
PostCreateInput = __decorate([
    (0, graphql_2.InputType)()
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
//# sourceMappingURL=post-create.input.js.map