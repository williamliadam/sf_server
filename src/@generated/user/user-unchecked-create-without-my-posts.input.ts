import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { BodyDetailUncheckedCreateNestedOneWithoutUserInput } from '../body-detail/body-detail-unchecked-create-nested-one-without-user.input';
import { RecipeUncheckedCreateNestedManyWithoutAuthorInput } from '../recipe/recipe-unchecked-create-nested-many-without-author.input';
import { MealTemplateUncheckedCreateNestedManyWithoutCreateByInput } from '../meal-template/meal-template-unchecked-create-nested-many-without-create-by.input';
import { MealPlanUncheckedCreateNestedManyWithoutCreateByInput } from '../meal-plan/meal-plan-unchecked-create-nested-many-without-create-by.input';
import { DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-plan-cooker.input';

@InputType()
export class UserUncheckedCreateWithoutMyPostsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    wxId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => BodyDetailUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    bodyDetail?: BodyDetailUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    myRecipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => MealTemplateUncheckedCreateNestedManyWithoutCreateByInput, {nullable:true})
    myMealTemplates?: MealTemplateUncheckedCreateNestedManyWithoutCreateByInput;

    @Field(() => MealPlanUncheckedCreateNestedManyWithoutCreateByInput, {nullable:true})
    myMealPlans?: MealPlanUncheckedCreateNestedManyWithoutCreateByInput;

    @Field(() => DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput, {nullable:true})
    chargeDishPlans?: DishPlanUncheckedCreateNestedManyWithoutPlanCookerInput;
}
