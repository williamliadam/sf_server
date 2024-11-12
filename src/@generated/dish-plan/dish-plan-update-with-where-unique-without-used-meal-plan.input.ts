import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanUpdateWithoutUsedMealPlanInput } from './dish-plan-update-without-used-meal-plan.input';

@InputType()
export class DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput {

    @Field(() => DishPlanWhereUniqueInput, {nullable:false})
    @Type(() => DishPlanWhereUniqueInput)
    where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

    @Field(() => DishPlanUpdateWithoutUsedMealPlanInput, {nullable:false})
    @Type(() => DishPlanUpdateWithoutUsedMealPlanInput)
    data!: DishPlanUpdateWithoutUsedMealPlanInput;
}
