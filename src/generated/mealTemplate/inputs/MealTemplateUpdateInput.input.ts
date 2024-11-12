import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput } from "../../dishTemplate/inputs/DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput.input";
import { UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput } from "../../user/inputs/UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput.input";

@NestJsGraphQL.InputType('MealTemplateUpdateInput', { isAbstract: true })
export class MealTemplateUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput, { nullable: true })
  createBy?: UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput, { nullable: true })
  dishTemplates?: DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput | undefined;
}
