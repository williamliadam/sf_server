"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const method_count_aggregate_output_1 = require("./method-count-aggregate.output");
const method_avg_aggregate_output_1 = require("./method-avg-aggregate.output");
const method_sum_aggregate_output_1 = require("./method-sum-aggregate.output");
const method_min_aggregate_output_1 = require("./method-min-aggregate.output");
const method_max_aggregate_output_1 = require("./method-max-aggregate.output");
let MethodGroupBy = class MethodGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MethodGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodGroupBy.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodGroupBy.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MethodGroupBy.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MethodGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MethodGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_count_aggregate_output_1.MethodCountAggregate, { nullable: true })
], MethodGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_avg_aggregate_output_1.MethodAvgAggregate, { nullable: true })
], MethodGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_sum_aggregate_output_1.MethodSumAggregate, { nullable: true })
], MethodGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_min_aggregate_output_1.MethodMinAggregate, { nullable: true })
], MethodGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_max_aggregate_output_1.MethodMaxAggregate, { nullable: true })
], MethodGroupBy.prototype, "_max", void 0);
MethodGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], MethodGroupBy);
exports.MethodGroupBy = MethodGroupBy;
//# sourceMappingURL=method-group-by.output.js.map