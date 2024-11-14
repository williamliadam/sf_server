import { MealTemplateWhereInput } from './meal-template-where.input';
import { MealTemplateOrderByWithAggregationInput } from './meal-template-order-by-with-aggregation.input';
import { MealTemplateScalarFieldEnum } from './meal-template-scalar-field.enum';
import { MealTemplateScalarWhereWithAggregatesInput } from './meal-template-scalar-where-with-aggregates.input';
import { MealTemplateCountAggregateInput } from './meal-template-count-aggregate.input';
import { MealTemplateAvgAggregateInput } from './meal-template-avg-aggregate.input';
import { MealTemplateSumAggregateInput } from './meal-template-sum-aggregate.input';
import { MealTemplateMinAggregateInput } from './meal-template-min-aggregate.input';
import { MealTemplateMaxAggregateInput } from './meal-template-max-aggregate.input';
export declare class MealTemplateGroupByArgs {
    where?: MealTemplateWhereInput;
    orderBy?: Array<MealTemplateOrderByWithAggregationInput>;
    by: Array<keyof typeof MealTemplateScalarFieldEnum>;
    having?: MealTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MealTemplateCountAggregateInput;
    _avg?: MealTemplateAvgAggregateInput;
    _sum?: MealTemplateSumAggregateInput;
    _min?: MealTemplateMinAggregateInput;
    _max?: MealTemplateMaxAggregateInput;
}
