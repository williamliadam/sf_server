import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { BodyDetailCreateNestedOneWithoutUserInput } from '../body-detail/body-detail-create-nested-one-without-user.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { MealTemplateCreateNestedManyWithoutCreateByInput } from '../meal-template/meal-template-create-nested-many-without-create-by.input';
import { MealPlanCreateNestedManyWithoutCreateByInput } from '../meal-plan/meal-plan-create-nested-many-without-create-by.input';
import { DishPlanCreateNestedManyWithoutPlanCookerInput } from '../dish-plan/dish-plan-create-nested-many-without-plan-cooker.input';
export declare class UserCreateWithoutMyRecipesInput {
    email?: string;
    name?: string;
    password: string;
    phone?: string;
    wxId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role?: keyof typeof Role;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    bodyDetail?: BodyDetailCreateNestedOneWithoutUserInput;
    myPosts?: PostCreateNestedManyWithoutAuthorInput;
    myMealTemplates?: MealTemplateCreateNestedManyWithoutCreateByInput;
    myMealPlans?: MealPlanCreateNestedManyWithoutCreateByInput;
    chargeDishPlans?: DishPlanCreateNestedManyWithoutPlanCookerInput;
}
