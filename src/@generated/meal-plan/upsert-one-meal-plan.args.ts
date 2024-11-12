import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MealPlanCreateInput } from './meal-plan-create.input';
import { MealPlanUpdateInput } from './meal-plan-update.input';

@ArgsType()
export class UpsertOneMealPlanArgs {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    @Type(() => MealPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;

    @Field(() => MealPlanCreateInput, {nullable:false})
    @Type(() => MealPlanCreateInput)
    create!: MealPlanCreateInput;

    @Field(() => MealPlanUpdateInput, {nullable:false})
    @Type(() => MealPlanUpdateInput)
    update!: MealPlanUpdateInput;
}
