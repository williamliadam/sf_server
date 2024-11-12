import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MealPlanCreateWithoutDishPlansInput } from './meal-plan-create-without-dish-plans.input';

@InputType()
export class MealPlanCreateOrConnectWithoutDishPlansInput {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    @Type(() => MealPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;

    @Field(() => MealPlanCreateWithoutDishPlansInput, {nullable:false})
    @Type(() => MealPlanCreateWithoutDishPlansInput)
    create!: MealPlanCreateWithoutDishPlansInput;
}
