"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const materia_unit_count_aggregate_output_1 = require("./materia-unit-count-aggregate.output");
const materia_unit_avg_aggregate_output_1 = require("./materia-unit-avg-aggregate.output");
const materia_unit_sum_aggregate_output_1 = require("./materia-unit-sum-aggregate.output");
const materia_unit_min_aggregate_output_1 = require("./materia-unit-min-aggregate.output");
const materia_unit_max_aggregate_output_1 = require("./materia-unit-max-aggregate.output");
let MateriaUnitGroupBy = class MateriaUnitGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MateriaUnitGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnitGroupBy.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaUnitGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MateriaUnitGroupBy.prototype, "toKilo", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaUnitGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaUnitGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_count_aggregate_output_1.MateriaUnitCountAggregate, { nullable: true })
], MateriaUnitGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_avg_aggregate_output_1.MateriaUnitAvgAggregate, { nullable: true })
], MateriaUnitGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_sum_aggregate_output_1.MateriaUnitSumAggregate, { nullable: true })
], MateriaUnitGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_min_aggregate_output_1.MateriaUnitMinAggregate, { nullable: true })
], MateriaUnitGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_max_aggregate_output_1.MateriaUnitMaxAggregate, { nullable: true })
], MateriaUnitGroupBy.prototype, "_max", void 0);
MateriaUnitGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], MateriaUnitGroupBy);
exports.MateriaUnitGroupBy = MateriaUnitGroupBy;
//# sourceMappingURL=materia-unit-group-by.output.js.map