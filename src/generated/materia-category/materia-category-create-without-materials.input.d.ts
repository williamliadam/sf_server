import { MateriaCategoryCreateNestedManyWithoutLastInput } from './materia-category-create-nested-many-without-last.input';
import { MateriaCategoryCreateNestedOneWithoutNextInput } from './materia-category-create-nested-one-without-next.input';
export declare class MateriaCategoryCreateWithoutMaterialsInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    next?: MateriaCategoryCreateNestedManyWithoutLastInput;
    last?: MateriaCategoryCreateNestedOneWithoutNextInput;
}
