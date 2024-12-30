import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { UserAuthUpdateWithoutUserInput } from './user-auth-update-without-user.input';
export declare class UserAuthUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>;
    data: UserAuthUpdateWithoutUserInput;
}
