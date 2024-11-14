import { Prisma } from '@prisma/client';
import { NutritionWhereUniqueInput } from './nutrition-where-unique.input';
import { NutritionCreateInput } from './nutrition-create.input';
import { NutritionUpdateInput } from './nutrition-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneNutritionArgs {
    where: Prisma.AtLeast<NutritionWhereUniqueInput, 'id' | 'code'>;
    create: NutritionCreateInput;
    update: NutritionUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
