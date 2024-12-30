import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
import { RecipeUncheckedUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-unchecked-update-many-without-author-nested.input';
import { MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput } from '../meal-template/meal-template-unchecked-update-many-without-create-by-nested.input';
import { MealPlanUncheckedUpdateManyWithoutCreateByNestedInput } from '../meal-plan/meal-plan-unchecked-update-many-without-create-by-nested.input';
import { DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput } from '../dish-plan/dish-plan-unchecked-update-many-without-plan-cooker-nested.input';
import { UserAuthUncheckedUpdateManyWithoutUserNestedInput } from '../user-auth/user-auth-unchecked-update-many-without-user-nested.input';
export declare class UserUncheckedUpdateWithoutBodyDetailInput {
    id?: IntFieldUpdateOperationsInput;
    email?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: NullableStringFieldUpdateOperationsInput;
    phone?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    myPosts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    myRecipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput;
    myMealTemplates?: MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput;
    myMealPlans?: MealPlanUncheckedUpdateManyWithoutCreateByNestedInput;
    chargeDishPlans?: DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput;
    auths?: UserAuthUncheckedUpdateManyWithoutUserNestedInput;
}
