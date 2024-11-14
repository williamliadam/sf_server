import { DishTemplateWhereInput } from './dish-template-where.input';
import { DishTemplateOrderByWithRelationInput } from './dish-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateCountAggregateInput } from './dish-template-count-aggregate.input';
import { DishTemplateAvgAggregateInput } from './dish-template-avg-aggregate.input';
import { DishTemplateSumAggregateInput } from './dish-template-sum-aggregate.input';
import { DishTemplateMinAggregateInput } from './dish-template-min-aggregate.input';
import { DishTemplateMaxAggregateInput } from './dish-template-max-aggregate.input';
export declare class DishTemplateAggregateArgs {
    where?: DishTemplateWhereInput;
    orderBy?: Array<DishTemplateOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: DishTemplateCountAggregateInput;
    _avg?: DishTemplateAvgAggregateInput;
    _sum?: DishTemplateSumAggregateInput;
    _min?: DishTemplateMinAggregateInput;
    _max?: DishTemplateMaxAggregateInput;
}
