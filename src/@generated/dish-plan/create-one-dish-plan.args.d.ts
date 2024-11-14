import { DishPlanCreateInput } from './dish-plan-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneDishPlanArgs {
    data: DishPlanCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
