"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const method_where_input_1 = require("./method-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const recipe_nullable_relation_filter_input_1 = require("../recipe/recipe-nullable-relation-filter.input");
let MethodWhereUniqueInput = class MethodWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MethodWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], MethodWhereUniqueInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_input_1.MethodWhereInput], { nullable: true })
], MethodWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_input_1.MethodWhereInput], { nullable: true })
], MethodWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_where_input_1.MethodWhereInput], { nullable: true })
], MethodWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MethodWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MethodWhereUniqueInput.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], MethodWhereUniqueInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MethodWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MethodWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_nullable_relation_filter_input_1.RecipeNullableRelationFilter, { nullable: true })
], MethodWhereUniqueInput.prototype, "usedRecipe", void 0);
MethodWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], MethodWhereUniqueInput);
exports.MethodWhereUniqueInput = MethodWhereUniqueInput;
//# sourceMappingURL=method-where-unique.input.js.map