import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithoutAuthorInput } from './recipe-update-without-author.input';
export declare class RecipeUpdateWithWhereUniqueWithoutAuthorInput {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    data: RecipeUpdateWithoutAuthorInput;
}
