import { RecipeCountAggregate } from './recipe-count-aggregate.output';
import { RecipeAvgAggregate } from './recipe-avg-aggregate.output';
import { RecipeSumAggregate } from './recipe-sum-aggregate.output';
import { RecipeMinAggregate } from './recipe-min-aggregate.output';
import { RecipeMaxAggregate } from './recipe-max-aggregate.output';
export declare class RecipeGroupBy {
    id: number;
    name: string;
    stars: number;
    authorId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: RecipeCountAggregate;
    _avg?: RecipeAvgAggregate;
    _sum?: RecipeSumAggregate;
    _min?: RecipeMinAggregate;
    _max?: RecipeMaxAggregate;
}