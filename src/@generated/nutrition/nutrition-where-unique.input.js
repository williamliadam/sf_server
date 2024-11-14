"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_where_input_1 = require("./nutrition-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const nutrition_row_list_relation_filter_input_1 = require("../nutrition-row/nutrition-row-list-relation-filter.input");
let NutritionWhereUniqueInput = class NutritionWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NutritionWhereUniqueInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_where_input_1.NutritionWhereInput], { nullable: true })
], NutritionWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_where_input_1.NutritionWhereInput], { nullable: true })
], NutritionWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_where_input_1.NutritionWhereInput], { nullable: true })
], NutritionWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], NutritionWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], NutritionWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], NutritionWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_list_relation_filter_input_1.NutritionRowListRelationFilter, { nullable: true })
], NutritionWhereUniqueInput.prototype, "usedRow", void 0);
NutritionWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionWhereUniqueInput);
exports.NutritionWhereUniqueInput = NutritionWhereUniqueInput;
//# sourceMappingURL=nutrition-where-unique.input.js.map