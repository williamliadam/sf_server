"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const meal_template_count_order_by_aggregate_input_1 = require("./meal-template-count-order-by-aggregate.input");
const meal_template_avg_order_by_aggregate_input_1 = require("./meal-template-avg-order-by-aggregate.input");
const meal_template_max_order_by_aggregate_input_1 = require("./meal-template-max-order-by-aggregate.input");
const meal_template_min_order_by_aggregate_input_1 = require("./meal-template-min-order-by-aggregate.input");
const meal_template_sum_order_by_aggregate_input_1 = require("./meal-template-sum-order-by-aggregate.input");
let MealTemplateOrderByWithAggregationInput = class MealTemplateOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_count_order_by_aggregate_input_1.MealTemplateCountOrderByAggregateInput, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_avg_order_by_aggregate_input_1.MealTemplateAvgOrderByAggregateInput, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_max_order_by_aggregate_input_1.MealTemplateMaxOrderByAggregateInput, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_min_order_by_aggregate_input_1.MealTemplateMinOrderByAggregateInput, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_sum_order_by_aggregate_input_1.MealTemplateSumOrderByAggregateInput, { nullable: true })
], MealTemplateOrderByWithAggregationInput.prototype, "_sum", void 0);
MealTemplateOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateOrderByWithAggregationInput);
exports.MealTemplateOrderByWithAggregationInput = MealTemplateOrderByWithAggregationInput;
//# sourceMappingURL=meal-template-order-by-with-aggregation.input.js.map