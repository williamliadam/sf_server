"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NutritionRowWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const nutrition_relation_filter_input_1 = require("../nutrition/nutrition-relation-filter.input");
const material_relation_filter_input_1 = require("../material/material-relation-filter.input");
let NutritionRowWhereInput = NutritionRowWhereInput_1 = class NutritionRowWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [NutritionRowWhereInput_1], { nullable: true })
], NutritionRowWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NutritionRowWhereInput_1], { nullable: true })
], NutritionRowWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NutritionRowWhereInput_1], { nullable: true })
], NutritionRowWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "nutirtionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "belongToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_relation_filter_input_1.NutritionRelationFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "nutirtion", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_relation_filter_input_1.MaterialRelationFilter, { nullable: true })
], NutritionRowWhereInput.prototype, "belongMaterial", void 0);
NutritionRowWhereInput = NutritionRowWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowWhereInput);
exports.NutritionRowWhereInput = NutritionRowWhereInput;
//# sourceMappingURL=nutrition-row-where.input.js.map