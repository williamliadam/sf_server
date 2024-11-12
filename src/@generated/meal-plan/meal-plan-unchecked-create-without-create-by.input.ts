import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';
import { DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput } from '../dish-plan/dish-plan-unchecked-create-nested-many-without-used-meal-plan.input';

@InputType()
export class MealPlanUncheckedCreateWithoutCreateByInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    planTime?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MealType, {nullable:true})
    type?: keyof typeof MealType;

    @Field(() => DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput, {nullable:true})
    dishPlans?: DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput;
}
