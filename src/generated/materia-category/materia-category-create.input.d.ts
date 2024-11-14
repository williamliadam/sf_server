import { MaterialCreateNestedManyWithoutCategoryInput } from '../material/material-create-nested-many-without-category.input';
import { MateriaCategoryCreateNestedManyWithoutLastInput } from './materia-category-create-nested-many-without-last.input';
import { MateriaCategoryCreateNestedOneWithoutNextInput } from './materia-category-create-nested-one-without-next.input';
export declare class MateriaCategoryCreateInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: MaterialCreateNestedManyWithoutCategoryInput;
    next?: MateriaCategoryCreateNestedManyWithoutLastInput;
    last?: MateriaCategoryCreateNestedOneWithoutNextInput;
}
