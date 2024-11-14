"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMateriaUnit = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_count_aggregate_output_1 = require("./materia-unit-count-aggregate.output");
const materia_unit_avg_aggregate_output_1 = require("./materia-unit-avg-aggregate.output");
const materia_unit_sum_aggregate_output_1 = require("./materia-unit-sum-aggregate.output");
const materia_unit_min_aggregate_output_1 = require("./materia-unit-min-aggregate.output");
const materia_unit_max_aggregate_output_1 = require("./materia-unit-max-aggregate.output");
let AggregateMateriaUnit = class AggregateMateriaUnit {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_count_aggregate_output_1.MateriaUnitCountAggregate, { nullable: true })
], AggregateMateriaUnit.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_avg_aggregate_output_1.MateriaUnitAvgAggregate, { nullable: true })
], AggregateMateriaUnit.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_sum_aggregate_output_1.MateriaUnitSumAggregate, { nullable: true })
], AggregateMateriaUnit.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_min_aggregate_output_1.MateriaUnitMinAggregate, { nullable: true })
], AggregateMateriaUnit.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_max_aggregate_output_1.MateriaUnitMaxAggregate, { nullable: true })
], AggregateMateriaUnit.prototype, "_max", void 0);
AggregateMateriaUnit = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateMateriaUnit);
exports.AggregateMateriaUnit = AggregateMateriaUnit;
//# sourceMappingURL=aggregate-materia-unit.output.js.map