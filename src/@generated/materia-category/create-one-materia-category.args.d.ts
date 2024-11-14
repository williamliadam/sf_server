import { MateriaCategoryCreateInput } from './materia-category-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneMateriaCategoryArgs {
    data: MateriaCategoryCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
