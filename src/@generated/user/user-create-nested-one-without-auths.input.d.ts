import { UserCreateWithoutAuthsInput } from './user-create-without-auths.input';
import { UserCreateOrConnectWithoutAuthsInput } from './user-create-or-connect-without-auths.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutAuthsInput {
    create?: UserCreateWithoutAuthsInput;
    connectOrCreate?: UserCreateOrConnectWithoutAuthsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
}
