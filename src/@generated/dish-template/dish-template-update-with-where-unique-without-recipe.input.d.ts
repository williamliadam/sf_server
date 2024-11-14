import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithoutRecipeInput } from './dish-template-update-without-recipe.input';
export declare class DishTemplateUpdateWithWhereUniqueWithoutRecipeInput {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    data: DishTemplateUpdateWithoutRecipeInput;
}
