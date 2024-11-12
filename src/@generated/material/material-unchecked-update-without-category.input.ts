import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput } from '../nutrition-row/nutrition-row-unchecked-update-many-without-belong-material-nested.input';
import { IngredientUncheckedUpdateManyWithoutMaterialNestedInput } from '../ingredient/ingredient-unchecked-update-many-without-material-nested.input';

@InputType()
export class MaterialUncheckedUpdateWithoutCategoryInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nickName?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput, {nullable:true})
    nutritionMatrix?: NutritionRowUncheckedUpdateManyWithoutBelongMaterialNestedInput;

    @Field(() => IngredientUncheckedUpdateManyWithoutMaterialNestedInput, {nullable:true})
    ingredients?: IngredientUncheckedUpdateManyWithoutMaterialNestedInput;
}
