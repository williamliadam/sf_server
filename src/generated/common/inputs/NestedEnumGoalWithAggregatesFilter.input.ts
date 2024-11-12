import * as NestJsGraphQL from "@nestjs/graphql";
import { Goal } from "../../enums/Goal.enum";
import { NestedEnumGoalFilter } from "./NestedEnumGoalFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('NestedEnumGoalWithAggregatesFilter', { isAbstract: true })
export class NestedEnumGoalWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Goal, { nullable: true })
  equals?: "KEEP" | "BULKING" | "SLIMING" | undefined;

  @NestJsGraphQL.Field(() => [Goal], { nullable: true })
  in?: Array<"KEEP" | "BULKING" | "SLIMING"> | undefined;

  @NestJsGraphQL.Field(() => [Goal], { nullable: true })
  notIn?: Array<"KEEP" | "BULKING" | "SLIMING"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGoalWithAggregatesFilter, { nullable: true })
  not?: NestedEnumGoalWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGoalFilter, { nullable: true })
  _min?: NestedEnumGoalFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumGoalFilter, { nullable: true })
  _max?: NestedEnumGoalFilter | undefined;
}
