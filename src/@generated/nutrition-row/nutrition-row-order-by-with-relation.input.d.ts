import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionOrderByWithRelationInput } from '../nutrition/nutrition-order-by-with-relation.input';
import { MaterialOrderByWithRelationInput } from '../material/material-order-by-with-relation.input';
export declare class NutritionRowOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    nutirtionId?: keyof typeof SortOrder;
    percent?: keyof typeof SortOrder;
    belongToId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    nutirtion?: NutritionOrderByWithRelationInput;
    belongMaterial?: MaterialOrderByWithRelationInput;
}
