import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DishTemplateOrderByRelationAggregateInput } from '../dish-template/dish-template-order-by-relation-aggregate.input';

@InputType()
export class MealTemplateOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    createBy?: UserOrderByWithRelationInput;

    @Field(() => DishTemplateOrderByRelationAggregateInput, {nullable:true})
    dishTemplates?: DishTemplateOrderByRelationAggregateInput;
}
