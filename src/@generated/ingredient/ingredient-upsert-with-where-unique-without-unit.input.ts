import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutUnitInput } from './ingredient-update-without-unit.input';
import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';

@InputType()
export class IngredientUpsertWithWhereUniqueWithoutUnitInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateWithoutUnitInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutUnitInput)
    update!: IngredientUpdateWithoutUnitInput;

    @Field(() => IngredientCreateWithoutUnitInput, {nullable:false})
    @Type(() => IngredientCreateWithoutUnitInput)
    create!: IngredientCreateWithoutUnitInput;
}
