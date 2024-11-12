import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumMealTypeFieldUpdateOperationsInput } from "../../common/inputs/EnumMealTypeFieldUpdateOperationsInput.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "../../common/inputs/NullableDateTimeFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('MealPlanUpdateManyMutationInput', { isAbstract: true })
export class MealPlanUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  planTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeFieldUpdateOperationsInput, { nullable: true })
  type?: EnumMealTypeFieldUpdateOperationsInput | undefined;
}
