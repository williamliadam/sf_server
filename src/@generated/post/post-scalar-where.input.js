"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PostScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let PostScalarWhereInput = PostScalarWhereInput_1 = class PostScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true })
], PostScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true })
], PostScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereInput_1], { nullable: true })
], PostScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], PostScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], PostScalarWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true })
], PostScalarWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], PostScalarWhereInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true })
], PostScalarWhereInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], PostScalarWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PostScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], PostScalarWhereInput.prototype, "updatedAt", void 0);
PostScalarWhereInput = PostScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PostScalarWhereInput);
exports.PostScalarWhereInput = PostScalarWhereInput;
//# sourceMappingURL=post-scalar-where.input.js.map