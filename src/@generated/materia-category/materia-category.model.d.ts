import { Material } from '../material/material.model';
import { MateriaCategoryCount } from './materia-category-count.output';
export declare class MateriaCategory {
    id: number;
    code: string;
    name: string;
    lastId: number | null;
    createdAt: Date;
    updatedAt: Date;
    materials?: Array<Material>;
    next?: Array<MateriaCategory>;
    last?: MateriaCategory | null;
    _count?: MateriaCategoryCount;
}
