"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RecipeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const ingredient_list_relation_filter_input_1 = require("../ingredient/ingredient-list-relation-filter.input");
const method_list_relation_filter_input_1 = require("../method/method-list-relation-filter.input");
const dish_plan_list_relation_filter_input_1 = require("../dish-plan/dish-plan-list-relation-filter.input");
const dish_template_list_relation_filter_input_1 = require("../dish-template/dish-template-list-relation-filter.input");
let RecipeWhereInput = RecipeWhereInput_1 = class RecipeWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [RecipeWhereInput_1], { nullable: true })
], RecipeWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [RecipeWhereInput_1], { nullable: true })
], RecipeWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [RecipeWhereInput_1], { nullable: true })
], RecipeWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], RecipeWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], RecipeWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], RecipeWhereInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], RecipeWhereInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], RecipeWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], RecipeWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], RecipeWhereInput.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_list_relation_filter_input_1.IngredientListRelationFilter, { nullable: true })
], RecipeWhereInput.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_list_relation_filter_input_1.MethodListRelationFilter, { nullable: true })
], RecipeWhereInput.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_list_relation_filter_input_1.DishPlanListRelationFilter, { nullable: true })
], RecipeWhereInput.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_list_relation_filter_input_1.DishTemplateListRelationFilter, { nullable: true })
], RecipeWhereInput.prototype, "usedDishTemplates", void 0);
RecipeWhereInput = RecipeWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], RecipeWhereInput);
exports.RecipeWhereInput = RecipeWhereInput;
//# sourceMappingURL=recipe-where.input.js.map