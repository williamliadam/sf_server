import { NutritionRowCountAggregate } from './nutrition-row-count-aggregate.output';
import { NutritionRowAvgAggregate } from './nutrition-row-avg-aggregate.output';
import { NutritionRowSumAggregate } from './nutrition-row-sum-aggregate.output';
import { NutritionRowMinAggregate } from './nutrition-row-min-aggregate.output';
import { NutritionRowMaxAggregate } from './nutrition-row-max-aggregate.output';
export declare class NutritionRowGroupBy {
    id: number;
    nutirtionId: number;
    percent: number;
    belongToId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: NutritionRowCountAggregate;
    _avg?: NutritionRowAvgAggregate;
    _sum?: NutritionRowSumAggregate;
    _min?: NutritionRowMinAggregate;
    _max?: NutritionRowMaxAggregate;
}
