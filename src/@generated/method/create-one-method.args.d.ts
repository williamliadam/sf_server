import { MethodCreateInput } from './method-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneMethodArgs {
    data: MethodCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
