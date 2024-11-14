"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyNutritionRowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_where_input_1 = require("./nutrition-row-where.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_order_by_with_relation_input_1 = require("./nutrition-row-order-by-with-relation.input");
const nutrition_row_where_unique_input_1 = require("./nutrition-row-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const nutrition_row_scalar_field_enum_1 = require("./nutrition-row-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindManyNutritionRowArgs = class FindManyNutritionRowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_where_input_1.NutritionRowWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_input_1.NutritionRowWhereInput)
], FindManyNutritionRowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_order_by_with_relation_input_1.NutritionRowOrderByWithRelationInput], { nullable: true })
], FindManyNutritionRowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput, { nullable: true })
], FindManyNutritionRowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyNutritionRowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyNutritionRowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_row_scalar_field_enum_1.NutritionRowScalarFieldEnum], { nullable: true })
], FindManyNutritionRowArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindManyNutritionRowArgs.prototype, "relationLoadStrategy", void 0);
FindManyNutritionRowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyNutritionRowArgs);
exports.FindManyNutritionRowArgs = FindManyNutritionRowArgs;
//# sourceMappingURL=find-many-nutrition-row.args.js.map