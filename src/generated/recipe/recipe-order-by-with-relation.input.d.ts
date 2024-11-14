import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { IngredientOrderByRelationAggregateInput } from '../ingredient/ingredient-order-by-relation-aggregate.input';
import { MethodOrderByRelationAggregateInput } from '../method/method-order-by-relation-aggregate.input';
import { DishPlanOrderByRelationAggregateInput } from '../dish-plan/dish-plan-order-by-relation-aggregate.input';
import { DishTemplateOrderByRelationAggregateInput } from '../dish-template/dish-template-order-by-relation-aggregate.input';
export declare class RecipeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    stars?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    author?: UserOrderByWithRelationInput;
    ingredients?: IngredientOrderByRelationAggregateInput;
    methods?: MethodOrderByRelationAggregateInput;
    usedDishPlans?: DishPlanOrderByRelationAggregateInput;
    usedDishTemplates?: DishTemplateOrderByRelationAggregateInput;
}
