import { Goal } from '../prisma/goal.enum';
import { User } from '../user/user.model';
export declare class Profile {
    id: number;
    avatar: string | null;
    nickName: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    goal: keyof typeof Goal;
    user?: User;
}
