import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanCreateInput } from './meal-plan-create.input';
import { MealPlanUpdateInput } from './meal-plan-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneMealPlanArgs {
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    create: MealPlanCreateInput;
    update: MealPlanUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
