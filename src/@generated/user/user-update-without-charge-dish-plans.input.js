"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutChargeDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const profile_update_one_without_user_nested_input_1 = require("../profile/profile-update-one-without-user-nested.input");
const body_detail_update_one_without_user_nested_input_1 = require("../body-detail/body-detail-update-one-without-user-nested.input");
const post_update_many_without_author_nested_input_1 = require("../post/post-update-many-without-author-nested.input");
const recipe_update_many_without_author_nested_input_1 = require("../recipe/recipe-update-many-without-author-nested.input");
const meal_template_update_many_without_create_by_nested_input_1 = require("../meal-template/meal-template-update-many-without-create-by-nested.input");
const meal_plan_update_many_without_create_by_nested_input_1 = require("../meal-plan/meal-plan-update-many-without-create-by-nested.input");
const user_auth_update_many_without_user_nested_input_1 = require("../user-auth/user-auth-update-many-without-user-nested.input");
let UserUpdateWithoutChargeDishPlansInput = class UserUpdateWithoutChargeDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_update_one_without_user_nested_input_1.ProfileUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_update_one_without_user_nested_input_1.BodyDetailUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_many_without_author_nested_input_1.PostUpdateManyWithoutAuthorNestedInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_many_without_author_nested_input_1.RecipeUpdateManyWithoutAuthorNestedInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_update_many_without_create_by_nested_input_1.MealTemplateUpdateManyWithoutCreateByNestedInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_update_many_without_create_by_nested_input_1.MealPlanUpdateManyWithoutCreateByNestedInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_update_many_without_user_nested_input_1.UserAuthUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUpdateWithoutChargeDishPlansInput.prototype, "auths", void 0);
UserUpdateWithoutChargeDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateWithoutChargeDishPlansInput);
exports.UserUpdateWithoutChargeDishPlansInput = UserUpdateWithoutChargeDishPlansInput;
//# sourceMappingURL=user-update-without-charge-dish-plans.input.js.map