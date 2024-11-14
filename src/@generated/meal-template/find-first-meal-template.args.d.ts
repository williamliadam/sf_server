import { MealTemplateWhereInput } from './meal-template-where.input';
import { MealTemplateOrderByWithRelationInput } from './meal-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateScalarFieldEnum } from './meal-template-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindFirstMealTemplateArgs {
    where?: MealTemplateWhereInput;
    orderBy?: Array<MealTemplateOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MealTemplateScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
