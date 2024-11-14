import { Prisma } from '@prisma/client';
import { MealTemplateWhereUniqueInput } from './meal-template-where-unique.input';
import { MealTemplateCreateInput } from './meal-template-create.input';
import { MealTemplateUpdateInput } from './meal-template-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneMealTemplateArgs {
    where: Prisma.AtLeast<MealTemplateWhereUniqueInput, 'id'>;
    create: MealTemplateCreateInput;
    update: MealTemplateUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
