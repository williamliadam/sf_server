import { AuthType } from '../prisma/auth-type.enum';
export declare class UserAuthUncheckedCreateInput {
    id?: number;
    userId: number;
    authType: keyof typeof AuthType;
    openId: string;
    accessToken: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}