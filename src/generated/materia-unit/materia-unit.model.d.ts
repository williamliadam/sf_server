import { Ingredient } from '../ingredient/ingredient.model';
import { MateriaUnitCount } from './materia-unit-count.output';
export declare class MateriaUnit {
    id: number;
    code: string;
    name: string;
    toKilo: number;
    createdAt: Date;
    updatedAt: Date;
    ingredients?: Array<Ingredient>;
    _count?: MateriaUnitCount;
}
