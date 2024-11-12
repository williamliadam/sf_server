import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileCountOrderByAggregateInput } from './profile-count-order-by-aggregate.input';
import { ProfileAvgOrderByAggregateInput } from './profile-avg-order-by-aggregate.input';
import { ProfileMaxOrderByAggregateInput } from './profile-max-order-by-aggregate.input';
import { ProfileMinOrderByAggregateInput } from './profile-min-order-by-aggregate.input';
import { ProfileSumOrderByAggregateInput } from './profile-sum-order-by-aggregate.input';

@InputType()
export class ProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    nickName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goal?: keyof typeof SortOrder;

    @Field(() => ProfileCountOrderByAggregateInput, {nullable:true})
    _count?: ProfileCountOrderByAggregateInput;

    @Field(() => ProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProfileAvgOrderByAggregateInput;

    @Field(() => ProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: ProfileMaxOrderByAggregateInput;

    @Field(() => ProfileMinOrderByAggregateInput, {nullable:true})
    _min?: ProfileMinOrderByAggregateInput;

    @Field(() => ProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: ProfileSumOrderByAggregateInput;
}
