import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MealPlanUpdateWithoutCreateByInput } from './meal-plan-update-without-create-by.input';
import { MealPlanCreateWithoutCreateByInput } from './meal-plan-create-without-create-by.input';

@InputType()
export class MealPlanUpsertWithWhereUniqueWithoutCreateByInput {

    @Field(() => MealPlanWhereUniqueInput, {nullable:false})
    @Type(() => MealPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;

    @Field(() => MealPlanUpdateWithoutCreateByInput, {nullable:false})
    @Type(() => MealPlanUpdateWithoutCreateByInput)
    update!: MealPlanUpdateWithoutCreateByInput;

    @Field(() => MealPlanCreateWithoutCreateByInput, {nullable:false})
    @Type(() => MealPlanCreateWithoutCreateByInput)
    create!: MealPlanCreateWithoutCreateByInput;
}
