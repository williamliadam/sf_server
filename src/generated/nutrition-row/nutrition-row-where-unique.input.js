"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nutrition_row_where_input_1 = require("./nutrition-row-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const nutrition_relation_filter_input_1 = require("../nutrition/nutrition-relation-filter.input");
const material_relation_filter_input_1 = require("../material/material-relation-filter.input");
let NutritionRowWhereUniqueInput = class NutritionRowWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_input_1.NutritionRowWhereInput], { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_input_1.NutritionRowWhereInput], { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_where_input_1.NutritionRowWhereInput], { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "nutirtionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "belongToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_relation_filter_input_1.NutritionRelationFilter, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "nutirtion", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_relation_filter_input_1.MaterialRelationFilter, { nullable: true })
], NutritionRowWhereUniqueInput.prototype, "belongMaterial", void 0);
NutritionRowWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowWhereUniqueInput);
exports.NutritionRowWhereUniqueInput = NutritionRowWhereUniqueInput;
//# sourceMappingURL=nutrition-row-where-unique.input.js.map