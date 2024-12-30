import { UserAuthCreateWithoutUserInput } from './user-auth-create-without-user.input';
import { UserAuthCreateOrConnectWithoutUserInput } from './user-auth-create-or-connect-without-user.input';
import { UserAuthCreateManyUserInputEnvelope } from './user-auth-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
export declare class UserAuthCreateNestedManyWithoutUserInput {
    create?: Array<UserAuthCreateWithoutUserInput>;
    connectOrCreate?: Array<UserAuthCreateOrConnectWithoutUserInput>;
    createMany?: UserAuthCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>>;
}
