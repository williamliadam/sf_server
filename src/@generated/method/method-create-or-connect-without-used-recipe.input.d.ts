import { Prisma } from '@prisma/client';
import { MethodWhereUniqueInput } from './method-where-unique.input';
import { MethodCreateWithoutUsedRecipeInput } from './method-create-without-used-recipe.input';
export declare class MethodCreateOrConnectWithoutUsedRecipeInput {
    where: Prisma.AtLeast<MethodWhereUniqueInput, 'id' | 'code'>;
    create: MethodCreateWithoutUsedRecipeInput;
}
