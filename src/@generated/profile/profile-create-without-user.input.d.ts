import { Goal } from '../prisma/goal.enum';
export declare class ProfileCreateWithoutUserInput {
    avatar?: string;
    nickName?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goal?: keyof typeof Goal;
}
