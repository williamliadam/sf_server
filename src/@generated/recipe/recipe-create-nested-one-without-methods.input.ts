import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutMethodsInput } from './recipe-create-without-methods.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutMethodsInput } from './recipe-create-or-connect-without-methods.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutMethodsInput {

    @Field(() => RecipeCreateWithoutMethodsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutMethodsInput)
    create?: RecipeCreateWithoutMethodsInput;

    @Field(() => RecipeCreateOrConnectWithoutMethodsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutMethodsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutMethodsInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
