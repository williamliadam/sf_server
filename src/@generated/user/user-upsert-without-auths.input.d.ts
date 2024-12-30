import { UserUpdateWithoutAuthsInput } from './user-update-without-auths.input';
import { UserCreateWithoutAuthsInput } from './user-create-without-auths.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutAuthsInput {
    update: UserUpdateWithoutAuthsInput;
    create: UserCreateWithoutAuthsInput;
    where?: UserWhereInput;
}
