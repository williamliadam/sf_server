import { DishTemplateWhereInput } from './dish-template-where.input';
import { DishTemplateOrderByWithAggregationInput } from './dish-template-order-by-with-aggregation.input';
import { DishTemplateScalarFieldEnum } from './dish-template-scalar-field.enum';
import { DishTemplateScalarWhereWithAggregatesInput } from './dish-template-scalar-where-with-aggregates.input';
import { DishTemplateCountAggregateInput } from './dish-template-count-aggregate.input';
import { DishTemplateAvgAggregateInput } from './dish-template-avg-aggregate.input';
import { DishTemplateSumAggregateInput } from './dish-template-sum-aggregate.input';
import { DishTemplateMinAggregateInput } from './dish-template-min-aggregate.input';
import { DishTemplateMaxAggregateInput } from './dish-template-max-aggregate.input';
export declare class DishTemplateGroupByArgs {
    where?: DishTemplateWhereInput;
    orderBy?: Array<DishTemplateOrderByWithAggregationInput>;
    by: Array<keyof typeof DishTemplateScalarFieldEnum>;
    having?: DishTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DishTemplateCountAggregateInput;
    _avg?: DishTemplateAvgAggregateInput;
    _sum?: DishTemplateSumAggregateInput;
    _min?: DishTemplateMinAggregateInput;
    _max?: DishTemplateMaxAggregateInput;
}
