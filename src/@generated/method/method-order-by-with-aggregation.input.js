"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const method_count_order_by_aggregate_input_1 = require("./method-count-order-by-aggregate.input");
const method_avg_order_by_aggregate_input_1 = require("./method-avg-order-by-aggregate.input");
const method_max_order_by_aggregate_input_1 = require("./method-max-order-by-aggregate.input");
const method_min_order_by_aggregate_input_1 = require("./method-min-order-by-aggregate.input");
const method_sum_order_by_aggregate_input_1 = require("./method-sum-order-by-aggregate.input");
let MethodOrderByWithAggregationInput = class MethodOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_count_order_by_aggregate_input_1.MethodCountOrderByAggregateInput, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_avg_order_by_aggregate_input_1.MethodAvgOrderByAggregateInput, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_max_order_by_aggregate_input_1.MethodMaxOrderByAggregateInput, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_min_order_by_aggregate_input_1.MethodMinOrderByAggregateInput, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_sum_order_by_aggregate_input_1.MethodSumOrderByAggregateInput, { nullable: true })
], MethodOrderByWithAggregationInput.prototype, "_sum", void 0);
MethodOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], MethodOrderByWithAggregationInput);
exports.MethodOrderByWithAggregationInput = MethodOrderByWithAggregationInput;
//# sourceMappingURL=method-order-by-with-aggregation.input.js.map