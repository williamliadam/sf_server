import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutBodyDetailInput } from './user-create-without-body-detail.input';
export declare class UserCreateOrConnectWithoutBodyDetailInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    create: UserCreateWithoutBodyDetailInput;
}
