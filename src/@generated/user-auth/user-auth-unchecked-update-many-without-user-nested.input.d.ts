import { UserAuthCreateWithoutUserInput } from './user-auth-create-without-user.input';
import { UserAuthCreateOrConnectWithoutUserInput } from './user-auth-create-or-connect-without-user.input';
import { UserAuthUpsertWithWhereUniqueWithoutUserInput } from './user-auth-upsert-with-where-unique-without-user.input';
import { UserAuthCreateManyUserInputEnvelope } from './user-auth-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { UserAuthUpdateWithWhereUniqueWithoutUserInput } from './user-auth-update-with-where-unique-without-user.input';
import { UserAuthUpdateManyWithWhereWithoutUserInput } from './user-auth-update-many-with-where-without-user.input';
import { UserAuthScalarWhereInput } from './user-auth-scalar-where.input';
export declare class UserAuthUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<UserAuthCreateWithoutUserInput>;
    connectOrCreate?: Array<UserAuthCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserAuthUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: UserAuthCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>>;
    disconnect?: Array<Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>>;
    delete?: Array<Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>>;
    connect?: Array<Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>>;
    update?: Array<UserAuthUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserAuthUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserAuthScalarWhereInput>;
}
