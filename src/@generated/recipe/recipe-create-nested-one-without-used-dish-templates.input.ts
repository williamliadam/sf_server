import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutUsedDishTemplatesInput } from './recipe-create-without-used-dish-templates.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutUsedDishTemplatesInput } from './recipe-create-or-connect-without-used-dish-templates.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutUsedDishTemplatesInput {

    @Field(() => RecipeCreateWithoutUsedDishTemplatesInput, {nullable:true})
    @Type(() => RecipeCreateWithoutUsedDishTemplatesInput)
    create?: RecipeCreateWithoutUsedDishTemplatesInput;

    @Field(() => RecipeCreateOrConnectWithoutUsedDishTemplatesInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutUsedDishTemplatesInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishTemplatesInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
