import { MaterialCreateInput } from './material-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneMaterialArgs {
    data: MaterialCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
