import { IngredientWhereInput } from './ingredient-where.input';
import { IngredientOrderByWithRelationInput } from './ingredient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientCountAggregateInput } from './ingredient-count-aggregate.input';
import { IngredientAvgAggregateInput } from './ingredient-avg-aggregate.input';
import { IngredientSumAggregateInput } from './ingredient-sum-aggregate.input';
import { IngredientMinAggregateInput } from './ingredient-min-aggregate.input';
import { IngredientMaxAggregateInput } from './ingredient-max-aggregate.input';
export declare class IngredientAggregateArgs {
    where?: IngredientWhereInput;
    orderBy?: Array<IngredientOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: IngredientCountAggregateInput;
    _avg?: IngredientAvgAggregateInput;
    _sum?: IngredientSumAggregateInput;
    _min?: IngredientMinAggregateInput;
    _max?: IngredientMaxAggregateInput;
}
