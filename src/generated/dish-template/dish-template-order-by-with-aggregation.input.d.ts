import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DishTemplateCountOrderByAggregateInput } from './dish-template-count-order-by-aggregate.input';
import { DishTemplateAvgOrderByAggregateInput } from './dish-template-avg-order-by-aggregate.input';
import { DishTemplateMaxOrderByAggregateInput } from './dish-template-max-order-by-aggregate.input';
import { DishTemplateMinOrderByAggregateInput } from './dish-template-min-order-by-aggregate.input';
import { DishTemplateSumOrderByAggregateInput } from './dish-template-sum-order-by-aggregate.input';
export declare class DishTemplateOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    recipeId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    mealTemplateId?: SortOrderInput;
    _count?: DishTemplateCountOrderByAggregateInput;
    _avg?: DishTemplateAvgOrderByAggregateInput;
    _max?: DishTemplateMaxOrderByAggregateInput;
    _min?: DishTemplateMinOrderByAggregateInput;
    _sum?: DishTemplateSumOrderByAggregateInput;
}
