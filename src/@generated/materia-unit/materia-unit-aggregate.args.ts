import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { Type } from 'class-transformer';
import { MateriaUnitOrderByWithRelationInput } from './materia-unit-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MateriaUnitCountAggregateInput } from './materia-unit-count-aggregate.input';
import { MateriaUnitAvgAggregateInput } from './materia-unit-avg-aggregate.input';
import { MateriaUnitSumAggregateInput } from './materia-unit-sum-aggregate.input';
import { MateriaUnitMinAggregateInput } from './materia-unit-min-aggregate.input';
import { MateriaUnitMaxAggregateInput } from './materia-unit-max-aggregate.input';

@ArgsType()
export class MateriaUnitAggregateArgs {

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

    @Field(() => MateriaUnitCountAggregateInput, {nullable:true})
    _count?: MateriaUnitCountAggregateInput;

    @Field(() => MateriaUnitAvgAggregateInput, {nullable:true})
    _avg?: MateriaUnitAvgAggregateInput;

    @Field(() => MateriaUnitSumAggregateInput, {nullable:true})
    _sum?: MateriaUnitSumAggregateInput;

    @Field(() => MateriaUnitMinAggregateInput, {nullable:true})
    _min?: MateriaUnitMinAggregateInput;

    @Field(() => MateriaUnitMaxAggregateInput, {nullable:true})
    _max?: MateriaUnitMaxAggregateInput;
}
