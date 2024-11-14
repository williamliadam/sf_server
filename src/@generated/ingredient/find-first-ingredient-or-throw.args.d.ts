import { IngredientWhereInput } from './ingredient-where.input';
import { IngredientOrderByWithRelationInput } from './ingredient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientScalarFieldEnum } from './ingredient-scalar-field.enum';
export declare class FindFirstIngredientOrThrowArgs {
    where?: IngredientWhereInput;
    orderBy?: Array<IngredientOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof IngredientScalarFieldEnum>;
}
