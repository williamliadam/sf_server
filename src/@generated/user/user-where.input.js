"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const profile_nullable_relation_filter_input_1 = require("../profile/profile-nullable-relation-filter.input");
const body_detail_nullable_relation_filter_input_1 = require("../body-detail/body-detail-nullable-relation-filter.input");
const post_list_relation_filter_input_1 = require("../post/post-list-relation-filter.input");
const recipe_list_relation_filter_input_1 = require("../recipe/recipe-list-relation-filter.input");
const meal_template_list_relation_filter_input_1 = require("../meal-template/meal-template-list-relation-filter.input");
const meal_plan_list_relation_filter_input_1 = require("../meal-plan/meal-plan-list-relation-filter.input");
const dish_plan_list_relation_filter_input_1 = require("../dish-plan/dish-plan-list-relation-filter.input");
const user_auth_list_relation_filter_input_1 = require("../user-auth/user-auth-list-relation-filter.input");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true })
], UserWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true })
], UserWhereInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true })
], UserWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_nullable_relation_filter_input_1.ProfileNullableRelationFilter, { nullable: true })
], UserWhereInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_nullable_relation_filter_input_1.BodyDetailNullableRelationFilter, { nullable: true })
], UserWhereInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_list_relation_filter_input_1.PostListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_list_relation_filter_input_1.RecipeListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_list_relation_filter_input_1.MealTemplateListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_list_relation_filter_input_1.MealPlanListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_list_relation_filter_input_1.DishPlanListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "chargeDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_list_relation_filter_input_1.UserAuthListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "auths", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=user-where.input.js.map