import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { Type } from 'class-transformer';
import { DishPlanUpdateWithoutRecipeInput } from './dish-plan-update-without-recipe.input';

@InputType()
export class DishPlanUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => DishPlanWhereUniqueInput, {nullable:false})
    @Type(() => DishPlanWhereUniqueInput)
    where!: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;

    @Field(() => DishPlanUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => DishPlanUpdateWithoutRecipeInput)
    data!: DishPlanUpdateWithoutRecipeInput;
}
