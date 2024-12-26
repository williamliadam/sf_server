import { ClientCreateInput } from './client-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneClientArgs {
    data: ClientCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
