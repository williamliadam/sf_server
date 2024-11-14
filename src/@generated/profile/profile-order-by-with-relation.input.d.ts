import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class ProfileOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    avatar?: SortOrderInput;
    nickName?: SortOrderInput;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    goal?: keyof typeof SortOrder;
    user?: UserOrderByWithRelationInput;
}
