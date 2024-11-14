import { NutritionWhereInput } from './nutrition-where.input';
import { NutritionOrderByWithRelationInput } from './nutrition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { NutritionCountAggregateInput } from './nutrition-count-aggregate.input';
import { NutritionAvgAggregateInput } from './nutrition-avg-aggregate.input';
import { NutritionSumAggregateInput } from './nutrition-sum-aggregate.input';
import { NutritionMinAggregateInput } from './nutrition-min-aggregate.input';
import { NutritionMaxAggregateInput } from './nutrition-max-aggregate.input';
export declare class NutritionAggregateArgs {
    where?: NutritionWhereInput;
    orderBy?: Array<NutritionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    _count?: NutritionCountAggregateInput;
    _avg?: NutritionAvgAggregateInput;
    _sum?: NutritionSumAggregateInput;
    _min?: NutritionMinAggregateInput;
    _max?: NutritionMaxAggregateInput;
}
