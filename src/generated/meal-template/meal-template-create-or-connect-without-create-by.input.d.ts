import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateCreateWithoutCreateByInput } from './meal-template-create-without-create-by.input';
export declare class MealTemplateCreateOrConnectWithoutCreateByInput {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    create: MealTemplateCreateWithoutCreateByInput;
}
