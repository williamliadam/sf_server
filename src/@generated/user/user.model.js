"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const profile_model_1 = require("../profile/profile.model");
const body_detail_model_1 = require("../body-detail/body-detail.model");
const post_model_1 = require("../post/post.model");
const recipe_model_1 = require("../recipe/recipe.model");
const meal_template_model_1 = require("../meal-template/meal-template.model");
const meal_plan_model_1 = require("../meal-plan/meal-plan.model");
const dish_plan_model_1 = require("../dish-plan/dish-plan.model");
const user_count_output_1 = require("./user-count.output");
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "wxId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false, defaultValue: 'USER' })
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_model_1.Profile, { nullable: true })
], User.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_model_1.BodyDetail, { nullable: true })
], User.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_model_1.Post], { nullable: true })
], User.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_model_1.Recipe], { nullable: true })
], User.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_model_1.MealTemplate], { nullable: true })
], User.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_model_1.MealPlan], { nullable: true })
], User.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_model_1.DishPlan], { nullable: true })
], User.prototype, "chargeDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_output_1.UserCount, { nullable: false })
], User.prototype, "_count", void 0);
User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map