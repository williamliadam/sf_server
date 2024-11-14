import { MealPlanUpdateInput } from './meal-plan-update.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneMealPlanArgs {
    data: MealPlanUpdateInput;
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
