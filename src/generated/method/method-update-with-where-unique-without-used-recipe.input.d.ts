import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodUpdateWithoutUsedRecipeInput } from './method-update-without-used-recipe.input';
export declare class MethodUpdateWithWhereUniqueWithoutUsedRecipeInput {
    where: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
    data: MethodUpdateWithoutUsedRecipeInput;
}
