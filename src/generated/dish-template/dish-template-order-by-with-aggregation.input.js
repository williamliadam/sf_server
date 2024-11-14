"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const dish_template_count_order_by_aggregate_input_1 = require("./dish-template-count-order-by-aggregate.input");
const dish_template_avg_order_by_aggregate_input_1 = require("./dish-template-avg-order-by-aggregate.input");
const dish_template_max_order_by_aggregate_input_1 = require("./dish-template-max-order-by-aggregate.input");
const dish_template_min_order_by_aggregate_input_1 = require("./dish-template-min-order-by-aggregate.input");
const dish_template_sum_order_by_aggregate_input_1 = require("./dish-template-sum-order-by-aggregate.input");
let DishTemplateOrderByWithAggregationInput = class DishTemplateOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "mealTemplateId", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_count_order_by_aggregate_input_1.DishTemplateCountOrderByAggregateInput, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_avg_order_by_aggregate_input_1.DishTemplateAvgOrderByAggregateInput, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_max_order_by_aggregate_input_1.DishTemplateMaxOrderByAggregateInput, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_min_order_by_aggregate_input_1.DishTemplateMinOrderByAggregateInput, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_sum_order_by_aggregate_input_1.DishTemplateSumOrderByAggregateInput, { nullable: true })
], DishTemplateOrderByWithAggregationInput.prototype, "_sum", void 0);
DishTemplateOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateOrderByWithAggregationInput);
exports.DishTemplateOrderByWithAggregationInput = DishTemplateOrderByWithAggregationInput;
//# sourceMappingURL=dish-template-order-by-with-aggregation.input.js.map