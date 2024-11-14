import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class FindUniqueMealTemplateArgs {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
