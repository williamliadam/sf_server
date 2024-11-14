import { MealTemplateUpdateInput } from './meal-template-update.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
export declare class UpdateOneMealTemplateArgs {
    data: MealTemplateUpdateInput;
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
}
