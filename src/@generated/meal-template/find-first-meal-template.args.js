"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMealTemplateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_where_input_1 = require("./meal-template-where.input");
const class_transformer_1 = require("class-transformer");
const meal_template_order_by_with_relation_input_1 = require("./meal-template-order-by-with-relation.input");
const meal_template_where_unique_input_1 = require("./meal-template-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const meal_template_scalar_field_enum_1 = require("./meal-template-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstMealTemplateArgs = class FindFirstMealTemplateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_input_1.MealTemplateWhereInput)
], FindFirstMealTemplateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_order_by_with_relation_input_1.MealTemplateOrderByWithRelationInput], { nullable: true })
], FindFirstMealTemplateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_unique_input_1.MealTemplateWhereUniqueInput, { nullable: true })
], FindFirstMealTemplateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMealTemplateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMealTemplateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_scalar_field_enum_1.MealTemplateScalarFieldEnum], { nullable: true })
], FindFirstMealTemplateArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindFirstMealTemplateArgs.prototype, "relationLoadStrategy", void 0);
FindFirstMealTemplateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstMealTemplateArgs);
exports.FindFirstMealTemplateArgs = FindFirstMealTemplateArgs;
//# sourceMappingURL=find-first-meal-template.args.js.map