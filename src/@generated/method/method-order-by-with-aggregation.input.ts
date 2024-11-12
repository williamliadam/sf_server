import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MethodCountOrderByAggregateInput } from './method-count-order-by-aggregate.input';
import { MethodAvgOrderByAggregateInput } from './method-avg-order-by-aggregate.input';
import { MethodMaxOrderByAggregateInput } from './method-max-order-by-aggregate.input';
import { MethodMinOrderByAggregateInput } from './method-min-order-by-aggregate.input';
import { MethodSumOrderByAggregateInput } from './method-sum-order-by-aggregate.input';

@InputType()
export class MethodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    recipeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MethodCountOrderByAggregateInput, {nullable:true})
    _count?: MethodCountOrderByAggregateInput;

    @Field(() => MethodAvgOrderByAggregateInput, {nullable:true})
    _avg?: MethodAvgOrderByAggregateInput;

    @Field(() => MethodMaxOrderByAggregateInput, {nullable:true})
    _max?: MethodMaxOrderByAggregateInput;

    @Field(() => MethodMinOrderByAggregateInput, {nullable:true})
    _min?: MethodMinOrderByAggregateInput;

    @Field(() => MethodSumOrderByAggregateInput, {nullable:true})
    _sum?: MethodSumOrderByAggregateInput;
}
