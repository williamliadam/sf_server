import { MateriaCategoryUncheckedCreateNestedManyWithoutLastInput } from './materia-category-unchecked-create-nested-many-without-last.input';
export declare class MateriaCategoryUncheckedCreateWithoutMaterialsInput {
    id?: number;
    code: string;
    name: string;
    lastId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    next?: MateriaCategoryUncheckedCreateNestedManyWithoutLastInput;
}
