import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { UserAuthCreateWithoutUserInput } from './user-auth-create-without-user.input';
export declare class UserAuthCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>;
    create: UserAuthCreateWithoutUserInput;
}
