import { Prisma } from '@prisma/client';
import { DishPlanWhereUniqueInput } from './dish-plan-where-unique.input';
import { DishPlanUpdateWithoutRecipeInput } from './dish-plan-update-without-recipe.input';
import { DishPlanCreateWithoutRecipeInput } from './dish-plan-create-without-recipe.input';
export declare class DishPlanUpsertWithWhereUniqueWithoutRecipeInput {
    where: Prisma.AtLeast<DishPlanWhereUniqueInput, 'id'>;
    update: DishPlanUpdateWithoutRecipeInput;
    create: DishPlanCreateWithoutRecipeInput;
}
