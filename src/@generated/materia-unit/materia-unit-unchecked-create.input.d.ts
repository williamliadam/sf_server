import { IngredientUncheckedCreateNestedManyWithoutUnitInput } from '../ingredient/ingredient-unchecked-create-nested-many-without-unit.input';
export declare class MateriaUnitUncheckedCreateInput {
    id?: number;
    code: string;
    name: string;
    toKilo: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutUnitInput;
}
