import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput } from '../recipe/recipe-update-one-required-without-used-dish-templates-nested.input';

@InputType()
export class DishTemplateUpdateWithoutUsedMealTemplatesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amount?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput;
}
