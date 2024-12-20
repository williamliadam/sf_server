import { MateriaUnitWhereInput } from './materia-unit-where.input';
import { MateriaUnitOrderByWithRelationInput } from './materia-unit-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MateriaUnitWhereUniqueInput } from './materia-unit-where-unique.input';
import { MateriaUnitScalarFieldEnum } from './materia-unit-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindManyMateriaUnitArgs {
    where?: MateriaUnitWhereInput;
    orderBy?: Array<MateriaUnitOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MateriaUnitWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MateriaUnitScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
