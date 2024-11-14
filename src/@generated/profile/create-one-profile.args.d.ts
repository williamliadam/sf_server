import { ProfileCreateInput } from './profile-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneProfileArgs {
    data: ProfileCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
