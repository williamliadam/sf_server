"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const material_count_aggregate_output_1 = require("./material-count-aggregate.output");
const material_avg_aggregate_output_1 = require("./material-avg-aggregate.output");
const material_sum_aggregate_output_1 = require("./material-sum-aggregate.output");
const material_min_aggregate_output_1 = require("./material-min-aggregate.output");
const material_max_aggregate_output_1 = require("./material-max-aggregate.output");
let MaterialGroupBy = class MaterialGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MaterialGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialGroupBy.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MaterialGroupBy.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MaterialGroupBy.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MaterialGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MaterialGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_count_aggregate_output_1.MaterialCountAggregate, { nullable: true })
], MaterialGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_avg_aggregate_output_1.MaterialAvgAggregate, { nullable: true })
], MaterialGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_sum_aggregate_output_1.MaterialSumAggregate, { nullable: true })
], MaterialGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_min_aggregate_output_1.MaterialMinAggregate, { nullable: true })
], MaterialGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_max_aggregate_output_1.MaterialMaxAggregate, { nullable: true })
], MaterialGroupBy.prototype, "_max", void 0);
MaterialGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], MaterialGroupBy);
exports.MaterialGroupBy = MaterialGroupBy;
//# sourceMappingURL=material-group-by.output.js.map