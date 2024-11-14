import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutChargeDishPlansInput } from './user-create-without-charge-dish-plans.input';
export declare class UserCreateOrConnectWithoutChargeDishPlansInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    create: UserCreateWithoutChargeDishPlansInput;
}
