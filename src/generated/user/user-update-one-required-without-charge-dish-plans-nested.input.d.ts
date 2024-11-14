import { UserCreateWithoutChargeDishPlansInput } from './user-create-without-charge-dish-plans.input';
import { UserCreateOrConnectWithoutChargeDishPlansInput } from './user-create-or-connect-without-charge-dish-plans.input';
import { UserUpsertWithoutChargeDishPlansInput } from './user-upsert-without-charge-dish-plans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutChargeDishPlansInput } from './user-update-to-one-with-where-without-charge-dish-plans.input';
export declare class UserUpdateOneRequiredWithoutChargeDishPlansNestedInput {
    create?: UserCreateWithoutChargeDishPlansInput;
    connectOrCreate?: UserCreateOrConnectWithoutChargeDishPlansInput;
    upsert?: UserUpsertWithoutChargeDishPlansInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    update?: UserUpdateToOneWithWhereWithoutChargeDishPlansInput;
}
