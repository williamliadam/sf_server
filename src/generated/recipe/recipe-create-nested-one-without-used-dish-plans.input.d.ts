import { RecipeCreateWithoutUsedDishPlansInput } from './recipe-create-without-used-dish-plans.input';
import { RecipeCreateOrConnectWithoutUsedDishPlansInput } from './recipe-create-or-connect-without-used-dish-plans.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
export declare class RecipeCreateNestedOneWithoutUsedDishPlansInput {
    create?: RecipeCreateWithoutUsedDishPlansInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishPlansInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
