import { AuthType } from '../prisma/auth-type.enum';
export declare class UserAuthUncheckedCreateWithoutUserInput {
    id?: number;
    authType: keyof typeof AuthType;
    openId: string;
    accessToken: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
