"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_where_input_1 = require("./dish-template-where.input");
const class_transformer_1 = require("class-transformer");
const dish_template_order_by_with_relation_input_1 = require("./dish-template-order-by-with-relation.input");
const dish_template_where_unique_input_1 = require("./dish-template-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const dish_template_count_aggregate_input_1 = require("./dish-template-count-aggregate.input");
const dish_template_avg_aggregate_input_1 = require("./dish-template-avg-aggregate.input");
const dish_template_sum_aggregate_input_1 = require("./dish-template-sum-aggregate.input");
const dish_template_min_aggregate_input_1 = require("./dish-template-min-aggregate.input");
const dish_template_max_aggregate_input_1 = require("./dish-template-max-aggregate.input");
let DishTemplateAggregateArgs = class DishTemplateAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => dish_template_where_input_1.DishTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_input_1.DishTemplateWhereInput)
], DishTemplateAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_order_by_with_relation_input_1.DishTemplateOrderByWithRelationInput], { nullable: true })
], DishTemplateAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput, { nullable: true })
], DishTemplateAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishTemplateAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishTemplateAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_count_aggregate_input_1.DishTemplateCountAggregateInput, { nullable: true })
], DishTemplateAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_avg_aggregate_input_1.DishTemplateAvgAggregateInput, { nullable: true })
], DishTemplateAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_sum_aggregate_input_1.DishTemplateSumAggregateInput, { nullable: true })
], DishTemplateAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_min_aggregate_input_1.DishTemplateMinAggregateInput, { nullable: true })
], DishTemplateAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_max_aggregate_input_1.DishTemplateMaxAggregateInput, { nullable: true })
], DishTemplateAggregateArgs.prototype, "_max", void 0);
DishTemplateAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DishTemplateAggregateArgs);
exports.DishTemplateAggregateArgs = DishTemplateAggregateArgs;
//# sourceMappingURL=dish-template-aggregate.args.js.map