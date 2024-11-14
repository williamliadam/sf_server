import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class BodyDetailOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    weight?: SortOrderInput;
    height?: SortOrderInput;
    age?: SortOrderInput;
    bmi?: SortOrderInput;
    bmr?: SortOrderInput;
    tdee?: SortOrderInput;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    user?: UserOrderByWithRelationInput;
}
