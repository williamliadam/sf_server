import { IngredientCreateNestedManyWithoutUnitInput } from '../ingredient/ingredient-create-nested-many-without-unit.input';
export declare class MateriaUnitCreateInput {
    code: string;
    name: string;
    toKilo: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientCreateNestedManyWithoutUnitInput;
}
