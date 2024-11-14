import { MealType } from '../prisma/meal-type.enum';
import { MealPlanCountAggregate } from './meal-plan-count-aggregate.output';
import { MealPlanAvgAggregate } from './meal-plan-avg-aggregate.output';
import { MealPlanSumAggregate } from './meal-plan-sum-aggregate.output';
import { MealPlanMinAggregate } from './meal-plan-min-aggregate.output';
import { MealPlanMaxAggregate } from './meal-plan-max-aggregate.output';
export declare class MealPlanGroupBy {
    id: number;
    planTime?: Date | string;
    userId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    type: keyof typeof MealType;
    _count?: MealPlanCountAggregate;
    _avg?: MealPlanAvgAggregate;
    _sum?: MealPlanSumAggregate;
    _min?: MealPlanMinAggregate;
    _max?: MealPlanMaxAggregate;
}
