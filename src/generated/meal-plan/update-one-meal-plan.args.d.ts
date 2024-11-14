import { MealPlanUpdateInput } from './meal-plan-update.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
export declare class UpdateOneMealPlanArgs {
    data: MealPlanUpdateInput;
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
}
