"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_where_input_1 = require("./materia-category-where.input");
const class_transformer_1 = require("class-transformer");
const materia_category_order_by_with_relation_input_1 = require("./materia-category-order-by-with-relation.input");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const materia_category_count_aggregate_input_1 = require("./materia-category-count-aggregate.input");
const materia_category_avg_aggregate_input_1 = require("./materia-category-avg-aggregate.input");
const materia_category_sum_aggregate_input_1 = require("./materia-category-sum-aggregate.input");
const materia_category_min_aggregate_input_1 = require("./materia-category-min-aggregate.input");
const materia_category_max_aggregate_input_1 = require("./materia-category-max-aggregate.input");
let MateriaCategoryAggregateArgs = class MateriaCategoryAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_input_1.MateriaCategoryWhereInput)
], MateriaCategoryAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_order_by_with_relation_input_1.MateriaCategoryOrderByWithRelationInput], { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_count_aggregate_input_1.MateriaCategoryCountAggregateInput, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_avg_aggregate_input_1.MateriaCategoryAvgAggregateInput, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_sum_aggregate_input_1.MateriaCategorySumAggregateInput, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_min_aggregate_input_1.MateriaCategoryMinAggregateInput, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_max_aggregate_input_1.MateriaCategoryMaxAggregateInput, { nullable: true })
], MateriaCategoryAggregateArgs.prototype, "_max", void 0);
MateriaCategoryAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MateriaCategoryAggregateArgs);
exports.MateriaCategoryAggregateArgs = MateriaCategoryAggregateArgs;
//# sourceMappingURL=materia-category-aggregate.args.js.map