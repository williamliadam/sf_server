"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_where_input_1 = require("./materia-category-where.input");
const class_transformer_1 = require("class-transformer");
const materia_category_order_by_with_aggregation_input_1 = require("./materia-category-order-by-with-aggregation.input");
const materia_category_scalar_field_enum_1 = require("./materia-category-scalar-field.enum");
const materia_category_scalar_where_with_aggregates_input_1 = require("./materia-category-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const materia_category_count_aggregate_input_1 = require("./materia-category-count-aggregate.input");
const materia_category_avg_aggregate_input_1 = require("./materia-category-avg-aggregate.input");
const materia_category_sum_aggregate_input_1 = require("./materia-category-sum-aggregate.input");
const materia_category_min_aggregate_input_1 = require("./materia-category-min-aggregate.input");
const materia_category_max_aggregate_input_1 = require("./materia-category-max-aggregate.input");
let MateriaCategoryGroupByArgs = class MateriaCategoryGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_input_1.MateriaCategoryWhereInput)
], MateriaCategoryGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_order_by_with_aggregation_input_1.MateriaCategoryOrderByWithAggregationInput], { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_scalar_field_enum_1.MateriaCategoryScalarFieldEnum], { nullable: false })
], MateriaCategoryGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_scalar_where_with_aggregates_input_1.MateriaCategoryScalarWhereWithAggregatesInput, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_count_aggregate_input_1.MateriaCategoryCountAggregateInput, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_avg_aggregate_input_1.MateriaCategoryAvgAggregateInput, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_sum_aggregate_input_1.MateriaCategorySumAggregateInput, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_min_aggregate_input_1.MateriaCategoryMinAggregateInput, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_max_aggregate_input_1.MateriaCategoryMaxAggregateInput, { nullable: true })
], MateriaCategoryGroupByArgs.prototype, "_max", void 0);
MateriaCategoryGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MateriaCategoryGroupByArgs);
exports.MateriaCategoryGroupByArgs = MateriaCategoryGroupByArgs;
//# sourceMappingURL=materia-category-group-by.args.js.map