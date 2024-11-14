import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';
export declare class DishTemplateCreateOrConnectWithoutRecipeInput {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    create: DishTemplateCreateWithoutRecipeInput;
}
