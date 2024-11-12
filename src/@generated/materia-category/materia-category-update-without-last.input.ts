import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MaterialUpdateManyWithoutCategoryNestedInput } from '../material/material-update-many-without-category-nested.input';
import { MateriaCategoryUpdateManyWithoutLastNestedInput } from './materia-category-update-many-without-last-nested.input';

@InputType()
export class MateriaCategoryUpdateWithoutLastInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MaterialUpdateManyWithoutCategoryNestedInput, {nullable:true})
    materials?: MaterialUpdateManyWithoutCategoryNestedInput;

    @Field(() => MateriaCategoryUpdateManyWithoutLastNestedInput, {nullable:true})
    next?: MateriaCategoryUpdateManyWithoutLastNestedInput;
}
