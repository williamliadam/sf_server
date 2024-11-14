"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const materia_category_count_aggregate_output_1 = require("./materia-category-count-aggregate.output");
const materia_category_avg_aggregate_output_1 = require("./materia-category-avg-aggregate.output");
const materia_category_sum_aggregate_output_1 = require("./materia-category-sum-aggregate.output");
const materia_category_min_aggregate_output_1 = require("./materia-category-min-aggregate.output");
const materia_category_max_aggregate_output_1 = require("./materia-category-max-aggregate.output");
let MateriaCategoryGroupBy = class MateriaCategoryGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MateriaCategoryGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryGroupBy.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaCategoryGroupBy.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaCategoryGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MateriaCategoryGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_count_aggregate_output_1.MateriaCategoryCountAggregate, { nullable: true })
], MateriaCategoryGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_avg_aggregate_output_1.MateriaCategoryAvgAggregate, { nullable: true })
], MateriaCategoryGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_sum_aggregate_output_1.MateriaCategorySumAggregate, { nullable: true })
], MateriaCategoryGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_min_aggregate_output_1.MateriaCategoryMinAggregate, { nullable: true })
], MateriaCategoryGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_max_aggregate_output_1.MateriaCategoryMaxAggregate, { nullable: true })
], MateriaCategoryGroupBy.prototype, "_max", void 0);
MateriaCategoryGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], MateriaCategoryGroupBy);
exports.MateriaCategoryGroupBy = MateriaCategoryGroupBy;
//# sourceMappingURL=materia-category-group-by.output.js.map