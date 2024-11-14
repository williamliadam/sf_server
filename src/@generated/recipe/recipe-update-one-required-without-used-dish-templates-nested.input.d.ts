import { RecipeCreateWithoutUsedDishTemplatesInput } from './recipe-create-without-used-dish-templates.input';
import { RecipeCreateOrConnectWithoutUsedDishTemplatesInput } from './recipe-create-or-connect-without-used-dish-templates.input';
import { RecipeUpsertWithoutUsedDishTemplatesInput } from './recipe-upsert-without-used-dish-templates.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutUsedDishTemplatesInput } from './recipe-update-to-one-with-where-without-used-dish-templates.input';
export declare class RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput {
    create?: RecipeCreateWithoutUsedDishTemplatesInput;
    connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishTemplatesInput;
    upsert?: RecipeUpsertWithoutUsedDishTemplatesInput;
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    update?: RecipeUpdateToOneWithWhereWithoutUsedDishTemplatesInput;
}
