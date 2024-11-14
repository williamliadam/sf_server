import { MealTemplateUpdateInput } from './meal-template-update.input';
import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneMealTemplateArgs {
    data: MealTemplateUpdateInput;
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
