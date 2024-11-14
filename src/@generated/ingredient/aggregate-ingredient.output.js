"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIngredient = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_count_aggregate_output_1 = require("./ingredient-count-aggregate.output");
const ingredient_avg_aggregate_output_1 = require("./ingredient-avg-aggregate.output");
const ingredient_sum_aggregate_output_1 = require("./ingredient-sum-aggregate.output");
const ingredient_min_aggregate_output_1 = require("./ingredient-min-aggregate.output");
const ingredient_max_aggregate_output_1 = require("./ingredient-max-aggregate.output");
let AggregateIngredient = class AggregateIngredient {
};
__decorate([
    (0, graphql_1.Field)(() => ingredient_count_aggregate_output_1.IngredientCountAggregate, { nullable: true })
], AggregateIngredient.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_avg_aggregate_output_1.IngredientAvgAggregate, { nullable: true })
], AggregateIngredient.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_sum_aggregate_output_1.IngredientSumAggregate, { nullable: true })
], AggregateIngredient.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_min_aggregate_output_1.IngredientMinAggregate, { nullable: true })
], AggregateIngredient.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_max_aggregate_output_1.IngredientMaxAggregate, { nullable: true })
], AggregateIngredient.prototype, "_max", void 0);
AggregateIngredient = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateIngredient);
exports.AggregateIngredient = AggregateIngredient;
//# sourceMappingURL=aggregate-ingredient.output.js.map