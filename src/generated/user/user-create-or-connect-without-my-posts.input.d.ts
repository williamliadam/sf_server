import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutMyPostsInput } from './user-create-without-my-posts.input';
export declare class UserCreateOrConnectWithoutMyPostsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    create: UserCreateWithoutMyPostsInput;
}
