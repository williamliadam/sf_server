import { RecipeCreateWithoutUsedDishPlansInput } from './recipe-create-without-used-dish-plans.input';
import { RecipeCreateOrConnectWithoutUsedDishPlansInput } from './recipe-create-or-connect-without-used-dish-plans.input';
import { RecipeUpsertWithoutUsedDishPlansInput } from './recipe-upsert-without-used-dish-plans.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput } from './recipe-update-to-one-with-where-without-used-dish-plans.input';
export declare class RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput {
    create?: RecipeCreateWithoutUsedDishPlansInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishPlansInput;
    upsert?: RecipeUpsertWithoutUsedDishPlansInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    update?: RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput;
}
