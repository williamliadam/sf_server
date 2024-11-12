import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput } from "../../user/inputs/UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput.input";

@NestJsGraphQL.InputType('MealTemplateUpdateWithoutDishTemplatesInput', { isAbstract: true })
export class MealTemplateUpdateWithoutDishTemplatesInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput, { nullable: true })
  createBy?: UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput | undefined;
}
