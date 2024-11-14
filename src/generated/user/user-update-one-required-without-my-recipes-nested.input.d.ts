import { UserCreateWithoutMyRecipesInput } from './user-create-without-my-recipes.input';
import { UserCreateOrConnectWithoutMyRecipesInput } from './user-create-or-connect-without-my-recipes.input';
import { UserUpsertWithoutMyRecipesInput } from './user-upsert-without-my-recipes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyRecipesInput } from './user-update-to-one-with-where-without-my-recipes.input';
export declare class UserUpdateOneRequiredWithoutMyRecipesNestedInput {
    create?: UserCreateWithoutMyRecipesInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyRecipesInput;
    upsert?: UserUpsertWithoutMyRecipesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    update?: UserUpdateToOneWithWhereWithoutMyRecipesInput;
}
