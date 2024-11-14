import { MaterialUncheckedCreateNestedManyWithoutCategoryInput } from '../material/material-unchecked-create-nested-many-without-category.input';
import { MateriaCategoryUncheckedCreateNestedManyWithoutLastInput } from './materia-category-unchecked-create-nested-many-without-last.input';
export declare class MateriaCategoryUncheckedCreateWithoutLastInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: MaterialUncheckedCreateNestedManyWithoutCategoryInput;
    next?: MateriaCategoryUncheckedCreateNestedManyWithoutLastInput;
}
