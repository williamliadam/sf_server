import { Goal } from '../prisma/goal.enum';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
export declare class ProfileCreateInput {
    avatar?: string;
    nickName?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    goal?: keyof typeof Goal;
    user: UserCreateNestedOneWithoutProfileInput;
}
