import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutUsedDishTemplatesInput } from './recipe-create-without-used-dish-templates.input';

@InputType()
export class RecipeCreateOrConnectWithoutUsedDishTemplatesInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeCreateWithoutUsedDishTemplatesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutUsedDishTemplatesInput)
    create!: RecipeCreateWithoutUsedDishTemplatesInput;
}
