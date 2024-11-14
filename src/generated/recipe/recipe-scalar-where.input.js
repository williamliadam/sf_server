"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RecipeScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let RecipeScalarWhereInput = RecipeScalarWhereInput_1 = class RecipeScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [RecipeScalarWhereInput_1], { nullable: true })
], RecipeScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [RecipeScalarWhereInput_1], { nullable: true })
], RecipeScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [RecipeScalarWhereInput_1], { nullable: true })
], RecipeScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], RecipeScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], RecipeScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], RecipeScalarWhereInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], RecipeScalarWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], RecipeScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], RecipeScalarWhereInput.prototype, "updatedAt", void 0);
RecipeScalarWhereInput = RecipeScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], RecipeScalarWhereInput);
exports.RecipeScalarWhereInput = RecipeScalarWhereInput;
//# sourceMappingURL=recipe-scalar-where.input.js.map