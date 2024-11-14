import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateUpdateWithoutCreateByInput } from './meal-template-update-without-create-by.input';
import { MealTemplateCreateWithoutCreateByInput } from './meal-template-create-without-create-by.input';
export declare class MealTemplateUpsertWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    update: MealTemplateUpdateWithoutCreateByInput;
    create: MealTemplateCreateWithoutCreateByInput;
}
