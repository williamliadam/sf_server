"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DishTemplateWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const meal_template_nullable_relation_filter_input_1 = require("../meal-template/meal-template-nullable-relation-filter.input");
const recipe_relation_filter_input_1 = require("../recipe/recipe-relation-filter.input");
let DishTemplateWhereInput = DishTemplateWhereInput_1 = class DishTemplateWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DishTemplateWhereInput_1], { nullable: true })
], DishTemplateWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishTemplateWhereInput_1], { nullable: true })
], DishTemplateWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishTemplateWhereInput_1], { nullable: true })
], DishTemplateWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "mealTemplateId", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_nullable_relation_filter_input_1.MealTemplateNullableRelationFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "usedMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_relation_filter_input_1.RecipeRelationFilter, { nullable: true })
], DishTemplateWhereInput.prototype, "recipe", void 0);
DishTemplateWhereInput = DishTemplateWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateWhereInput);
exports.DishTemplateWhereInput = DishTemplateWhereInput;
//# sourceMappingURL=dish-template-where.input.js.map