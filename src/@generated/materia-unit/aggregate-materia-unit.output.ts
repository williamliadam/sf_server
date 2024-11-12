import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MateriaUnitCountAggregate } from './materia-unit-count-aggregate.output';
import { MateriaUnitAvgAggregate } from './materia-unit-avg-aggregate.output';
import { MateriaUnitSumAggregate } from './materia-unit-sum-aggregate.output';
import { MateriaUnitMinAggregate } from './materia-unit-min-aggregate.output';
import { MateriaUnitMaxAggregate } from './materia-unit-max-aggregate.output';

@ObjectType()
export class AggregateMateriaUnit {

    @Field(() => MateriaUnitCountAggregate, {nullable:true})
    _count?: MateriaUnitCountAggregate;

    @Field(() => MateriaUnitAvgAggregate, {nullable:true})
    _avg?: MateriaUnitAvgAggregate;

    @Field(() => MateriaUnitSumAggregate, {nullable:true})
    _sum?: MateriaUnitSumAggregate;

    @Field(() => MateriaUnitMinAggregate, {nullable:true})
    _min?: MateriaUnitMinAggregate;

    @Field(() => MateriaUnitMaxAggregate, {nullable:true})
    _max?: MateriaUnitMaxAggregate;
}
