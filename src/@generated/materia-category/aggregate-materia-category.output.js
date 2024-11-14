"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMateriaCategory = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_count_aggregate_output_1 = require("./materia-category-count-aggregate.output");
const materia_category_avg_aggregate_output_1 = require("./materia-category-avg-aggregate.output");
const materia_category_sum_aggregate_output_1 = require("./materia-category-sum-aggregate.output");
const materia_category_min_aggregate_output_1 = require("./materia-category-min-aggregate.output");
const materia_category_max_aggregate_output_1 = require("./materia-category-max-aggregate.output");
let AggregateMateriaCategory = class AggregateMateriaCategory {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_count_aggregate_output_1.MateriaCategoryCountAggregate, { nullable: true })
], AggregateMateriaCategory.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_avg_aggregate_output_1.MateriaCategoryAvgAggregate, { nullable: true })
], AggregateMateriaCategory.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_sum_aggregate_output_1.MateriaCategorySumAggregate, { nullable: true })
], AggregateMateriaCategory.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_min_aggregate_output_1.MateriaCategoryMinAggregate, { nullable: true })
], AggregateMateriaCategory.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_max_aggregate_output_1.MateriaCategoryMaxAggregate, { nullable: true })
], AggregateMateriaCategory.prototype, "_max", void 0);
AggregateMateriaCategory = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateMateriaCategory);
exports.AggregateMateriaCategory = AggregateMateriaCategory;
//# sourceMappingURL=aggregate-materia-category.output.js.map