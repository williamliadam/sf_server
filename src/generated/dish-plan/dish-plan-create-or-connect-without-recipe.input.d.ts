import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanCreateWithoutRecipeInput } from './dish-plan-create-without-recipe.input';
export declare class DishPlanCreateOrConnectWithoutRecipeInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    create: DishPlanCreateWithoutRecipeInput;
}
