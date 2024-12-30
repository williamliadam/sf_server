import { AuthType } from '../prisma/auth-type.enum';
import { User } from '../user/user.model';
export declare class UserAuth {
    id: number;
    userId: number;
    authType: keyof typeof AuthType;
    openId: string;
    accessToken: string;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
}
