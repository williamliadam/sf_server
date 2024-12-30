import { UserCreateWithoutBodyDetailInput } from './user-create-without-body-detail.input';
import { UserCreateOrConnectWithoutBodyDetailInput } from './user-create-or-connect-without-body-detail.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutBodyDetailInput {
    create?: UserCreateWithoutBodyDetailInput;
    connectOrCreate?: UserCreateOrConnectWithoutBodyDetailInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
}
