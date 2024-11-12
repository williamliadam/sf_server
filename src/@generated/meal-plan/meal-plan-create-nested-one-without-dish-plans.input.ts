import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MealPlanCreateWithoutDishPlansInput } from './meal-plan-create-without-dish-plans.input';
import { Type } from 'class-transformer';
import { MealPlanCreateOrConnectWithoutDishPlansInput } from './meal-plan-create-or-connect-without-dish-plans.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';

@InputType()
export class MealPlanCreateNestedOneWithoutDishPlansInput {

    @Field(() => MealPlanCreateWithoutDishPlansInput, {nullable:true})
    @Type(() => MealPlanCreateWithoutDishPlansInput)
    create?: MealPlanCreateWithoutDishPlansInput;

    @Field(() => MealPlanCreateOrConnectWithoutDishPlansInput, {nullable:true})
    @Type(() => MealPlanCreateOrConnectWithoutDishPlansInput)
    connectOrCreate?: MealPlanCreateOrConnectWithoutDishPlansInput;

    @Field(() => MealPlanWhereUniqueInput, {nullable:true})
    @Type(() => MealPlanWhereUniqueInput)
    connect?: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
}
