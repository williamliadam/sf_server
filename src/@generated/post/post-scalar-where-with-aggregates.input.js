"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PostScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const int_nullable_with_aggregates_filter_input_1 = require("../prisma/int-nullable-with-aggregates-filter.input");
const bool_nullable_with_aggregates_filter_input_1 = require("../prisma/bool-nullable-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let PostScalarWhereWithAggregatesInput = PostScalarWhereWithAggregatesInput_1 = class PostScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereWithAggregatesInput_1], { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereWithAggregatesInput_1], { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostScalarWhereWithAggregatesInput_1], { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_with_aggregates_filter_input_1.BoolNullableWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], PostScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
PostScalarWhereWithAggregatesInput = PostScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PostScalarWhereWithAggregatesInput);
exports.PostScalarWhereWithAggregatesInput = PostScalarWhereWithAggregatesInput;
//# sourceMappingURL=post-scalar-where-with-aggregates.input.js.map