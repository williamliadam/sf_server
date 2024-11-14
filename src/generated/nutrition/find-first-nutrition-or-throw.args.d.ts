import { NutritionWhereInput } from './nutrition-where.input';
import { NutritionOrderByWithRelationInput } from './nutrition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { NutritionScalarFieldEnum } from './nutrition-scalar-field.enum';
export declare class FindFirstNutritionOrThrowArgs {
    where?: NutritionWhereInput;
    orderBy?: Array<NutritionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof NutritionScalarFieldEnum>;
}
