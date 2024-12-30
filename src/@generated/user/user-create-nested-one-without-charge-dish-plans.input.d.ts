import { UserCreateWithoutChargeDishPlansInput } from './user-create-without-charge-dish-plans.input';
import { UserCreateOrConnectWithoutChargeDishPlansInput } from './user-create-or-connect-without-charge-dish-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutChargeDishPlansInput {
    create?: UserCreateWithoutChargeDishPlansInput;
    connectOrCreate?: UserCreateOrConnectWithoutChargeDishPlansInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
}
