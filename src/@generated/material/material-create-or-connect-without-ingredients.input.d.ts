import { Prisma } from '@prisma/client';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialCreateWithoutIngredientsInput } from './material-create-without-ingredients.input';
export declare class MaterialCreateOrConnectWithoutIngredientsInput {
    where: Prisma.AtLeast<MaterialWhereUniqueInput, 'id' | 'code'>;
    create: MaterialCreateWithoutIngredientsInput;
}
