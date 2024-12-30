import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAuthsInput } from './user-create-without-auths.input';
export declare class UserCreateOrConnectWithoutAuthsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
    create: UserCreateWithoutAuthsInput;
}
