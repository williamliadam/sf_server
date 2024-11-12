import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionUpdateOneRequiredWithoutUsedRowNestedInput } from '../nutrition/nutrition-update-one-required-without-used-row-nested.input';

@InputType()
export class NutritionRowUpdateWithoutBelongMaterialInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    percent?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NutritionUpdateOneRequiredWithoutUsedRowNestedInput, {nullable:true})
    nutirtion?: NutritionUpdateOneRequiredWithoutUsedRowNestedInput;
}
