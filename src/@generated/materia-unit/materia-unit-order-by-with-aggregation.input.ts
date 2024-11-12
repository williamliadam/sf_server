import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MateriaUnitCountOrderByAggregateInput } from './materia-unit-count-order-by-aggregate.input';
import { MateriaUnitAvgOrderByAggregateInput } from './materia-unit-avg-order-by-aggregate.input';
import { MateriaUnitMaxOrderByAggregateInput } from './materia-unit-max-order-by-aggregate.input';
import { MateriaUnitMinOrderByAggregateInput } from './materia-unit-min-order-by-aggregate.input';
import { MateriaUnitSumOrderByAggregateInput } from './materia-unit-sum-order-by-aggregate.input';

@InputType()
export class MateriaUnitOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    toKilo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MateriaUnitCountOrderByAggregateInput, {nullable:true})
    _count?: MateriaUnitCountOrderByAggregateInput;

    @Field(() => MateriaUnitAvgOrderByAggregateInput, {nullable:true})
    _avg?: MateriaUnitAvgOrderByAggregateInput;

    @Field(() => MateriaUnitMaxOrderByAggregateInput, {nullable:true})
    _max?: MateriaUnitMaxOrderByAggregateInput;

    @Field(() => MateriaUnitMinOrderByAggregateInput, {nullable:true})
    _min?: MateriaUnitMinOrderByAggregateInput;

    @Field(() => MateriaUnitSumOrderByAggregateInput, {nullable:true})
    _sum?: MateriaUnitSumOrderByAggregateInput;
}
