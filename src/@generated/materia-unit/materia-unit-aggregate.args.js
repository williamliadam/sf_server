"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaUnitAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_unit_where_input_1 = require("./materia-unit-where.input");
const class_transformer_1 = require("class-transformer");
const materia_unit_order_by_with_relation_input_1 = require("./materia-unit-order-by-with-relation.input");
const materia_unit_where_unique_input_1 = require("./materia-unit-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const materia_unit_count_aggregate_input_1 = require("./materia-unit-count-aggregate.input");
const materia_unit_avg_aggregate_input_1 = require("./materia-unit-avg-aggregate.input");
const materia_unit_sum_aggregate_input_1 = require("./materia-unit-sum-aggregate.input");
const materia_unit_min_aggregate_input_1 = require("./materia-unit-min-aggregate.input");
const materia_unit_max_aggregate_input_1 = require("./materia-unit-max-aggregate.input");
let MateriaUnitAggregateArgs = class MateriaUnitAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_input_1.MateriaUnitWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_unit_where_input_1.MateriaUnitWhereInput)
], MateriaUnitAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_unit_order_by_with_relation_input_1.MateriaUnitOrderByWithRelationInput], { nullable: true })
], MateriaUnitAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_where_unique_input_1.MateriaUnitWhereUniqueInput, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_count_aggregate_input_1.MateriaUnitCountAggregateInput, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_avg_aggregate_input_1.MateriaUnitAvgAggregateInput, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_sum_aggregate_input_1.MateriaUnitSumAggregateInput, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_min_aggregate_input_1.MateriaUnitMinAggregateInput, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_unit_max_aggregate_input_1.MateriaUnitMaxAggregateInput, { nullable: true })
], MateriaUnitAggregateArgs.prototype, "_max", void 0);
MateriaUnitAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MateriaUnitAggregateArgs);
exports.MateriaUnitAggregateArgs = MateriaUnitAggregateArgs;
//# sourceMappingURL=materia-unit-aggregate.args.js.map