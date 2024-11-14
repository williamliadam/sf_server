"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const material_count_order_by_aggregate_input_1 = require("./material-count-order-by-aggregate.input");
const material_avg_order_by_aggregate_input_1 = require("./material-avg-order-by-aggregate.input");
const material_max_order_by_aggregate_input_1 = require("./material-max-order-by-aggregate.input");
const material_min_order_by_aggregate_input_1 = require("./material-min-order-by-aggregate.input");
const material_sum_order_by_aggregate_input_1 = require("./material-sum-order-by-aggregate.input");
let MaterialOrderByWithAggregationInput = class MaterialOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_count_order_by_aggregate_input_1.MaterialCountOrderByAggregateInput, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_avg_order_by_aggregate_input_1.MaterialAvgOrderByAggregateInput, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_max_order_by_aggregate_input_1.MaterialMaxOrderByAggregateInput, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_min_order_by_aggregate_input_1.MaterialMinOrderByAggregateInput, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_sum_order_by_aggregate_input_1.MaterialSumOrderByAggregateInput, { nullable: true })
], MaterialOrderByWithAggregationInput.prototype, "_sum", void 0);
MaterialOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialOrderByWithAggregationInput);
exports.MaterialOrderByWithAggregationInput = MaterialOrderByWithAggregationInput;
//# sourceMappingURL=material-order-by-with-aggregation.input.js.map