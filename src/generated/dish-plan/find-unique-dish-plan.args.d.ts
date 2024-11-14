import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
export declare class FindUniqueDishPlanArgs {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
}
