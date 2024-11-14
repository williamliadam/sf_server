import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { BodyDetailUncheckedUpdateOneWithoutUserNestedInput } from '../body-detail/body-detail-unchecked-update-one-without-user-nested.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
import { MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput } from '../meal-template/meal-template-unchecked-update-many-without-create-by-nested.input';
import { MealPlanUncheckedUpdateManyWithoutCreateByNestedInput } from '../meal-plan/meal-plan-unchecked-update-many-without-create-by-nested.input';
import { DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput } from '../dish-plan/dish-plan-unchecked-update-many-without-plan-cooker-nested.input';
export declare class UserUncheckedUpdateWithoutMyRecipesInput {
    id?: IntFieldUpdateOperationsInput;
    email?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    phone?: NullableStringFieldUpdateOperationsInput;
    wxId?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    bodyDetail?: BodyDetailUncheckedUpdateOneWithoutUserNestedInput;
    myPosts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    myMealTemplates?: MealTemplateUncheckedUpdateManyWithoutCreateByNestedInput;
    myMealPlans?: MealPlanUncheckedUpdateManyWithoutCreateByNestedInput;
    chargeDishPlans?: DishPlanUncheckedUpdateManyWithoutPlanCookerNestedInput;
}
