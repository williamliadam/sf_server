import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { BodyDetailOrderByWithRelationInput } from '../body-detail/body-detail-order-by-with-relation.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { RecipeOrderByRelationAggregateInput } from '../recipe/recipe-order-by-relation-aggregate.input';
import { MealTemplateOrderByRelationAggregateInput } from '../meal-template/meal-template-order-by-relation-aggregate.input';
import { MealPlanOrderByRelationAggregateInput } from '../meal-plan/meal-plan-order-by-relation-aggregate.input';
import { DishPlanOrderByRelationAggregateInput } from '../dish-plan/dish-plan-order-by-relation-aggregate.input';
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    email?: SortOrderInput;
    name?: SortOrderInput;
    password?: keyof typeof SortOrder;
    phone?: SortOrderInput;
    wxId?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    profile?: ProfileOrderByWithRelationInput;
    bodyDetail?: BodyDetailOrderByWithRelationInput;
    myPosts?: PostOrderByRelationAggregateInput;
    myRecipes?: RecipeOrderByRelationAggregateInput;
    myMealTemplates?: MealTemplateOrderByRelationAggregateInput;
    myMealPlans?: MealPlanOrderByRelationAggregateInput;
    chargeDishPlans?: DishPlanOrderByRelationAggregateInput;
}
