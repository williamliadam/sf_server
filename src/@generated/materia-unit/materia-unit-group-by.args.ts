import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { Type } from 'class-transformer';
import { MateriaUnitOrderByWithAggregationInput } from './materia-unit-order-by-with-aggregation.input';
import { MateriaUnitScalarFieldEnum } from './materia-unit-scalar-field.enum';
import { MateriaUnitScalarWhereWithAggregatesInput } from './materia-unit-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MateriaUnitCountAggregateInput } from './materia-unit-count-aggregate.input';
import { MateriaUnitAvgAggregateInput } from './materia-unit-avg-aggregate.input';
import { MateriaUnitSumAggregateInput } from './materia-unit-sum-aggregate.input';
import { MateriaUnitMinAggregateInput } from './materia-unit-min-aggregate.input';
import { MateriaUnitMaxAggregateInput } from './materia-unit-max-aggregate.input';

@ArgsType()
export class MateriaUnitGroupByArgs {

    @Field(() => MateriaUnitWhereInput, {nullable:true})
    @Type(() => MateriaUnitWhereInput)
    where?: MateriaUnitWhereInput;

    @Field(() => [MateriaUnitOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MateriaUnitOrderByWithAggregationInput>;

    @Field(() => [MateriaUnitScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MateriaUnitScalarFieldEnum>;

    @Field(() => MateriaUnitScalarWhereWithAggregatesInput, {nullable:true})
    having?: MateriaUnitScalarWhereWithAggregatesInput;

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
