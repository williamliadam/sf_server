"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MaterialWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const materia_category_relation_filter_input_1 = require("../materia-category/materia-category-relation-filter.input");
const nutrition_row_list_relation_filter_input_1 = require("../nutrition-row/nutrition-row-list-relation-filter.input");
const ingredient_list_relation_filter_input_1 = require("../ingredient/ingredient-list-relation-filter.input");
let MaterialWhereInput = MaterialWhereInput_1 = class MaterialWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MaterialWhereInput_1], { nullable: true })
], MaterialWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MaterialWhereInput_1], { nullable: true })
], MaterialWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MaterialWhereInput_1], { nullable: true })
], MaterialWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MaterialWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MaterialWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MaterialWhereInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MaterialWhereInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MaterialWhereInput.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MaterialWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MaterialWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_relation_filter_input_1.MateriaCategoryRelationFilter, { nullable: true })
], MaterialWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_list_relation_filter_input_1.NutritionRowListRelationFilter, { nullable: true })
], MaterialWhereInput.prototype, "nutritionMatrix", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_list_relation_filter_input_1.IngredientListRelationFilter, { nullable: true })
], MaterialWhereInput.prototype, "ingredients", void 0);
MaterialWhereInput = MaterialWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MaterialWhereInput);
exports.MaterialWhereInput = MaterialWhereInput;
//# sourceMappingURL=material-where.input.js.map