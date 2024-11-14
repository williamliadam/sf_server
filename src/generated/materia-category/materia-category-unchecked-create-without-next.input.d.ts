import { MaterialUncheckedCreateNestedManyWithoutCategoryInput } from '../material/material-unchecked-create-nested-many-without-category.input';
export declare class MateriaCategoryUncheckedCreateWithoutNextInput {
    id?: number;
    code: string;
    name: string;
    lastId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: MaterialUncheckedCreateNestedManyWithoutCategoryInput;
}
