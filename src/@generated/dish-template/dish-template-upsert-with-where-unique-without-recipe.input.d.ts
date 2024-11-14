import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithoutRecipeInput } from './dish-template-update-without-recipe.input';
import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';
export declare class DishTemplateUpsertWithWhereUniqueWithoutRecipeInput {
    where: Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>;
    update: DishTemplateUpdateWithoutRecipeInput;
    create: DishTemplateCreateWithoutRecipeInput;
}
