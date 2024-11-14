import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
export declare class FindUniqueDishPlanOrThrowArgs {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
}
