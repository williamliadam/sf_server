"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const profile_nullable_relation_filter_input_1 = require("../profile/profile-nullable-relation-filter.input");
const body_detail_nullable_relation_filter_input_1 = require("../body-detail/body-detail-nullable-relation-filter.input");
const post_list_relation_filter_input_1 = require("../post/post-list-relation-filter.input");
const recipe_list_relation_filter_input_1 = require("../recipe/recipe-list-relation-filter.input");
const meal_template_list_relation_filter_input_1 = require("../meal-template/meal-template-list-relation-filter.input");
const meal_plan_list_relation_filter_input_1 = require("../meal-plan/meal-plan-list-relation-filter.input");
const dish_plan_list_relation_filter_input_1 = require("../dish-plan/dish-plan-list-relation-filter.input");
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "wxId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_nullable_relation_filter_input_1.ProfileNullableRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_nullable_relation_filter_input_1.BodyDetailNullableRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_list_relation_filter_input_1.PostListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_list_relation_filter_input_1.RecipeListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_list_relation_filter_input_1.MealTemplateListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_list_relation_filter_input_1.MealPlanListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_list_relation_filter_input_1.DishPlanListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "chargeDishPlans", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;
//# sourceMappingURL=user-where-unique.input.js.map