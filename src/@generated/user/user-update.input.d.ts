import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { BodyDetailUpdateOneWithoutUserNestedInput } from '../body-detail/body-detail-update-one-without-user-nested.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { RecipeUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-update-many-without-author-nested.input';
import { MealTemplateUpdateManyWithoutCreateByNestedInput } from '../meal-template/meal-template-update-many-without-create-by-nested.input';
import { MealPlanUpdateManyWithoutCreateByNestedInput } from '../meal-plan/meal-plan-update-many-without-create-by-nested.input';
import { DishPlanUpdateManyWithoutPlanCookerNestedInput } from '../dish-plan/dish-plan-update-many-without-plan-cooker-nested.input';
import { UserAuthUpdateManyWithoutUserNestedInput } from '../user-auth/user-auth-update-many-without-user-nested.input';
export declare class UserUpdateInput {
    email?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: NullableStringFieldUpdateOperationsInput;
    phone?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    bodyDetail?: BodyDetailUpdateOneWithoutUserNestedInput;
    myPosts?: PostUpdateManyWithoutAuthorNestedInput;
    myRecipes?: RecipeUpdateManyWithoutAuthorNestedInput;
    myMealTemplates?: MealTemplateUpdateManyWithoutCreateByNestedInput;
    myMealPlans?: MealPlanUpdateManyWithoutCreateByNestedInput;
    chargeDishPlans?: DishPlanUpdateManyWithoutPlanCookerNestedInput;
    auths?: UserAuthUpdateManyWithoutUserNestedInput;
}
