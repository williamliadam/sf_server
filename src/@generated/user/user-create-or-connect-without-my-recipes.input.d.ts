import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutMyRecipesInput } from './user-create-without-my-recipes.input';
export declare class UserCreateOrConnectWithoutMyRecipesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
    create: UserCreateWithoutMyRecipesInput;
}
