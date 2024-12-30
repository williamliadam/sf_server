"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutChargeDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const profile_create_nested_one_without_user_input_1 = require("../profile/profile-create-nested-one-without-user.input");
const body_detail_create_nested_one_without_user_input_1 = require("../body-detail/body-detail-create-nested-one-without-user.input");
const post_create_nested_many_without_author_input_1 = require("../post/post-create-nested-many-without-author.input");
const recipe_create_nested_many_without_author_input_1 = require("../recipe/recipe-create-nested-many-without-author.input");
const meal_template_create_nested_many_without_create_by_input_1 = require("../meal-template/meal-template-create-nested-many-without-create-by.input");
const meal_plan_create_nested_many_without_create_by_input_1 = require("../meal-plan/meal-plan-create-nested-many-without-create-by.input");
const user_auth_create_nested_many_without_user_input_1 = require("../user-auth/user-auth-create-nested-many-without-user.input");
let UserCreateWithoutChargeDishPlansInput = class UserCreateWithoutChargeDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_create_nested_one_without_user_input_1.ProfileCreateNestedOneWithoutUserInput, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_create_nested_one_without_user_input_1.BodyDetailCreateNestedOneWithoutUserInput, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_nested_many_without_author_input_1.PostCreateNestedManyWithoutAuthorInput, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_nested_many_without_author_input_1.RecipeCreateNestedManyWithoutAuthorInput, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_create_nested_many_without_create_by_input_1.MealTemplateCreateNestedManyWithoutCreateByInput, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_create_nested_many_without_create_by_input_1.MealPlanCreateNestedManyWithoutCreateByInput, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_create_nested_many_without_user_input_1.UserAuthCreateNestedManyWithoutUserInput, { nullable: true })
], UserCreateWithoutChargeDishPlansInput.prototype, "auths", void 0);
UserCreateWithoutChargeDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutChargeDishPlansInput);
exports.UserCreateWithoutChargeDishPlansInput = UserCreateWithoutChargeDishPlansInput;
//# sourceMappingURL=user-create-without-charge-dish-plans.input.js.map