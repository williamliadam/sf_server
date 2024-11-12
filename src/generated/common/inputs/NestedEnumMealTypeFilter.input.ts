import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";

@NestJsGraphQL.InputType('NestedEnumMealTypeFilter', { isAbstract: true })
export class NestedEnumMealTypeFilter {
  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  equals?: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  in?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "MEAL"> | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  notIn?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "MEAL"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  not?: NestedEnumMealTypeFilter | undefined;
}
