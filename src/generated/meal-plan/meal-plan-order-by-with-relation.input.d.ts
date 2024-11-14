import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DishPlanOrderByRelationAggregateInput } from '../dish-plan/dish-plan-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class MealPlanOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    planTime?: SortOrderInput;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    dishPlans?: DishPlanOrderByRelationAggregateInput;
    createBy?: UserOrderByWithRelationInput;
}
