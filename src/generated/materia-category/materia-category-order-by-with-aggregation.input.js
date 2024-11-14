"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const materia_category_count_order_by_aggregate_input_1 = require("./materia-category-count-order-by-aggregate.input");
const materia_category_avg_order_by_aggregate_input_1 = require("./materia-category-avg-order-by-aggregate.input");
const materia_category_max_order_by_aggregate_input_1 = require("./materia-category-max-order-by-aggregate.input");
const materia_category_min_order_by_aggregate_input_1 = require("./materia-category-min-order-by-aggregate.input");
const materia_category_sum_order_by_aggregate_input_1 = require("./materia-category-sum-order-by-aggregate.input");
let MateriaCategoryOrderByWithAggregationInput = class MateriaCategoryOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_count_order_by_aggregate_input_1.MateriaCategoryCountOrderByAggregateInput, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_avg_order_by_aggregate_input_1.MateriaCategoryAvgOrderByAggregateInput, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_max_order_by_aggregate_input_1.MateriaCategoryMaxOrderByAggregateInput, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_min_order_by_aggregate_input_1.MateriaCategoryMinOrderByAggregateInput, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_sum_order_by_aggregate_input_1.MateriaCategorySumOrderByAggregateInput, { nullable: true })
], MateriaCategoryOrderByWithAggregationInput.prototype, "_sum", void 0);
MateriaCategoryOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryOrderByWithAggregationInput);
exports.MateriaCategoryOrderByWithAggregationInput = MateriaCategoryOrderByWithAggregationInput;
//# sourceMappingURL=materia-category-order-by-with-aggregation.input.js.map