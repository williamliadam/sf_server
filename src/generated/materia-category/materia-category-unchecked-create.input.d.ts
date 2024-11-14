import { MaterialUncheckedCreateNestedManyWithoutCategoryInput } from '../material/material-unchecked-create-nested-many-without-category.input';
import { MateriaCategoryUncheckedCreateNestedManyWithoutLastInput } from './materia-category-unchecked-create-nested-many-without-last.input';
export declare class MateriaCategoryUncheckedCreateInput {
    id?: number;
    code: string;
    name: string;
    lastId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: MaterialUncheckedCreateNestedManyWithoutCategoryInput;
    next?: MateriaCategoryUncheckedCreateNestedManyWithoutLastInput;
}
