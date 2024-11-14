import { DishPlanUpdateInput } from './dish-plan-update.input';
import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
export declare class UpdateOneDishPlanArgs {
    data: DishPlanUpdateInput;
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
}
