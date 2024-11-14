"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MateriaCategoryScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const int_nullable_with_aggregates_filter_input_1 = require("../prisma/int-nullable-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let MateriaCategoryScalarWhereWithAggregatesInput = MateriaCategoryScalarWhereWithAggregatesInput_1 = class MateriaCategoryScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MateriaCategoryScalarWhereWithAggregatesInput_1], { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MateriaCategoryScalarWhereWithAggregatesInput_1], { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MateriaCategoryScalarWhereWithAggregatesInput_1], { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true })
], MateriaCategoryScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
MateriaCategoryScalarWhereWithAggregatesInput = MateriaCategoryScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryScalarWhereWithAggregatesInput);
exports.MateriaCategoryScalarWhereWithAggregatesInput = MateriaCategoryScalarWhereWithAggregatesInput;
//# sourceMappingURL=materia-category-scalar-where-with-aggregates.input.js.map