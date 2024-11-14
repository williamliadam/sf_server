"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_nullable_relation_filter_input_1 = require("../user/user-nullable-relation-filter.input");
let PostWhereUniqueInput = class PostWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PostWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_input_1.PostWhereInput], { nullable: true })
], PostWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_input_1.PostWhereInput], { nullable: true })
], PostWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_input_1.PostWhereInput], { nullable: true })
], PostWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_relation_filter_input_1.UserNullableRelationFilter, { nullable: true })
], PostWhereUniqueInput.prototype, "author", void 0);
PostWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], PostWhereUniqueInput);
exports.PostWhereUniqueInput = PostWhereUniqueInput;
//# sourceMappingURL=post-where-unique.input.js.map