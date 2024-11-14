import { MaterialCreateWithoutIngredientsInput } from './material-create-without-ingredients.input';
import { MaterialCreateOrConnectWithoutIngredientsInput } from './material-create-or-connect-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
export declare class MaterialCreateNestedOneWithoutIngredientsInput {
    create?: MaterialCreateWithoutIngredientsInput;
    connectOrCreate?: MaterialCreateOrConnectWithoutIngredientsInput;
    connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
}
