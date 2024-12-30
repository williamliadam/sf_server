import { AuthType } from '../prisma/auth-type.enum';
import { UserCreateNestedOneWithoutAuthsInput } from '../user/user-create-nested-one-without-auths.input';
export declare class UserAuthCreateInput {
    authType: keyof typeof AuthType;
    openId: string;
    accessToken: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutAuthsInput;
}
