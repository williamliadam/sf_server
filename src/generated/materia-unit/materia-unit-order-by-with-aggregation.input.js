"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const materia_unit_count_order_by_aggregate_input_1 = require("./materia-unit-count-order-by-aggregate.input");
const materia_unit_avg_order_by_aggregate_input_1 = require("./materia-unit-avg-order-by-aggregate.input");
const materia_unit_max_order_by_aggregate_input_1 = require("./materia-unit-max-order-by-aggregate.input");
const materia_unit_min_order_by_aggregate_input_1 = require("./materia-unit-min-order-by-aggregate.input");
const materia_unit_sum_order_by_aggregate_input_1 = require("./materia-unit-sum-order-by-aggregate.input");
let MateriaUnitOrderByWithAggregationInput = class MateriaUnitOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "toKilo", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_count_order_by_aggregate_input_1.MateriaUnitCountOrderByAggregateInput, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_avg_order_by_aggregate_input_1.MateriaUnitAvgOrderByAggregateInput, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_max_order_by_aggregate_input_1.MateriaUnitMaxOrderByAggregateInput, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_min_order_by_aggregate_input_1.MateriaUnitMinOrderByAggregateInput, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_sum_order_by_aggregate_input_1.MateriaUnitSumOrderByAggregateInput, { nullable: true })
], MateriaUnitOrderByWithAggregationInput.prototype, "_sum", void 0);
MateriaUnitOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaUnitOrderByWithAggregationInput);
exports.MateriaUnitOrderByWithAggregationInput = MateriaUnitOrderByWithAggregationInput;
//# sourceMappingURL=materia-unit-order-by-with-aggregation.input.js.map