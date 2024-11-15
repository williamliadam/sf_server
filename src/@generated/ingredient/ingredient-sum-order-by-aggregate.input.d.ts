import { SortOrder } from '../prisma/sort-order.enum';
export declare class IngredientSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    materialId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    materiaUnitId?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
}