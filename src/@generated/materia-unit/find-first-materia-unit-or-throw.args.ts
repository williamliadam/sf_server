import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { Type } from 'class-transformer';
import { MateriaUnitOrderByWithRelationInput } from './materia-unit-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MateriaUnitScalarFieldEnum } from './materia-unit-scalar-field.enum';

@ArgsType()
export class FindFirstMateriaUnitOrThrowArgs {

    @Field(() => MateriaUnitWhereInput, {nullable:true})
    @Type(() => MateriaUnitWhereInput)
    where?: MateriaUnitWhereInput;

    @Field(() => [MateriaUnitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MateriaUnitOrderByWithRelationInput>;

    @Field(() => MateriaUnitWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MateriaUnitScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MateriaUnitScalarFieldEnum>;
}
