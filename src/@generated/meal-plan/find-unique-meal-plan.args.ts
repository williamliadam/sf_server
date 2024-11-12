import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMealPlanArgs {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    @Type(() => MealPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
}
