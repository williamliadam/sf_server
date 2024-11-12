import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanCreateWithoutRecipeInput } from './dish-plan-create-without-recipe.input';

@InputType()
export class DishPlanCreateOrConnectWithoutRecipeInput {

    @Field(() => DishPlanWhereUniqueInput, {nullable:false})
    @Type(() => DishPlanWhereUniqueInput)
    where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

    @Field(() => DishPlanCreateWithoutRecipeInput, {nullable:false})
    @Type(() => DishPlanCreateWithoutRecipeInput)
    create!: DishPlanCreateWithoutRecipeInput;
}
