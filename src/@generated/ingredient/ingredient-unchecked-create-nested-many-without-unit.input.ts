import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutUnitInput } from './ingredient-create-without-unit.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutUnitInput } from './ingredient-create-or-connect-without-unit.input';
import { IngredientCreateManyUnitInputEnvelope } from './ingredient-create-many-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientUncheckedCreateNestedManyWithoutUnitInput {

    @Field(() => [IngredientCreateWithoutUnitInput], {nullable:true})
    @Type(() => IngredientCreateWithoutUnitInput)
    create?: Array<IngredientCreateWithoutUnitInput>;

    @Field(() => [IngredientCreateOrConnectWithoutUnitInput], {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutUnitInput)
    connectOrCreate?: Array<IngredientCreateOrConnectWithoutUnitInput>;

    @Field(() => IngredientCreateManyUnitInputEnvelope, {nullable:true})
    @Type(() => IngredientCreateManyUnitInputEnvelope)
    createMany?: IngredientCreateManyUnitInputEnvelope;

    @Field(() => [IngredientWhereUniqueInput], {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>>;
}
