import { RecipeWhereInput } from './recipe-where.input';
import { RecipeOrderByWithRelationInput } from './recipe-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCountAggregateInput } from './recipe-count-aggregate.input';
import { RecipeAvgAggregateInput } from './recipe-avg-aggregate.input';
import { RecipeSumAggregateInput } from './recipe-sum-aggregate.input';
import { RecipeMinAggregateInput } from './recipe-min-aggregate.input';
import { RecipeMaxAggregateInput } from './recipe-max-aggregate.input';
export declare class RecipeAggregateArgs {
    where?: RecipeWhereInput;
    orderBy?: Array<RecipeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: RecipeCountAggregateInput;
    _avg?: RecipeAvgAggregateInput;
    _sum?: RecipeSumAggregateInput;
    _min?: RecipeMinAggregateInput;
    _max?: RecipeMaxAggregateInput;
}
