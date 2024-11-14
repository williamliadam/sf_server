"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_where_input_1 = require("./materia-unit-where.input");
const class_transformer_1 = require("class-transformer");
const materia_unit_order_by_with_aggregation_input_1 = require("./materia-unit-order-by-with-aggregation.input");
const materia_unit_scalar_field_enum_1 = require("./materia-unit-scalar-field.enum");
const materia_unit_scalar_where_with_aggregates_input_1 = require("./materia-unit-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const materia_unit_count_aggregate_input_1 = require("./materia-unit-count-aggregate.input");
const materia_unit_avg_aggregate_input_1 = require("./materia-unit-avg-aggregate.input");
const materia_unit_sum_aggregate_input_1 = require("./materia-unit-sum-aggregate.input");
const materia_unit_min_aggregate_input_1 = require("./materia-unit-min-aggregate.input");
const materia_unit_max_aggregate_input_1 = require("./materia-unit-max-aggregate.input");
let MateriaUnitGroupByArgs = class MateriaUnitGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_input_1.MateriaUnitWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_where_input_1.MateriaUnitWhereInput)
], MateriaUnitGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_unit_order_by_with_aggregation_input_1.MateriaUnitOrderByWithAggregationInput], { nullable: true })
], MateriaUnitGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_unit_scalar_field_enum_1.MateriaUnitScalarFieldEnum], { nullable: false })
], MateriaUnitGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_scalar_where_with_aggregates_input_1.MateriaUnitScalarWhereWithAggregatesInput, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_count_aggregate_input_1.MateriaUnitCountAggregateInput, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_avg_aggregate_input_1.MateriaUnitAvgAggregateInput, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_sum_aggregate_input_1.MateriaUnitSumAggregateInput, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_min_aggregate_input_1.MateriaUnitMinAggregateInput, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_max_aggregate_input_1.MateriaUnitMaxAggregateInput, { nullable: true })
], MateriaUnitGroupByArgs.prototype, "_max", void 0);
MateriaUnitGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MateriaUnitGroupByArgs);
exports.MateriaUnitGroupByArgs = MateriaUnitGroupByArgs;
//# sourceMappingURL=materia-unit-group-by.args.js.map