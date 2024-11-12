import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { Type } from 'class-transformer';
import { MateriaUnitCreateWithoutIngredientsInput } from './materia-unit-create-without-ingredients.input';

@InputType()
export class MateriaUnitCreateOrConnectWithoutIngredientsInput {

    @Field(() => MateriaUnitWhereUniqueInput, {nullable:false})
    @Type(() => MateriaUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;

    @Field(() => MateriaUnitCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => MateriaUnitCreateWithoutIngredientsInput)
    create!: MateriaUnitCreateWithoutIngredientsInput;
}
