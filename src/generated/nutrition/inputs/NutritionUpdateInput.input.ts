import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { NutritionRowUpdateManyWithoutNutirtionNestedInput } from "../../nutritionRow/inputs/NutritionRowUpdateManyWithoutNutirtionNestedInput.input";

@NestJsGraphQL.InputType('NutritionUpdateInput', { isAbstract: true })
export class NutritionUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowUpdateManyWithoutNutirtionNestedInput, { nullable: true })
  usedRow?: NutritionRowUpdateManyWithoutNutirtionNestedInput | undefined;
}
