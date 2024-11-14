import { Role } from '../prisma/role.enum';
import { BodyDetailCreateNestedOneWithoutUserInput } from '../body-detail/body-detail-create-nested-one-without-user.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { RecipeCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-create-nested-many-without-author.input';
import { MealTemplateCreateNestedManyWithoutCreateByInput } from '../meal-template/meal-template-create-nested-many-without-create-by.input';
import { MealPlanCreateNestedManyWithoutCreateByInput } from '../meal-plan/meal-plan-create-nested-many-without-create-by.input';
import { DishPlanCreateNestedManyWithoutPlanCookerInput } from '../dish-plan/dish-plan-create-nested-many-without-plan-cooker.input';
export declare class UserCreateWithoutProfileInput {
    email?: string;
    name?: string;
    password: string;
    phone?: string;
    wxId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role?: keyof typeof Role;
    bodyDetail?: BodyDetailCreateNestedOneWithoutUserInput;
    myPosts?: PostCreateNestedManyWithoutAuthorInput;
    myRecipes?: RecipeCreateNestedManyWithoutAuthorInput;
    myMealTemplates?: MealTemplateCreateNestedManyWithoutCreateByInput;
    myMealPlans?: MealPlanCreateNestedManyWithoutCreateByInput;
    chargeDishPlans?: DishPlanCreateNestedManyWithoutPlanCookerInput;
}
