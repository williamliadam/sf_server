import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { BodyDetailUncheckedCreateNestedOneWithoutUserInput } from '../body-detail/body-detail-unchecked-create-nested-one-without-user.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { RecipeUncheckedCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-unchecked-create-nested-many-without-author.input';
import { MealPlanUncheckedCreateNestedManyWithoutCreateByInput } from '../meal-plan/meal-plan-unchecked-create-nested-many-without-create-by.input';
import { DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-plan-cooker.input';
export declare class UserUncheckedCreateWithoutMyMealTemplatesInput {
    id?: number;
    email?: string;
    name?: string;
    password: string;
    phone?: string;
    wxId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role?: keyof typeof Role;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    bodyDetail?: BodyDetailUncheckedCreateNestedOneWithoutUserInput;
    myPosts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    myRecipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput;
    myMealPlans?: MealPlanUncheckedCreateNestedManyWithoutCreateByInput;
    chargeDishPlans?: DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput;
}
