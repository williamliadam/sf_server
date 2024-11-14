"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const body_detail_count_order_by_aggregate_input_1 = require("./body-detail-count-order-by-aggregate.input");
const body_detail_avg_order_by_aggregate_input_1 = require("./body-detail-avg-order-by-aggregate.input");
const body_detail_max_order_by_aggregate_input_1 = require("./body-detail-max-order-by-aggregate.input");
const body_detail_min_order_by_aggregate_input_1 = require("./body-detail-min-order-by-aggregate.input");
const body_detail_sum_order_by_aggregate_input_1 = require("./body-detail-sum-order-by-aggregate.input");
let BodyDetailOrderByWithAggregationInput = class BodyDetailOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "bmi", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "bmr", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "tdee", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_count_order_by_aggregate_input_1.BodyDetailCountOrderByAggregateInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_avg_order_by_aggregate_input_1.BodyDetailAvgOrderByAggregateInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_max_order_by_aggregate_input_1.BodyDetailMaxOrderByAggregateInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_min_order_by_aggregate_input_1.BodyDetailMinOrderByAggregateInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_sum_order_by_aggregate_input_1.BodyDetailSumOrderByAggregateInput, { nullable: true })
], BodyDetailOrderByWithAggregationInput.prototype, "_sum", void 0);
BodyDetailOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailOrderByWithAggregationInput);
exports.BodyDetailOrderByWithAggregationInput = BodyDetailOrderByWithAggregationInput;
//# sourceMappingURL=body-detail-order-by-with-aggregation.input.js.map