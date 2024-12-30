"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutMyMealTemplatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const profile_unchecked_create_nested_one_without_user_input_1 = require("../profile/profile-unchecked-create-nested-one-without-user.input");
const body_detail_unchecked_create_nested_one_without_user_input_1 = require("../body-detail/body-detail-unchecked-create-nested-one-without-user.input");
const post_unchecked_create_nested_many_without_author_input_1 = require("../post/post-unchecked-create-nested-many-without-author.input");
const recipe_unchecked_create_nested_many_without_author_input_1 = require("../recipe/recipe-unchecked-create-nested-many-without-author.input");
const meal_plan_unchecked_create_nested_many_without_create_by_input_1 = require("../meal-plan/meal-plan-unchecked-create-nested-many-without-create-by.input");
const dish_plan_unchecked_create_nested_many_without_plan_cooker_input_1 = require("../dish-plan/dish-plan-unchecked-create-nested-many-without-plan-cooker.input");
const user_auth_unchecked_create_nested_many_without_user_input_1 = require("../user-auth/user-auth-unchecked-create-nested-many-without-user.input");
let UserUncheckedCreateWithoutMyMealTemplatesInput = class UserUncheckedCreateWithoutMyMealTemplatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_create_nested_one_without_user_input_1.ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_unchecked_create_nested_one_without_user_input_1.BodyDetailUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_unchecked_create_nested_many_without_author_input_1.PostUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_unchecked_create_nested_many_without_author_input_1.RecipeUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_unchecked_create_nested_many_without_create_by_input_1.MealPlanUncheckedCreateNestedManyWithoutCreateByInput, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_create_nested_many_without_plan_cooker_input_1.DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "chargeDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_unchecked_create_nested_many_without_user_input_1.UserAuthUncheckedCreateNestedManyWithoutUserInput, { nullable: true })
], UserUncheckedCreateWithoutMyMealTemplatesInput.prototype, "auths", void 0);
UserUncheckedCreateWithoutMyMealTemplatesInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutMyMealTemplatesInput);
exports.UserUncheckedCreateWithoutMyMealTemplatesInput = UserUncheckedCreateWithoutMyMealTemplatesInput;
//# sourceMappingURL=user-unchecked-create-without-my-meal-templates.input.js.map