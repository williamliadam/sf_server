import { UserCreateWithoutMyPostsInput } from './user-create-without-my-posts.input';
import { UserCreateOrConnectWithoutMyPostsInput } from './user-create-or-connect-without-my-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutMyPostsInput {
    create?: UserCreateWithoutMyPostsInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyPostsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
}
