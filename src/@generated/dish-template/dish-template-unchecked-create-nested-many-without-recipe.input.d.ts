import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';
import { DishTemplateCreateOrConnectWithoutRecipeInput } from './dish-template-create-or-connect-without-recipe.input';
import { DishTemplateCreateManyRecipeInputEnvelope } from './dish-template-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
export declare class DishTemplateUncheckedCreateNestedManyWithoutRecipeInput {
    create?: Array<DishTemplateCreateWithoutRecipeInput>;
    connectOrCreate?: Array<DishTemplateCreateOrConnectWithoutRecipeInput>;
    createMany?: DishTemplateCreateManyRecipeInputEnvelope;
    connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
}
