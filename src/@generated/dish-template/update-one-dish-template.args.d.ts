import { DishTemplateUpdateInput } from './dish-template-update.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { RelationLoadStrategy } from '../prisma/relation-load-strategy.enum';
export declare class UpdateOneDishTemplateArgs {
    data: DishTemplateUpdateInput;
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    relationLoadStrategy?: keyof typeof RelationLoadStrategy;
}
