import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutMaterialInput } from './ingredient-update-without-material.input';
import { IngredientCreateWithoutMaterialInput } from './ingredient-create-without-material.input';

@InputType()
export class IngredientUpsertWithWhereUniqueWithoutMaterialInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateWithoutMaterialInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutMaterialInput)
    update!: IngredientUpdateWithoutMaterialInput;

    @Field(() => IngredientCreateWithoutMaterialInput, {nullable:false})
    @Type(() => IngredientCreateWithoutMaterialInput)
    create!: IngredientCreateWithoutMaterialInput;
}
