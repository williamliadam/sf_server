"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
let Post = class Post {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Post.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Post.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Post.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], Post.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false })
], Post.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], Post.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Post.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true })
], Post.prototype, "author", void 0);
Post = __decorate([
    (0, graphql_2.ObjectType)()
], Post);
exports.Post = Post;
//# sourceMappingURL=post.model.js.map