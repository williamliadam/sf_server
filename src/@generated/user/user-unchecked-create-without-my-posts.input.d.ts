import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { BodyDetailUncheckedCreateNestedOneWithoutUserInput } from '../body-detail/body-detail-unchecked-create-nested-one-without-user.input';
import { RecipeUncheckedCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-unchecked-create-nested-many-without-author.input';
import { MealTemplateUncheckedCreateNestedManyWithoutCreateByInput } from '../meal-template/meal-template-unchecked-create-nested-many-without-create-by.input';
import { MealPlanUncheckedCreateNestedManyWithoutCreateByInput } from '../meal-plan/meal-plan-unchecked-create-nested-many-without-create-by.input';
import { DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-plan-cooker.input';
import { UserAuthUncheckedCreateNestedManyWithoutUserInput } from '../user-auth/user-auth-unchecked-create-nested-many-without-user.input';
export declare class UserUncheckedCreateWithoutMyPostsInput {
    id?: number;
    email?: string;
    name?: string;
    password?: string;
    phone?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role?: keyof typeof Role;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    bodyDetail?: BodyDetailUncheckedCreateNestedOneWithoutUserInput;
    myRecipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput;
    myMealTemplates?: MealTemplateUncheckedCreateNestedManyWithoutCreateByInput;
    myMealPlans?: MealPlanUncheckedCreateNestedManyWithoutCreateByInput;
    chargeDishPlans?: DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput;
    auths?: UserAuthUncheckedCreateNestedManyWithoutUserInput;
}
