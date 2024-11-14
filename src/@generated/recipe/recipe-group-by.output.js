"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const recipe_count_aggregate_output_1 = require("./recipe-count-aggregate.output");
const recipe_avg_aggregate_output_1 = require("./recipe-avg-aggregate.output");
const recipe_sum_aggregate_output_1 = require("./recipe-sum-aggregate.output");
const recipe_min_aggregate_output_1 = require("./recipe-min-aggregate.output");
const recipe_max_aggregate_output_1 = require("./recipe-max-aggregate.output");
let RecipeGroupBy = class RecipeGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], RecipeGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeGroupBy.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], RecipeGroupBy.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], RecipeGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], RecipeGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_count_aggregate_output_1.RecipeCountAggregate, { nullable: true })
], RecipeGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_avg_aggregate_output_1.RecipeAvgAggregate, { nullable: true })
], RecipeGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_sum_aggregate_output_1.RecipeSumAggregate, { nullable: true })
], RecipeGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_min_aggregate_output_1.RecipeMinAggregate, { nullable: true })
], RecipeGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_max_aggregate_output_1.RecipeMaxAggregate, { nullable: true })
], RecipeGroupBy.prototype, "_max", void 0);
RecipeGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], RecipeGroupBy);
exports.RecipeGroupBy = RecipeGroupBy;
//# sourceMappingURL=recipe-group-by.output.js.map