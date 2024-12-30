import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { BodyDetailCreateNestedOneWithoutUserInput } from '../body-detail/body-detail-create-nested-one-without-user.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { RecipeCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-create-nested-many-without-author.input';
import { MealPlanCreateNestedManyWithoutCreateByInput } from '../meal-plan/meal-plan-create-nested-many-without-create-by.input';
import { DishPlanCreateNestedManyWithoutPlanCookerInput } from '../dish-plan/dish-plan-create-nested-many-without-plan-cooker.input';
import { UserAuthCreateNestedManyWithoutUserInput } from '../user-auth/user-auth-create-nested-many-without-user.input';
export declare class UserCreateWithoutMyMealTemplatesInput {
    email?: string;
    name?: string;
    password?: string;
    phone?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role?: keyof typeof Role;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    bodyDetail?: BodyDetailCreateNestedOneWithoutUserInput;
    myPosts?: PostCreateNestedManyWithoutAuthorInput;
    myRecipes?: RecipeCreateNestedManyWithoutAuthorInput;
    myMealPlans?: MealPlanCreateNestedManyWithoutCreateByInput;
    chargeDishPlans?: DishPlanCreateNestedManyWithoutPlanCookerInput;
    auths?: UserAuthCreateNestedManyWithoutUserInput;
}
