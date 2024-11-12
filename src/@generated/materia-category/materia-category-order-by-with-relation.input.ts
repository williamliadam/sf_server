import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MaterialOrderByRelationAggregateInput } from '../material/material-order-by-relation-aggregate.input';
import { MateriaCategoryOrderByRelationAggregateInput } from './materia-category-order-by-relation-aggregate.input';

@InputType()
export class MateriaCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lastId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MaterialOrderByRelationAggregateInput, {nullable:true})
    materials?: MaterialOrderByRelationAggregateInput;

    @Field(() => MateriaCategoryOrderByRelationAggregateInput, {nullable:true})
    next?: MateriaCategoryOrderByRelationAggregateInput;

    @Field(() => MateriaCategoryOrderByWithRelationInput, {nullable:true})
    last?: MateriaCategoryOrderByWithRelationInput;
}
