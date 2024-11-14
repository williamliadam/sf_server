import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueDishPlanArgs {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
