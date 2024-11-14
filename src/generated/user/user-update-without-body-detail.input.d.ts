import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { RecipeUpdateManyWithoutAuthorNestedInput } from '../recipe/recipe-update-many-without-author-nested.input';
import { MealTemplateUpdateManyWithoutCreateByNestedInput } from '../meal-template/meal-template-update-many-without-create-by-nested.input';
import { MealPlanUpdateManyWithoutCreateByNestedInput } from '../meal-plan/meal-plan-update-many-without-create-by-nested.input';
import { DishPlanUpdateManyWithoutPlanCookerNestedInput } from '../dish-plan/dish-plan-update-many-without-plan-cooker-nested.input';
export declare class UserUpdateWithoutBodyDetailInput {
    email?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    phone?: NullableStringFieldUpdateOperationsInput;
    wxId?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    myPosts?: PostUpdateManyWithoutAuthorNestedInput;
    myRecipes?: RecipeUpdateManyWithoutAuthorNestedInput;
    myMealTemplates?: MealTemplateUpdateManyWithoutCreateByNestedInput;
    myMealPlans?: MealPlanUpdateManyWithoutCreateByNestedInput;
    chargeDishPlans?: DishPlanUpdateManyWithoutPlanCookerNestedInput;
}
