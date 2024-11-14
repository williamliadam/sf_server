import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateUpdateWithoutCreateByInput } from './meal-template-update-without-create-by.input';
export declare class MealTemplateUpdateWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    data: MealTemplateUpdateWithoutCreateByInput;
}
