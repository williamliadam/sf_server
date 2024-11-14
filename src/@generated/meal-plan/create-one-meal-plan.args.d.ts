import { MealPlanCreateInput } from './meal-plan-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneMealPlanArgs {
    data: MealPlanCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
