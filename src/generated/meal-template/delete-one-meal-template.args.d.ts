import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
export declare class DeleteOneMealTemplateArgs {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
}
