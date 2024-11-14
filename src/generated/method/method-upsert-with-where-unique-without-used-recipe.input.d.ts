import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodUpdateWithoutUsedRecipeInput } from './method-update-without-used-recipe.input';
import { MethodCreateWithoutUsedRecipeInput } from './method-create-without-used-recipe.input';
export declare class MethodUpsertWithWhereUniqueWithoutUsedRecipeInput {
    where: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
    update: MethodUpdateWithoutUsedRecipeInput;
    create: MethodCreateWithoutUsedRecipeInput;
}
