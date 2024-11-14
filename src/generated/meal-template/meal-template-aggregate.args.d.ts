import { MealTemplateWhereInput } from './meal-template-where.input';
import { MealTemplateOrderByWithRelationInput } from './meal-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateCountAggregateInput } from './meal-template-count-aggregate.input';
import { MealTemplateAvgAggregateInput } from './meal-template-avg-aggregate.input';
import { MealTemplateSumAggregateInput } from './meal-template-sum-aggregate.input';
import { MealTemplateMinAggregateInput } from './meal-template-min-aggregate.input';
import { MealTemplateMaxAggregateInput } from './meal-template-max-aggregate.input';
export declare class MealTemplateAggregateArgs {
    where?: MealTemplateWhereInput;
    orderBy?: Array<MealTemplateOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: MealTemplateCountAggregateInput;
    _avg?: MealTemplateAvgAggregateInput;
    _sum?: MealTemplateSumAggregateInput;
    _min?: MealTemplateMinAggregateInput;
    _max?: MealTemplateMaxAggregateInput;
}
