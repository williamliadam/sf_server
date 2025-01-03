import { IngredientCountAggregate } from './ingredient-count-aggregate.output';
import { IngredientAvgAggregate } from './ingredient-avg-aggregate.output';
import { IngredientSumAggregate } from './ingredient-sum-aggregate.output';
import { IngredientMinAggregate } from './ingredient-min-aggregate.output';
import { IngredientMaxAggregate } from './ingredient-max-aggregate.output';
export declare class IngredientGroupBy {
    id: number;
    materialId: number;
    amount: number;
    materiaUnitId: number;
    recipeId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: IngredientCountAggregate;
    _avg?: IngredientAvgAggregate;
    _sum?: IngredientSumAggregate;
    _min?: IngredientMinAggregate;
    _max?: IngredientMaxAggregate;
}
