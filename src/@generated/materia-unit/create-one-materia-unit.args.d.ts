import { MateriaUnitCreateInput } from './materia-unit-create.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class CreateOneMateriaUnitArgs {
    data: MateriaUnitCreateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
