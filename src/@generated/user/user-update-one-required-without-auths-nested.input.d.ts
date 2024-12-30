import { UserCreateWithoutAuthsInput } from './user-create-without-auths.input';
import { UserCreateOrConnectWithoutAuthsInput } from './user-create-or-connect-without-auths.input';
import { UserUpsertWithoutAuthsInput } from './user-upsert-without-auths.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAuthsInput } from './user-update-to-one-with-where-without-auths.input';
export declare class UserUpdateOneRequiredWithoutAuthsNestedInput {
    create?: UserCreateWithoutAuthsInput;
    connectOrCreate?: UserCreateOrConnectWithoutAuthsInput;
    upsert?: UserUpsertWithoutAuthsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone'>;
    update?: UserUpdateToOneWithWhereWithoutAuthsInput;
}
