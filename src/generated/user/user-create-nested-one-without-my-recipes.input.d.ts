import { UserCreateWithoutMyRecipesInput } from './user-create-without-my-recipes.input';
import { UserCreateOrConnectWithoutMyRecipesInput } from './user-create-or-connect-without-my-recipes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutMyRecipesInput {
    create?: UserCreateWithoutMyRecipesInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyRecipesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
}
