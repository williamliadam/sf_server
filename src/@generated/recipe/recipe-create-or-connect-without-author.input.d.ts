import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';
export declare class RecipeCreateOrConnectWithoutAuthorInput {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    create: RecipeCreateWithoutAuthorInput;
}
