import { MaterialCreateNestedManyWithoutCategoryInput } from '../material/material-create-nested-many-without-category.input';
import { MateriaCategoryCreateNestedManyWithoutLastInput } from './materia-category-create-nested-many-without-last.input';
export declare class MateriaCategoryCreateWithoutLastInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: MaterialCreateNestedManyWithoutCategoryInput;
    next?: MateriaCategoryCreateNestedManyWithoutLastInput;
}
