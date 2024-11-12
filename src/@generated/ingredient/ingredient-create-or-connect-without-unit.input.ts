import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';

@InputType()
export class IngredientCreateOrConnectWithoutUnitInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutUnitInput, {nullable:false})
    @Type(() => IngredientCreateWithoutUnitInput)
    create!: IngredientCreateWithoutUnitInput;
}
