import { DishPlanCountAggregate } from './dish-plan-count-aggregate.output';
import { DishPlanAvgAggregate } from './dish-plan-avg-aggregate.output';
import { DishPlanSumAggregate } from './dish-plan-sum-aggregate.output';
import { DishPlanMinAggregate } from './dish-plan-min-aggregate.output';
import { DishPlanMaxAggregate } from './dish-plan-max-aggregate.output';
export declare class DishPlanGroupBy {
    id: number;
    recipeId: number;
    amount: number;
    planCookerId: number;
    mealPlanId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: DishPlanCountAggregate;
    _avg?: DishPlanAvgAggregate;
    _sum?: DishPlanSumAggregate;
    _min?: DishPlanMinAggregate;
    _max?: DishPlanMaxAggregate;
}
