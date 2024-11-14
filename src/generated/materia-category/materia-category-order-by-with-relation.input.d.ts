import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MaterialOrderByRelationAggregateInput } from '../material/material-order-by-relation-aggregate.input';
import { MateriaCategoryOrderByRelationAggregateInput } from './materia-category-order-by-relation-aggregate.input';
export declare class MateriaCategoryOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    lastId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    materials?: MaterialOrderByRelationAggregateInput;
    next?: MateriaCategoryOrderByRelationAggregateInput;
    last?: MateriaCategoryOrderByWithRelationInput;
}
