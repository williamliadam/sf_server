import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
export declare class FindUniqueMealTemplateOrThrowArgs {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
}
