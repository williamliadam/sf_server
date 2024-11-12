import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";
import { NestedEnumMealTypeFilter } from "./NestedEnumMealTypeFilter.input";

@NestJsGraphQL.InputType('EnumMealTypeFilter', { isAbstract: true })
export class EnumMealTypeFilter {
  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  equals?: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  in?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "MEAL"> | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  notIn?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "MEAL"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  not?: NestedEnumMealTypeFilter | undefined;
}
