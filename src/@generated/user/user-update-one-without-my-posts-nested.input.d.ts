import { UserCreateWithoutMyPostsInput } from './user-create-without-my-posts.input';
import { UserCreateOrConnectWithoutMyPostsInput } from './user-create-or-connect-without-my-posts.input';
import { UserUpsertWithoutMyPostsInput } from './user-upsert-without-my-posts.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMyPostsInput } from './user-update-to-one-with-where-without-my-posts.input';
export declare class UserUpdateOneWithoutMyPostsNestedInput {
    create?: UserCreateWithoutMyPostsInput;
    connectOrCreate?: UserCreateOrConnectWithoutMyPostsInput;
    upsert?: UserUpsertWithoutMyPostsInput;
    disconnect?: UserWhereInput;
    delete?: UserWhereInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    update?: UserUpdateToOneWithWhereWithoutMyPostsInput;
}
