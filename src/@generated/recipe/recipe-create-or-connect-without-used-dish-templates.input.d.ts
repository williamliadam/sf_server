import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCreateWithoutUsedDishTemplatesInput } from './recipe-create-without-used-dish-templates.input';
export declare class RecipeCreateOrConnectWithoutUsedDishTemplatesInput {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    create: RecipeCreateWithoutUsedDishTemplatesInput;
}
