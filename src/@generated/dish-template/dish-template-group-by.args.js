"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_where_input_1 = require("./dish-template-where.input");
const class_transformer_1 = require("class-transformer");
const dish_template_order_by_with_aggregation_input_1 = require("./dish-template-order-by-with-aggregation.input");
const dish_template_scalar_field_enum_1 = require("./dish-template-scalar-field.enum");
const dish_template_scalar_where_with_aggregates_input_1 = require("./dish-template-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const dish_template_count_aggregate_input_1 = require("./dish-template-count-aggregate.input");
const dish_template_avg_aggregate_input_1 = require("./dish-template-avg-aggregate.input");
const dish_template_sum_aggregate_input_1 = require("./dish-template-sum-aggregate.input");
const dish_template_min_aggregate_input_1 = require("./dish-template-min-aggregate.input");
const dish_template_max_aggregate_input_1 = require("./dish-template-max-aggregate.input");
let DishTemplateGroupByArgs = class DishTemplateGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => dish_template_where_input_1.DishTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_input_1.DishTemplateWhereInput)
], DishTemplateGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_order_by_with_aggregation_input_1.DishTemplateOrderByWithAggregationInput], { nullable: true })
], DishTemplateGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_scalar_field_enum_1.DishTemplateScalarFieldEnum], { nullable: false })
], DishTemplateGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_scalar_where_with_aggregates_input_1.DishTemplateScalarWhereWithAggregatesInput, { nullable: true })
], DishTemplateGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishTemplateGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishTemplateGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_count_aggregate_input_1.DishTemplateCountAggregateInput, { nullable: true })
], DishTemplateGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_avg_aggregate_input_1.DishTemplateAvgAggregateInput, { nullable: true })
], DishTemplateGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_sum_aggregate_input_1.DishTemplateSumAggregateInput, { nullable: true })
], DishTemplateGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_min_aggregate_input_1.DishTemplateMinAggregateInput, { nullable: true })
], DishTemplateGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_max_aggregate_input_1.DishTemplateMaxAggregateInput, { nullable: true })
], DishTemplateGroupByArgs.prototype, "_max", void 0);
DishTemplateGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DishTemplateGroupByArgs);
exports.DishTemplateGroupByArgs = DishTemplateGroupByArgs;
//# sourceMappingURL=dish-template-group-by.args.js.map