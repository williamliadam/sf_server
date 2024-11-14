import { RecipeWhereInput } from './recipe-where.input';
import { RecipeOrderByWithRelationInput } from './recipe-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeScalarFieldEnum } from './recipe-scalar-field.enum';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindManyRecipeArgs {
    where?: RecipeWhereInput;
    orderBy?: Array<RecipeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RecipeScalarFieldEnum>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
