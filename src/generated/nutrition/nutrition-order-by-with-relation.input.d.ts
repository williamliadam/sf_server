import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionRowOrderByRelationAggregateInput } from '../nutrition-row/nutrition-row-order-by-relation-aggregate.input';
export declare class NutritionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    usedRow?: NutritionRowOrderByRelationAggregateInput;
}
