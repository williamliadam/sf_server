import { NutritionRowWhereInput } from './nutrition-row-where.input';
import { NutritionRowOrderByWithRelationInput } from './nutrition-row-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionRowWhereUniqueInput } from './nutrition-row-where-unique.input';
import { NutritionRowCountAggregateInput } from './nutrition-row-count-aggregate.input';
import { NutritionRowAvgAggregateInput } from './nutrition-row-avg-aggregate.input';
import { NutritionRowSumAggregateInput } from './nutrition-row-sum-aggregate.input';
import { NutritionRowMinAggregateInput } from './nutrition-row-min-aggregate.input';
import { NutritionRowMaxAggregateInput } from './nutrition-row-max-aggregate.input';
export declare class NutritionRowAggregateArgs {
    where?: NutritionRowWhereInput;
    orderBy?: Array<NutritionRowOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NutritionRowWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: NutritionRowCountAggregateInput;
    _avg?: NutritionRowAvgAggregateInput;
    _sum?: NutritionRowSumAggregateInput;
    _min?: NutritionRowMinAggregateInput;
    _max?: NutritionRowMaxAggregateInput;
}
