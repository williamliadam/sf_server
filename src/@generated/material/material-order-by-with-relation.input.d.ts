import { SortOrder } from '../prisma/sort-order.enum';
import { MateriaCategoryOrderByWithRelationInput } from '../materia-category/materia-category-order-by-with-relation.input';
import { NutritionRowOrderByRelationAggregateInput } from '../nutrition-row/nutrition-row-order-by-relation-aggregate.input';
import { IngredientOrderByRelationAggregateInput } from '../ingredient/ingredient-order-by-relation-aggregate.input';
export declare class MaterialOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    nickName?: keyof typeof SortOrder;
    materiaCategoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    category?: MateriaCategoryOrderByWithRelationInput;
    nutritionMatrix?: NutritionRowOrderByRelationAggregateInput;
    ingredients?: IngredientOrderByRelationAggregateInput;
}
