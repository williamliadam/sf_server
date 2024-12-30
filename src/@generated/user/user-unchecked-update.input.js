"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const profile_unchecked_update_one_without_user_nested_input_1 = require("../profile/profile-unchecked-update-one-without-user-nested.input");
const body_detail_unchecked_update_one_without_user_nested_input_1 = require("../body-detail/body-detail-unchecked-update-one-without-user-nested.input");
const post_unchecked_update_many_without_author_nested_input_1 = require("../post/post-unchecked-update-many-without-author-nested.input");
const recipe_unchecked_update_many_without_author_nested_input_1 = require("../recipe/recipe-unchecked-update-many-without-author-nested.input");
const meal_template_unchecked_update_many_without_create_by_nested_input_1 = require("../meal-template/meal-template-unchecked-update-many-without-create-by-nested.input");
const meal_plan_unchecked_update_many_without_create_by_nested_input_1 = require("../meal-plan/meal-plan-unchecked-update-many-without-create-by-nested.input");
const dish_plan_unchecked_update_many_without_plan_cooker_nested_input_1 = require("../dish-plan/dish-plan-unchecked-update-many-without-plan-cooker-nested.input");
const user_auth_unchecked_update_many_without_user_nested_input_1 = require("../user-auth/user-auth-unchecked-update-many-without-user-nested.input");
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_unchecked_update_one_without_user_nested_input_1.ProfileUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_unchecked_update_one_without_user_nested_input_1.BodyDetailUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_unchecked_update_many_without_author_nested_input_1.PostUncheckedUpdateManyWithoutAuthorNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_unchecked_update_many_without_author_nested_input_1.RecipeUncheckedUpdateManyWithoutAuthorNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_unchecked_update_many_without_create_by_nested_input_1.MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_unchecked_update_many_without_create_by_nested_input_1.MealPlanUncheckedUpdateManyWithoutCreateByNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_update_many_without_plan_cooker_nested_input_1.DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "chargeDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_unchecked_update_many_without_user_nested_input_1.UserAuthUncheckedUpdateManyWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "auths", void 0);
UserUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateInput);
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput;
//# sourceMappingURL=user-unchecked-update.input.js.map