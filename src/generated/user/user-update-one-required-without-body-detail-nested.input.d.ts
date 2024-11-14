import { UserCreateWithoutBodyDetailInput } from './user-create-without-body-detail.input';
import { UserCreateOrConnectWithoutBodyDetailInput } from './user-create-or-connect-without-body-detail.input';
import { UserUpsertWithoutBodyDetailInput } from './user-upsert-without-body-detail.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBodyDetailInput } from './user-update-to-one-with-where-without-body-detail.input';
export declare class UserUpdateOneRequiredWithoutBodyDetailNestedInput {
    create?: UserCreateWithoutBodyDetailInput;
    connectOrCreate?: UserCreateOrConnectWithoutBodyDetailInput;
    upsert?: UserUpsertWithoutBodyDetailInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phone' | 'wxId'>;
    update?: UserUpdateToOneWithWhereWithoutBodyDetailInput;
}
