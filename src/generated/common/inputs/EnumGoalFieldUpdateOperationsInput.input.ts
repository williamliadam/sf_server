import * as NestJsGraphQL from "@nestjs/graphql";
import { Goal } from "../../enums/Goal.enum";

@NestJsGraphQL.InputType('EnumGoalFieldUpdateOperationsInput', { isAbstract: true })
export class EnumGoalFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Goal, { nullable: true })
  set?: "KEEP" | "BULKING" | "SLIMING" | undefined;
}
