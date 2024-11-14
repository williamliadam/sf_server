"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_where_input_1 = require("./material-where.input");
const class_transformer_1 = require("class-transformer");
const material_order_by_with_relation_input_1 = require("./material-order-by-with-relation.input");
const material_where_unique_input_1 = require("./material-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const material_count_aggregate_input_1 = require("./material-count-aggregate.input");
const material_avg_aggregate_input_1 = require("./material-avg-aggregate.input");
const material_sum_aggregate_input_1 = require("./material-sum-aggregate.input");
const material_min_aggregate_input_1 = require("./material-min-aggregate.input");
const material_max_aggregate_input_1 = require("./material-max-aggregate.input");
let MaterialAggregateArgs = class MaterialAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => material_where_input_1.MaterialWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_input_1.MaterialWhereInput)
], MaterialAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_order_by_with_relation_input_1.MaterialOrderByWithRelationInput], { nullable: true })
], MaterialAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_unique_input_1.MaterialWhereUniqueInput, { nullable: true })
], MaterialAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MaterialAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MaterialAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_count_aggregate_input_1.MaterialCountAggregateInput, { nullable: true })
], MaterialAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_avg_aggregate_input_1.MaterialAvgAggregateInput, { nullable: true })
], MaterialAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_sum_aggregate_input_1.MaterialSumAggregateInput, { nullable: true })
], MaterialAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_min_aggregate_input_1.MaterialMinAggregateInput, { nullable: true })
], MaterialAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_max_aggregate_input_1.MaterialMaxAggregateInput, { nullable: true })
], MaterialAggregateArgs.prototype, "_max", void 0);
MaterialAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], MaterialAggregateArgs);
exports.MaterialAggregateArgs = MaterialAggregateArgs;
//# sourceMappingURL=material-aggregate.args.js.map