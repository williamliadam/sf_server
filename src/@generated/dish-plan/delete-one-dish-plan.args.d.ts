import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
export declare class DeleteOneDishPlanArgs {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
}
