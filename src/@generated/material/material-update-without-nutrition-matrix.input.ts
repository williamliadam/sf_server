import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput } from '../materia-category/materia-category-update-one-required-without-materials-nested.input';
import { IngredientUpdateManyWithoutMaterialNestedInput } from '../ingredient/ingredient-update-many-without-material-nested.input';

@InputType()
export class MaterialUpdateWithoutNutritionMatrixInput {

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

    @Field(() => MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput, {nullable:true})
    category?: MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput;

    @Field(() => IngredientUpdateManyWithoutMaterialNestedInput, {nullable:true})
    ingredients?: IngredientUpdateManyWithoutMaterialNestedInput;
}
