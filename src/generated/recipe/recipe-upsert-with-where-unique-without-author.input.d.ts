import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithoutAuthorInput } from './recipe-update-without-author.input';
import { RecipeCreateWithoutAuthorInput } from './recipe-create-without-author.input';
export declare class RecipeUpsertWithWhereUniqueWithoutAuthorInput {
    where: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    update: RecipeUpdateWithoutAuthorInput;
    create: RecipeCreateWithoutAuthorInput;
}
