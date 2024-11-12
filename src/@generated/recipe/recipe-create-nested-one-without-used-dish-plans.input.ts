import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutUsedDishPlansInput } from './recipe-create-without-used-dish-plans.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutUsedDishPlansInput } from './recipe-create-or-connect-without-used-dish-plans.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutUsedDishPlansInput {

    @Field(() => RecipeCreateWithoutUsedDishPlansInput, {nullable:true})
    @Type(() => RecipeCreateWithoutUsedDishPlansInput)
    create?: RecipeCreateWithoutUsedDishPlansInput;

    @Field(() => RecipeCreateOrConnectWithoutUsedDishPlansInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutUsedDishPlansInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishPlansInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
