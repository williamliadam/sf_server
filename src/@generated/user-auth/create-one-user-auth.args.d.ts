import { UserAuthCreateInput } from './user-auth-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneUserAuthArgs {
    data: UserAuthCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
