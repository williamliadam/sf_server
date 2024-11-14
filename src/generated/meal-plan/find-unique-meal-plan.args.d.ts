import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
export declare class FindUniqueMealPlanArgs {
    where: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
}
