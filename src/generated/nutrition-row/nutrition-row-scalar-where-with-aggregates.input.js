"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NutritionRowScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let NutritionRowScalarWhereWithAggregatesInput = NutritionRowScalarWhereWithAggregatesInput_1 = class NutritionRowScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [NutritionRowScalarWhereWithAggregatesInput_1], { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NutritionRowScalarWhereWithAggregatesInput_1], { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [NutritionRowScalarWhereWithAggregatesInput_1], { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "nutirtionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "belongToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], NutritionRowScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
NutritionRowScalarWhereWithAggregatesInput = NutritionRowScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowScalarWhereWithAggregatesInput);
exports.NutritionRowScalarWhereWithAggregatesInput = NutritionRowScalarWhereWithAggregatesInput;
//# sourceMappingURL=nutrition-row-scalar-where-with-aggregates.input.js.map