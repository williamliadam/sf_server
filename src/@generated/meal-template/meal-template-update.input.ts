import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput } from '../user/user-update-one-required-without-my-meal-templates-nested.input';
import { DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput } from '../dish-template/dish-template-update-many-without-used-meal-templates-nested.input';

@InputType()
export class MealTemplateUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput, {nullable:true})
    createBy?: UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput;

    @Field(() => DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput, {nullable:true})
    dishTemplates?: DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput;
}
