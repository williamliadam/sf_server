import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";

@NestJsGraphQL.InputType('EnumMealTypeFieldUpdateOperationsInput', { isAbstract: true })
export class EnumMealTypeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  set?: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | undefined;
}
