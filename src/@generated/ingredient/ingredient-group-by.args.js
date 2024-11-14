"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_where_input_1 = require("./ingredient-where.input");
const class_transformer_1 = require("class-transformer");
const ingredient_order_by_with_aggregation_input_1 = require("./ingredient-order-by-with-aggregation.input");
const ingredient_scalar_field_enum_1 = require("./ingredient-scalar-field.enum");
const ingredient_scalar_where_with_aggregates_input_1 = require("./ingredient-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const ingredient_count_aggregate_input_1 = require("./ingredient-count-aggregate.input");
const ingredient_avg_aggregate_input_1 = require("./ingredient-avg-aggregate.input");
const ingredient_sum_aggregate_input_1 = require("./ingredient-sum-aggregate.input");
const ingredient_min_aggregate_input_1 = require("./ingredient-min-aggregate.input");
const ingredient_max_aggregate_input_1 = require("./ingredient-max-aggregate.input");
let IngredientGroupByArgs = class IngredientGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ingredient_where_input_1.IngredientWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_input_1.IngredientWhereInput)
], IngredientGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_order_by_with_aggregation_input_1.IngredientOrderByWithAggregationInput], { nullable: true })
], IngredientGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_scalar_field_enum_1.IngredientScalarFieldEnum], { nullable: false })
], IngredientGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_scalar_where_with_aggregates_input_1.IngredientScalarWhereWithAggregatesInput, { nullable: true })
], IngredientGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_count_aggregate_input_1.IngredientCountAggregateInput, { nullable: true })
], IngredientGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_avg_aggregate_input_1.IngredientAvgAggregateInput, { nullable: true })
], IngredientGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_sum_aggregate_input_1.IngredientSumAggregateInput, { nullable: true })
], IngredientGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_min_aggregate_input_1.IngredientMinAggregateInput, { nullable: true })
], IngredientGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_max_aggregate_input_1.IngredientMaxAggregateInput, { nullable: true })
], IngredientGroupByArgs.prototype, "_max", void 0);
IngredientGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], IngredientGroupByArgs);
exports.IngredientGroupByArgs = IngredientGroupByArgs;
//# sourceMappingURL=ingredient-group-by.args.js.map