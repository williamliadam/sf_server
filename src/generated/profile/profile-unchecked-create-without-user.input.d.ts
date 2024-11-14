import { Goal } from '../prisma/goal.enum';
export declare class ProfileUncheckedCreateWithoutUserInput {
    id?: number;
    avatar?: string;
    nickName?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goal?: keyof typeof Goal;
}
