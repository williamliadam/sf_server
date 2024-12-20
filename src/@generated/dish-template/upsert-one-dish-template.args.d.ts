import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateCreateInput } from './dish-template-create.input';
import { DishTemplateUpdateInput } from './dish-template-update.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpsertOneDishTemplateArgs {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    create: DishTemplateCreateInput;
    update: DishTemplateUpdateInput;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
