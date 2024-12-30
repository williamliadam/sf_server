"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutMyRecipesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const profile_create_nested_one_without_user_input_1 = require("../profile/profile-create-nested-one-without-user.input");
const body_detail_create_nested_one_without_user_input_1 = require("../body-detail/body-detail-create-nested-one-without-user.input");
const post_create_nested_many_without_author_input_1 = require("../post/post-create-nested-many-without-author.input");
const meal_template_create_nested_many_without_create_by_input_1 = require("../meal-template/meal-template-create-nested-many-without-create-by.input");
const meal_plan_create_nested_many_without_create_by_input_1 = require("../meal-plan/meal-plan-create-nested-many-without-create-by.input");
const dish_plan_create_nested_many_without_plan_cooker_input_1 = require("../dish-plan/dish-plan-create-nested-many-without-plan-cooker.input");
const user_auth_create_nested_many_without_user_input_1 = require("../user-auth/user-auth-create-nested-many-without-user.input");
let UserCreateWithoutMyRecipesInput = class UserCreateWithoutMyRecipesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_create_nested_one_without_user_input_1.ProfileCreateNestedOneWithoutUserInput, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_create_nested_one_without_user_input_1.BodyDetailCreateNestedOneWithoutUserInput, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_nested_many_without_create_by_input_1.MealTemplateCreateNestedManyWithoutCreateByInput, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_create_nested_many_without_create_by_input_1.MealPlanCreateNestedManyWithoutCreateByInput, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_nested_many_without_plan_cooker_input_1.DishPlanCreateNestedManyWithoutPlanCookerInput, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "chargeDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_create_nested_many_without_user_input_1.UserAuthCreateNestedManyWithoutUserInput, { nullable: true })
], UserCreateWithoutMyRecipesInput.prototype, "auths", void 0);
UserCreateWithoutMyRecipesInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutMyRecipesInput);
exports.UserCreateWithoutMyRecipesInput = UserCreateWithoutMyRecipesInput;
//# sourceMappingURL=user-create-without-my-recipes.input.js.map