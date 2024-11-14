import { MaterialCreateWithoutIngredientsInput } from './material-create-without-ingredients.input';
import { MaterialCreateOrConnectWithoutIngredientsInput } from './material-create-or-connect-without-ingredients.input';
import { MaterialUpsertWithoutIngredientsInput } from './material-upsert-without-ingredients.input';
import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateToOneWithWhereWithoutIngredientsInput } from './material-update-to-one-with-where-without-ingredients.input';
export declare class MaterialUpdateOneRequiredWithoutIngredientsNestedInput {
    create?: MaterialCreateWithoutIngredientsInput;
    connectOrCreate?: MaterialCreateOrConnectWithoutIngredientsInput;
    upsert?: MaterialUpsertWithoutIngredientsInput;
    connect?: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    update?: MaterialUpdateToOneWithWhereWithoutIngredientsInput;
}
