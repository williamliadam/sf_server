import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput } from "../../dishTemplate/inputs/DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput.input";
import { DateTimeFieldUpdateOperationsInput } from "./DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('MealTemplateUpdateWithoutCreateByInput', { isAbstract: true })
export class MealTemplateUpdateWithoutCreateByInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput, { nullable: true })
  dishTemplates?: DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput | undefined;
}
