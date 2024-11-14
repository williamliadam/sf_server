import { MaterialCreateNestedManyWithoutCategoryInput } from '../material/material-create-nested-many-without-category.input';
import { MateriaCategoryCreateNestedOneWithoutNextInput } from './materia-category-create-nested-one-without-next.input';
export declare class MateriaCategoryCreateWithoutNextInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: MaterialCreateNestedManyWithoutCategoryInput;
    last?: MateriaCategoryCreateNestedOneWithoutNextInput;
}
