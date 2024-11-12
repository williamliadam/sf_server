import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { IntFieldUpdateOperationsInput } from "../../common/inputs/IntFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('DishPlanUpdateManyMutationInput', { isAbstract: true })
export class DishPlanUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
