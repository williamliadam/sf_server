import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutUsedDishPlansInput } from './recipe-create-without-used-dish-plans.input';

@InputType()
export class RecipeCreateOrConnectWithoutUsedDishPlansInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeCreateWithoutUsedDishPlansInput, {nullable:false})
    @Type(() => RecipeCreateWithoutUsedDishPlansInput)
    create!: RecipeCreateWithoutUsedDishPlansInput;
}
