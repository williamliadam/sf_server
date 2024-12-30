import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class UserAuthOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    authType?: keyof typeof SortOrder;
    openId?: keyof typeof SortOrder;
    accessToken?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    user?: UserOrderByWithRelationInput;
}
