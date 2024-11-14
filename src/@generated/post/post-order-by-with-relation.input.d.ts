import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class PostOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: SortOrderInput;
    stars?: SortOrderInput;
    follows?: SortOrderInput;
    published?: SortOrderInput;
    authorId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    author?: UserOrderByWithRelationInput;
}
