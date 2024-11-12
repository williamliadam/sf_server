import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutIngredientsInput } from './recipe-create-or-connect-without-ingredients.input';
import { RecipeUpsertWithoutIngredientsInput } from './recipe-upsert-without-ingredients.input';
import { RecipeWhereInput } from './recipe-where.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutIngredientsInput } from './recipe-update-to-one-with-where-without-ingredients.input';

@InputType()
export class RecipeUpdateOneWithoutIngredientsNestedInput {

    @Field(() => RecipeCreateWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutIngredientsInput)
    create?: RecipeCreateWithoutIngredientsInput;

    @Field(() => RecipeCreateOrConnectWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutIngredientsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput;

    @Field(() => RecipeUpsertWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutIngredientsInput)
    upsert?: RecipeUpsertWithoutIngredientsInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    disconnect?: RecipeWhereInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    delete?: RecipeWhereInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutIngredientsInput)
    update?: RecipeUpdateToOneWithWhereWithoutIngredientsInput;
}
