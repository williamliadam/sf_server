import { Prisma } from '@prisma/client';
import { UserAuthWhereUniqueInput } from './user-auth-where-unique.input';
import { UserAuthUpdateWithoutUserInput } from './user-auth-update-without-user.input';
import { UserAuthCreateWithoutUserInput } from './user-auth-create-without-user.input';
export declare class UserAuthUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserAuthWhereUniqueInput, 'id' | 'openId'>;
    update: UserAuthUpdateWithoutUserInput;
    create: UserAuthCreateWithoutUserInput;
}
