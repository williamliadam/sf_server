import { NutritionCountAggregate } from './nutrition-count-aggregate.output';
import { NutritionAvgAggregate } from './nutrition-avg-aggregate.output';
import { NutritionSumAggregate } from './nutrition-sum-aggregate.output';
import { NutritionMinAggregate } from './nutrition-min-aggregate.output';
import { NutritionMaxAggregate } from './nutrition-max-aggregate.output';
export declare class NutritionGroupBy {
    id: number;
    code: string;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: NutritionCountAggregate;
    _avg?: NutritionAvgAggregate;
    _sum?: NutritionSumAggregate;
    _min?: NutritionMinAggregate;
    _max?: NutritionMaxAggregate;
}
