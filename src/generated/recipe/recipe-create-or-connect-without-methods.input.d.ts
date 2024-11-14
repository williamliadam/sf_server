import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCreateWithoutMethodsInput } from './recipe-create-without-methods.input';
export declare class RecipeCreateOrConnectWithoutMethodsInput {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    create: RecipeCreateWithoutMethodsInput;
}
