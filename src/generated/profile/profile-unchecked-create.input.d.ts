import { Goal } from '../prisma/goal.enum';
export declare class ProfileUncheckedCreateInput {
    id?: number;
    avatar?: string;
    nickName?: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goal?: keyof typeof Goal;
}
