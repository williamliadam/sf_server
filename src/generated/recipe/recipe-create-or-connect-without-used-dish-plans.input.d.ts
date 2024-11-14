import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCreateWithoutUsedDishPlansInput } from './recipe-create-without-used-dish-plans.input';
export declare class RecipeCreateOrConnectWithoutUsedDishPlansInput {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    create: RecipeCreateWithoutUsedDishPlansInput;
}
