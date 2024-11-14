import { SortOrder } from '../prisma/sort-order.enum';
export declare class IngredientCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    materialId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    materiaUnitId?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
