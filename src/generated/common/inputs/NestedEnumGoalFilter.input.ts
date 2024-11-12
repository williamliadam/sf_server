import * as NestJsGraphQL from "@nestjs/graphql";
import { Goal } from "../../enums/Goal.enum";

@NestJsGraphQL.InputType('NestedEnumGoalFilter', { isAbstract: true })
export class NestedEnumGoalFilter {
  @NestJsGraphQL.Field(() => Goal, { nullable: true })
  equals?: "KEEP" | "BULKING" | "SLIMING" | undefined;

  @NestJsGraphQL.Field(() => [Goal], { nullable: true })
  in?: Array<"KEEP" | "BULKING" | "SLIMING"> | undefined;

  @NestJsGraphQL.Field(() => [Goal], { nullable: true })
  notIn?: Array<"KEEP" | "BULKING" | "SLIMING"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGoalFilter, { nullable: true })
  not?: NestedEnumGoalFilter | undefined;
}
