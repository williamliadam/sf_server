import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DishTemplateOrderByRelationAggregateInput } from '../dish-template/dish-template-order-by-relation-aggregate.input';
export declare class MealTemplateOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createBy?: UserOrderByWithRelationInput;
    dishTemplates?: DishTemplateOrderByRelationAggregateInput;
}
