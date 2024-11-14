import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithoutRecipeInput } from './dish-plan-update-without-recipe.input';
export declare class DishPlanUpdateWithWhereUniqueWithoutRecipeInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    data: DishPlanUpdateWithoutRecipeInput;
}
