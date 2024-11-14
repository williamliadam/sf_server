import { DishTemplateWhereInput } from './dish-template-where.input';
import { DishTemplateOrderByWithRelationInput } from './dish-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateScalarFieldEnum } from './dish-template-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstDishTemplateOrThrowArgs {
    where?: DishTemplateWhereInput;
    orderBy?: Array<DishTemplateOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DishTemplateScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
