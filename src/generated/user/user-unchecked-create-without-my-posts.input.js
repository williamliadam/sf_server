"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedCreateWithoutMyPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const profile_unchecked_create_nested_one_without_user_input_1 = require("../profile/profile-unchecked-create-nested-one-without-user.input");
const body_detail_unchecked_create_nested_one_without_user_input_1 = require("../body-detail/body-detail-unchecked-create-nested-one-without-user.input");
const recipe_unchecked_create_nested_many_without_author_input_1 = require("../recipe/recipe-unchecked-create-nested-many-without-author.input");
const meal_template_unchecked_create_nested_many_without_create_by_input_1 = require("../meal-template/meal-template-unchecked-create-nested-many-without-create-by.input");
const meal_plan_unchecked_create_nested_many_without_create_by_input_1 = require("../meal-plan/meal-plan-unchecked-create-nested-many-without-create-by.input");
const dish_plan_unchecked_create_nested_many_without_plan_cooker_input_1 = require("../dish-plan/dish-plan-unchecked-create-nested-many-without-plan-cooker.input");
let UserUncheckedCreateWithoutMyPostsInput = class UserUncheckedCreateWithoutMyPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "wxId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_create_nested_one_without_user_input_1.ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_unchecked_create_nested_one_without_user_input_1.BodyDetailUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_unchecked_create_nested_many_without_author_input_1.RecipeUncheckedCreateNestedManyWithoutAuthorInput, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_unchecked_create_nested_many_without_create_by_input_1.MealTemplateUncheckedCreateNestedManyWithoutCreateByInput, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_unchecked_create_nested_many_without_create_by_input_1.MealPlanUncheckedCreateNestedManyWithoutCreateByInput, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_create_nested_many_without_plan_cooker_input_1.DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput, { nullable: true })
], UserUncheckedCreateWithoutMyPostsInput.prototype, "chargeDishPlans", void 0);
UserUncheckedCreateWithoutMyPostsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutMyPostsInput);
exports.UserUncheckedCreateWithoutMyPostsInput = UserUncheckedCreateWithoutMyPostsInput;
//# sourceMappingURL=user-unchecked-create-without-my-posts.input.js.map