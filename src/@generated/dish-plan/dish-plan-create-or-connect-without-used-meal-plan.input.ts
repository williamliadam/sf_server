import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanCreateWithoutUsedMealPlanInput } from './dish-plan-create-without-used-meal-plan.input';

@InputType()
export class DishPlanCreateOrConnectWithoutUsedMealPlanInput {

    @Field(() => DishPlanWhereUniqueInput, {nullable:false})
    @Type(() => DishPlanWhereUniqueInput)
    where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

    @Field(() => DishPlanCreateWithoutUsedMealPlanInput, {nullable:false})
    @Type(() => DishPlanCreateWithoutUsedMealPlanInput)
    create!: DishPlanCreateWithoutUsedMealPlanInput;
}
