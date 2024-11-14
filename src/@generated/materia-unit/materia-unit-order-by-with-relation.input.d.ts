import { SortOrder } from '../prisma/sort-order.enum';
import { IngredientOrderByRelationAggregateInput } from '../ingredient/ingredient-order-by-relation-aggregate.input';
export declare class MateriaUnitOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    toKilo?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    ingredients?: IngredientOrderByRelationAggregateInput;
}
