import { BodyDetailCreateInput } from './body-detail-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneBodyDetailArgs {
    data: BodyDetailCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
