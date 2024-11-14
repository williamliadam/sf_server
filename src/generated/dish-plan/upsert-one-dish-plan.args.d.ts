import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanCreateInput } from './dish-plan-create.input';
import { DishPlanUpdateInput } from './dish-plan-update.input';
export declare class UpsertOneDishPlanArgs {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    create: DishPlanCreateInput;
    update: DishPlanUpdateInput;
}
