import { DishTemplateCreateWithoutRecipeInput } from './dish-template-create-without-recipe.input';
import { DishTemplateCreateOrConnectWithoutRecipeInput } from './dish-template-create-or-connect-without-recipe.input';
import { DishTemplateUpsertWithWhereUniqueWithoutRecipeInput } from './dish-template-upsert-with-where-unique-without-recipe.input';
import { DishTemplateCreateManyRecipeInputEnvelope } from './dish-template-create-many-recipe-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DishTemplateWhereUniqueInput } from './dish-template-where-unique.input';
import { DishTemplateUpdateWithWhereUniqueWithoutRecipeInput } from './dish-template-update-with-where-unique-without-recipe.input';
import { DishTemplateUpdateManyWithWhereWithoutRecipeInput } from './dish-template-update-many-with-where-without-recipe.input';
import { DishTemplateScalarWhereInput } from './dish-template-scalar-where.input';
export declare class DishTemplateUpdateManyWithoutRecipeNestedInput {
    create?: Array<DishTemplateCreateWithoutRecipeInput>;
    connectOrCreate?: Array<DishTemplateCreateOrConnectWithoutRecipeInput>;
    upsert?: Array<DishTemplateUpsertWithWhereUniqueWithoutRecipeInput>;
    createMany?: DishTemplateCreateManyRecipeInputEnvelope;
    set?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DishTemplateWhereUniqueInput, 'id'>>;
    update?: Array<DishTemplateUpdateWithWhereUniqueWithoutRecipeInput>;
    updateMany?: Array<DishTemplateUpdateManyWithWhereWithoutRecipeInput>;
    deleteMany?: Array<DishTemplateScalarWhereInput>;
}
