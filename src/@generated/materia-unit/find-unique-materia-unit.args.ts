import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMateriaUnitArgs {

    @Field(() => MateriaUnitWhereUniqueInput, {nullable:false})
    @Type(() => MateriaUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
}
