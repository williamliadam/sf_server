import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMealTypeFieldUpdateOperationsInput } from '../prisma/enum-meal-type-field-update-operations.input';
import { DishPlanUpdateManyWithoutUsedMealPlanNestedInput } from '../dish-plan/dish-plan-update-many-without-used-meal-plan-nested.input';

@InputType()
export class MealPlanUpdateWithoutCreateByInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    planTime?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumMealTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumMealTypeFieldUpdateOperationsInput;

    @Field(() => DishPlanUpdateManyWithoutUsedMealPlanNestedInput, {nullable:true})
    dishPlans?: DishPlanUpdateManyWithoutUsedMealPlanNestedInput;
}
