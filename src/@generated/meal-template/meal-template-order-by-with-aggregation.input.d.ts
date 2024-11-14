import { SortOrder } from '../prisma/sort-order.enum';
import { MealTemplateCountOrderByAggregateInput } from './meal-template-count-order-by-aggregate.input';
import { MealTemplateAvgOrderByAggregateInput } from './meal-template-avg-order-by-aggregate.input';
import { MealTemplateMaxOrderByAggregateInput } from './meal-template-max-order-by-aggregate.input';
import { MealTemplateMinOrderByAggregateInput } from './meal-template-min-order-by-aggregate.input';
import { MealTemplateSumOrderByAggregateInput } from './meal-template-sum-order-by-aggregate.input';
export declare class MealTemplateOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: MealTemplateCountOrderByAggregateInput;
    _avg?: MealTemplateAvgOrderByAggregateInput;
    _max?: MealTemplateMaxOrderByAggregateInput;
    _min?: MealTemplateMinOrderByAggregateInput;
    _sum?: MealTemplateSumOrderByAggregateInput;
}
