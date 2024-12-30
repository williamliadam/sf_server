"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutBodyDetailInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const profile_update_one_without_user_nested_input_1 = require("../profile/profile-update-one-without-user-nested.input");
const post_update_many_without_author_nested_input_1 = require("../post/post-update-many-without-author-nested.input");
const recipe_update_many_without_author_nested_input_1 = require("../recipe/recipe-update-many-without-author-nested.input");
const meal_template_update_many_without_create_by_nested_input_1 = require("../meal-template/meal-template-update-many-without-create-by-nested.input");
const meal_plan_update_many_without_create_by_nested_input_1 = require("../meal-plan/meal-plan-update-many-without-create-by-nested.input");
const dish_plan_update_many_without_plan_cooker_nested_input_1 = require("../dish-plan/dish-plan-update-many-without-plan-cooker-nested.input");
const user_auth_update_many_without_user_nested_input_1 = require("../user-auth/user-auth-update-many-without-user-nested.input");
let UserUpdateWithoutBodyDetailInput = class UserUpdateWithoutBodyDetailInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_update_one_without_user_nested_input_1.ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_many_without_author_nested_input_1.PostUpdateManyWithoutAuthorNestedInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_many_without_author_nested_input_1.RecipeUpdateManyWithoutAuthorNestedInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_update_many_without_create_by_nested_input_1.MealTemplateUpdateManyWithoutCreateByNestedInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_update_many_without_create_by_nested_input_1.MealPlanUpdateManyWithoutCreateByNestedInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_update_many_without_plan_cooker_nested_input_1.DishPlanUpdateManyWithoutPlanCookerNestedInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "chargeDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_update_many_without_user_nested_input_1.UserAuthUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutBodyDetailInput.prototype, "auths", void 0);
UserUpdateWithoutBodyDetailInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateWithoutBodyDetailInput);
exports.UserUpdateWithoutBodyDetailInput = UserUpdateWithoutBodyDetailInput;
//# sourceMappingURL=user-update-without-body-detail.input.js.map