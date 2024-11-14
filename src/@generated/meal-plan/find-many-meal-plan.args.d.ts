import { MealPlanWhereInput } from './meal-plan-where.input';
import { MealPlanOrderByWithRelationInput } from './meal-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MealPlanWhereUniqueInput } from './meal-plan-where-unique.input';
import { MealPlanScalarFieldEnum } from './meal-plan-scalar-field.enum';
export declare class FindManyMealPlanArgs {
    where?: MealPlanWhereInput;
    orderBy?: Array<MealPlanOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MealPlanWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MealPlanScalarFieldEnum>;
}
