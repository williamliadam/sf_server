import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanCreateInput } from './meal-plan-create.input';
import { MealPlanUpdateInput } from './meal-plan-update.input';
export declare class UpsertOneMealPlanArgs {
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    create: MealPlanCreateInput;
    update: MealPlanUpdateInput;
}
