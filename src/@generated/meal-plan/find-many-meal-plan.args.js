"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMealPlanArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_where_input_1 = require("./meal-plan-where.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_order_by_with_relation_input_1 = require("./meal-plan-order-by-with-relation.input");
const meal_plan_where_unique_input_1 = require("./meal-plan-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const meal_plan_scalar_field_enum_1 = require("./meal-plan-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindManyMealPlanArgs = class FindManyMealPlanArgs {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_input_1.MealPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_input_1.MealPlanWhereInput)
], FindManyMealPlanArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_order_by_with_relation_input_1.MealPlanOrderByWithRelationInput], { nullable: true })
], FindManyMealPlanArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput, { nullable: true })
], FindManyMealPlanArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyMealPlanArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyMealPlanArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_scalar_field_enum_1.MealPlanScalarFieldEnum], { nullable: true })
], FindManyMealPlanArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindManyMealPlanArgs.prototype, "relationLoadStrategy", void 0);
FindManyMealPlanArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyMealPlanArgs);
exports.FindManyMealPlanArgs = FindManyMealPlanArgs;
//# sourceMappingURL=find-many-meal-plan.args.js.map