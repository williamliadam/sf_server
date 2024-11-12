import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitUpdateInput } from './materia-unit-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';

@ArgsType()
export class UpdateOneMateriaUnitArgs {

    @Field(() => MateriaUnitUpdateInput, {nullable:false})
    @Type(() => MateriaUnitUpdateInput)
    data!: MateriaUnitUpdateInput;

    @Field(() => MateriaUnitWhereUniqueInput, {nullable:false})
    @Type(() => MateriaUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
}
